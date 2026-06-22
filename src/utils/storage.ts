import type { CalendarEvent } from "../types/types";

const STORAGE_KEY = "calendar-events";

export const getEvents = (): CalendarEvent[] | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return null;
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) ? (parsed as CalendarEvent[]) : null;
  } catch {
    return null;
  }
};

export const addEvents = (events: CalendarEvent[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  } catch {

  }
};
