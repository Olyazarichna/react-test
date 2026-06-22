import { z } from "zod";
import { startOfToday } from "./date";

export const eventSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Event name is required")
    .max(30, "Maximum 30 characters"),
  date: z
    .string()
    .min(1, "Event date is required")
    .refine((value) => {
      const [year, month, day] = value.split("-").map(Number);
      if (!year || !month || !day) return false;
      const selected = new Date(year, month - 1, day);
      return selected.getTime() >= startOfToday().getTime();
    }, "Date cannot be in the past"),
  time: z.string().min(1, "Event time is required"),
  notes: z.string().trim().min(1, "Notes are required"),
  color: z.string().optional(),
});

export type EventFormValues = z.infer<typeof eventSchema>;
