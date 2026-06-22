import HomeIcon from "../assets/icons/home.svg?react";
import DashboardIcon from "../assets/icons/dashboard.svg?react";
import InboxIcon from "../assets/icons/inbox.svg?react";
import ProductsIcon from "../assets/icons/products.svg?react";
import InvoicesIcon from "../assets/icons/invoices.svg?react";
import CustomersIcon from "../assets/icons/customers.svg?react";
import ChatRoomIcon from "../assets/icons/chat-room.svg?react";
import CalendarIcon from "../assets/icons/calendar.svg?react";
import HelpCenterIcon from "../assets/icons/help-center.svg?react";
import SettingsIcon from "../assets/icons/settings.svg?react";

import type { NavItem } from "../types/types";
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/", icon: HomeIcon },
  { label: "Dashboard", path: "/dashboard", icon: DashboardIcon },
  { label: "Inbox", path: "/inbox", icon: InboxIcon },
  { label: "Products", path: "/products", icon: ProductsIcon },
  { label: "Invoices", path: "/invoices", icon: InvoicesIcon },
  { label: "Customers", path: "/customers", icon: CustomersIcon },
  { label: "Chat Room", path: "/chat-room", icon: ChatRoomIcon },
  { label: "Calendar", path: "/calendar", icon: CalendarIcon },
  { label: "Help Center", path: "/help-center", icon: HelpCenterIcon },
  { label: "Settings", path: "/settings", icon: SettingsIcon },
];
