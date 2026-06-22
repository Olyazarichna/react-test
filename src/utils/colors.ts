import type { EventColorOption } from "../types/types";

export const EVENT_COLORS: EventColorOption[] = [
  { label: "Blue", value: "#3B86FF" },
  { label: "Green", value: "#2EB872" },
  { label: "Orange", value: "#F5A623" },
  { label: "Purple", value: "#8E44EC" },
  { label: "Red", value: "#E5484D" },
];

export const DEFAULT_EVENT_COLOR = "#3B86FF";

export const resolveEventColor = (color?: string) =>
  color && color.length > 0 ? color : DEFAULT_EVENT_COLOR;
