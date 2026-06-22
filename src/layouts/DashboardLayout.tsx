import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { HEADER_HEIGHT } from "../theme";

const DashboardLayout = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
      <Sidebar />
      <Header />
      <Box component="main" sx={{ flexGrow: 1, minWidth: 0 }}>
        <Toolbar sx={{ minHeight: `${HEADER_HEIGHT}px` }} />
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
