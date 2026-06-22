import { useCallback, useEffect, useState } from "react";
import type { CalendarEvent } from "../types/types";
import { getEvents, addEvents } from "../utils/storage";
import { createDefaultEvents } from "../utils/defaultEvents";

const generateId = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2);

export const useEvents = () => {
  const [events, setEvents] = useState<CalendarEvent[]>(() => {
    const stored = getEvents();
    return stored ?? createDefaultEvents();
  });

  useEffect(() => {
    addEvents(events);
  }, [events]);

  const addEvent = useCallback((event: Omit<CalendarEvent, "id">) => {
    setEvents((prev) => [...prev, { ...event, id: generateId() }]);
  }, []);

  const updateEvent = useCallback((event: CalendarEvent) => {
    setEvents((prev) => prev.map((item) => (item.id === event.id ? event : item)));
  }, []);

  const deleteEvent = useCallback((id: string) => {
    setEvents((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return { events, addEvent, updateEvent, deleteEvent };
};
