import type { CalendarEvent } from "../types/types";
import { EVENT_COLORS } from "./colors";

const id = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2);

const atDay = (day: number, hour: number, minutes = 0): string => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), day, hour, minutes).toISOString();
};

export const createDefaultEvents = (): CalendarEvent[] => [
  {
    id: id(),
    title: "Team standup",
    start: atDay(3, 9, 30),
    end: atDay(3, 10, 0),
    color: EVENT_COLORS[0].value,
    notes: "Daily sync with the team",
  },
  {
    id: id(),
    title: "Product demo",
    start: atDay(8, 14, 0),
    end: atDay(8, 15, 30),
    color: EVENT_COLORS[1].value,
    notes: "Show the new release to stakeholders",
  },
  {
    id: id(),
    title: "Design review",
    start: atDay(8, 16, 0),
    end: atDay(8, 17, 0),
    color: EVENT_COLORS[3].value,
    notes: "Review the latest mockups",
  },
  {
    id: id(),
    title: "Client call",
    start: atDay(15, 11, 0),
    end: atDay(15, 12, 0),
    color: EVENT_COLORS[2].value,
    notes: "Discuss project scope",
  },
  {
    id: id(),
    title: "Release deadline",
    start: atDay(21, 18, 0),
    end: atDay(21, 19, 0),
    color: EVENT_COLORS[4].value,
    notes: "Ship version 1.0",
  },
  {
    id: id(),
    title: "Sprint planning",
    start: atDay(28, 10, 0),
    end: atDay(28, 11, 30),
    color: EVENT_COLORS[0].value,
    notes: "Plan next sprint backlog",
  },
];
