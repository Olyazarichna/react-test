import type { CalendarViewKey, CalendarViewOption } from "../types/types";

export const DEFAULT_EVENT_DURATION_MS = 60 * 60 * 1000;

export const VIEW_TO_FC: Record<CalendarViewKey, string> = {
  month: "dayGridMonth",
  week: "timeGridWeek",
  day: "timeGridDay",
  agenda: "listWeek",
};

export const FC_TO_VIEW: Record<string, CalendarViewKey> = {
  dayGridMonth: "month",
  timeGridWeek: "week",
  timeGridDay: "day",
  listWeek: "agenda",
};

export const VIEW_OPTIONS: CalendarViewOption[] = [
  { key: "month", label: "Month" },
  { key: "week", label: "Week" },
  { key: "day", label: "Day" },
  { key: "agenda", label: "Agenda" },
];
