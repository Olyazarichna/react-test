import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import PlaceholderPage from "../pages/PlaceholderPage";
import CalendarPage from "../pages/CalendarPage";

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route index element={<PlaceholderPage title="Home" />} />
          <Route path="dashboard" element={<PlaceholderPage title="Dashboard" />} />
          <Route path="inbox" element={<PlaceholderPage title="Inbox" />} />
          <Route path="products" element={<PlaceholderPage title="Products" />} />
          <Route path="invoices" element={<PlaceholderPage title="Invoices" />} />
          <Route path="customers" element={<PlaceholderPage title="Customers" />} />
          <Route path="chat-room" element={<PlaceholderPage title="Chat Room" />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="help-center" element={<PlaceholderPage title="Help Center" />} />
          <Route path="settings" element={<PlaceholderPage title="Settings" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
