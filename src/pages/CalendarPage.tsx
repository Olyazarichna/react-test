import { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import type {
  DateSelectArg,
  DatesSetArg,
  EventClickArg,
  EventDropArg,
  EventInput,
} from "@fullcalendar/core";
import type { EventResizeDoneArg } from "@fullcalendar/interaction";
import CalendarToolbar from "../components/CalendarToolbar";
import EventModal from "../components/EventModal";
import PageTitle from "../components/PageTitle";
import SegmentedControl from "../components/SegmentedControl";
import { useEvents } from "../hooks/useEvents";
import type { CalendarViewKey, EventModalMode } from "../types/types";
import { resolveEventColor } from "../utils/colors";
import { combineDateAndTime, toDateInput, toTimeInput } from "../utils/date";
import type { EventFormValues } from "../utils/eventSchema";
import {
  DEFAULT_EVENT_DURATION_MS,
  FC_TO_VIEW,
  VIEW_OPTIONS,
  VIEW_TO_FC,
} from "../utils/calendarViews";

const initFormValues = (
  start: Date,
  title = "",
  notes = "",
  color = "",
): EventFormValues => ({
  title,
  date: toDateInput(start),
  time: toTimeInput(start),
  notes,
  color,
});

const CalendarPage = () => {
  const calendarRef = useRef<FullCalendar>(null);
  const { events, addEvent, updateEvent, deleteEvent } = useEvents();

  const [view, setView] = useState<CalendarViewKey>("month");
  const [title, setTitle] = useState("");
  const [highlightToday, setHighlightToday] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<EventModalMode>("add");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [anchorPos, setAnchorPos] = useState<{ top: number; left: number } | null>(null);
  const [formValues, setFormValues] = useState<EventFormValues>(() =>
    initFormValues(new Date()),
  );

  const getCalendarApi = () => calendarRef.current?.getApi();


  const fcEvents: EventInput[] = events.map((event) => ({
    id: event.id,
    title: event.title,
    start: event.start,
    end: event.end,
    backgroundColor: event.color,
    borderColor: event.color,
  }));

  const handleDatesSet = (arg: DatesSetArg) => {
    setTitle(arg.view.title);
    const mapped = FC_TO_VIEW[arg.view.type];
    if (mapped && mapped !== view) setView(mapped);
  };

  const handleViewChange = (next: CalendarViewKey) => {
    setView(next);
    getCalendarApi()?.changeView(VIEW_TO_FC[next]);
  };

  const handleSelect = (arg: DateSelectArg) => {
    const target = arg.jsEvent?.target as HTMLElement | null;

    const dayCell = target?.closest<HTMLElement>(".fc-daygrid-day") ?? null;
    if (dayCell) {
      setAnchorEl(dayCell);
      setAnchorPos(null);
    } else if (arg.jsEvent) {
      setAnchorEl(null);
      setAnchorPos({ top: arg.jsEvent.clientY, left: arg.jsEvent.clientX });
    } else {
      setAnchorEl(null);
      setAnchorPos(null);
    }

    setModalMode("add");
    setEditingId(null);
    setFormValues(initFormValues(arg.start));
    setModalOpen(true);
    getCalendarApi()?.unselect();
  };

  const handleEventClick = (arg: EventClickArg) => {
    const existing = events.find((event) => event.id === arg.event.id);
    if (!existing) return;
    setAnchorEl(arg.el);
    setAnchorPos(null);
    setModalMode("edit");
    setEditingId(existing.id);
    setFormValues(
      initFormValues(
        new Date(existing.start),
        existing.title,
        existing.notes ?? "",
        existing.color,
      ),
    );
    setModalOpen(true);
  };


  const handleEventChange = (arg: EventDropArg | EventResizeDoneArg) => {
    const existing = events.find((event) => event.id === arg.event.id);
    if (!existing || !arg.event.start) return;
    const end =
      arg.event.end ??
      new Date(arg.event.start.getTime() + DEFAULT_EVENT_DURATION_MS);
    updateEvent({ ...existing, start: arg.event.start.toISOString(), end: end.toISOString() });
  };

  const handleSave = (values: EventFormValues) => {
    const start = combineDateAndTime(values.date, values.time);
    const title = values.title.trim();
    const notes = values.notes.trim();

    const color = resolveEventColor(values.color);

    if (modalMode === "add") {
      const end = new Date(new Date(start).getTime() + DEFAULT_EVENT_DURATION_MS).toISOString();
      addEvent({ title, start, end, color, notes });
    } else if (editingId) {
      const existing = events.find((event) => event.id === editingId);
      const duration = existing
        ? new Date(existing.end).getTime() - new Date(existing.start).getTime()
        : DEFAULT_EVENT_DURATION_MS;
      const end = new Date(new Date(start).getTime() + duration).toISOString();
      updateEvent({
        id: editingId,
        title,
        start,
        end,
        color,
        notes,
      });
    }
    setModalOpen(false);
  };

  const handleDelete = () => {
    if (editingId) deleteEvent(editingId);
    setModalOpen(false);
  };

  return (
    <Box sx={{ py: { xs: 2, md: "32px" }, px: { xs: 2, md: "75px" }, backgroundColor: "pageBackground" }}>
      <PageTitle variant="secondary" mb={4}>
        Calendar
      </PageTitle>

      <Paper
        elevation={0}
        sx={{
          p: { xs: 1.5, md: 2.5 },
          backgroundColor: "surface",
          borderRadius: 0,
          boxShadow: "0px 2px 6px #0000000A",
          opacity: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
          <Typography sx={{ fontSize: 18, color: "text.primary" }}>
            Calendar View
          </Typography>
          <SegmentedControl
            items={VIEW_OPTIONS.map((option) => ({
              key: option.key,
              label: option.label,
              onClick: () => handleViewChange(option.key),
            }))}
            activeKey={view}
            variant="view"
          />
        </Box>


        <CalendarToolbar
          title={title}
          onToday={() => {
            getCalendarApi()?.today();
            setHighlightToday(true);
          }}
          onPrev={() => {
            getCalendarApi()?.prev();
            setHighlightToday(false);
          }}
          onNext={() => {
            getCalendarApi()?.next();
            setHighlightToday(false);
          }}
        />

        <Box className={highlightToday ? "today-highlight" : undefined}>
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
            initialView={VIEW_TO_FC[view]}
            headerToolbar={false}
            height="auto"
            editable
            selectable
            selectMirror
            dayMaxEvents={3}
            eventDisplay="block"
            displayEventTime={false}
            nowIndicator
            allDaySlot
            allDayText="all day"
            slotDuration="02:00:00"
            slotLabelInterval="02:00:00"
            slotLabelContent={(arg) => {
              const hours = arg.date.getHours();
              const meridiem = hours < 12 ? "AM" : "PM";
              const hour12 = hours % 12 === 0 ? 12 : hours % 12;
              return `${hour12}:00 ${meridiem}`;
            }}
            slotLabelClassNames={(arg) => {
              const slotHour = arg.date.getHours();
              const nowHour = new Date().getHours();
              return nowHour >= slotHour && nowHour < slotHour + 2 ? ["fc-slot-now"] : [];
            }}
            dayHeaderContent={(arg) =>
              arg.view.type === "dayGridMonth"
                ? arg.text
                : `${arg.date.toLocaleDateString("en-US", { weekday: "short" })} ${String(
                  arg.date.getDate(),
                ).padStart(2, "0")}/${String(arg.date.getMonth() + 1).padStart(2, "0")}`
            }
            titleRangeSeparator=" - "
            views={{
              timeGridWeek: {
                titleFormat: { month: "short", day: "numeric" },
              },
              timeGridDay: {
                titleFormat: { weekday: "long", month: "short", day: "numeric", omitCommas: true },
              },
            }}
            events={fcEvents}
            eventClassNames={(arg) => {
              const start = arg.event.start?.getTime();
              if (start == null) return [];
              const end = arg.event.end?.getTime() ?? start;
              const overlaps = events.some((other) => {
                if (other.id === arg.event.id) return false;
                const otherStart = new Date(other.start).getTime();
                const otherEnd = new Date(other.end).getTime();
                return start < otherEnd && otherStart < end;
              });
              return overlaps ? [] : ["fc-event-solo"];
            }}
            datesSet={handleDatesSet}
            select={handleSelect}
            eventClick={handleEventClick}
            eventDrop={handleEventChange}
            eventResize={handleEventChange}
          />
        </Box>
      </Paper>

      <EventModal
        open={modalOpen}
        mode={modalMode}
        initialValues={formValues}
        anchorEl={anchorEl}
        anchorPosition={anchorPos}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        onDelete={handleDelete}
      />
    </Box>
  );
};

export default CalendarPage;
