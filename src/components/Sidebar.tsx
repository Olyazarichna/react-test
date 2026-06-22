import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { HEADER_HEIGHT, SIDEBAR_WIDTH } from "../theme";
import { NAV_ITEMS } from "../constants/navItems";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: SIDEBAR_WIDTH,
        flexShrink: 0,
      }}
      slotProps={{
        paper: {
          sx: {
            width: SIDEBAR_WIDTH,
            boxSizing: "border-box",
            border: "none",
            color: "surface",
            backgroundColor: "sidebarMain",
          },
        },
      }}
    >
      <Box
        sx={{
          height: HEADER_HEIGHT,
          display: "flex",
          alignItems: "center",
          px: "20px",
          py: 3,
          boxShadow: "0px 2px 6px #0000000A",
          backgroundColor: "sidebarDark",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            letterSpacing: 3,
            fontSize: 15,
            color: "surface",
          }}
        >
          IMPEKABLE
        </Typography>
      </Box>

      <List sx={{ px: 0 }}>
        {NAV_ITEMS.map((item) => {
          const ItemIcon = item.icon;
          return (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                component={NavLink}
                to={item.path}
                end={item.path === "/"}
                sx={{
                  py: "18px",
                  px: "26px",
                  gap: "15px",
                  color: "sidebarTextMuted",
                  "&:hover, &:focus-visible": {
                    backgroundColor: "sidebarHoverBg",
                    color: "sidebarTextHover",
                    "& .MuiListItemIcon-root": { color: "sidebarActive" },
                  },
                  "&.active": {
                    color: "surface",
                    backgroundColor: "sidebarActiveBg",
                    borderLeft: "5px solid",
                    borderColor: "sidebarActive",
                    pl: "21px",
                    "& .MuiListItemIcon-root": { color: "sidebarActive" },
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 0, color: "sidebarIcon" }}>
                  <ItemIcon width={18} height={18} />
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  slotProps={{ primary: { sx: { fontSize: 15, color: "surface" } } }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;
