import type { FC, SVGProps } from "react";

export type CalendarEvent = {
  id: string;
  title: string;
  start: string;
  end: string;
  color: string;
  notes?: string;
};

export type CalendarViewKey = "month" | "week" | "day" | "agenda";

export type CalendarViewOption = {
  key: CalendarViewKey;
  label: string;
};

export type NavKey = "today" | "back" | "next";

export type EventModalMode = "add" | "edit";

export type EventColorOption = {
  label: string;
  value: string;
};

export type SvgIcon = FC<SVGProps<SVGSVGElement>>;

export type NavItem = {
  label: string;
  path: string;
  icon: SvgIcon;
};
