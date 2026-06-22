import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Divider from "@mui/material/Divider";
import { HEADER_HEIGHT, SIDEBAR_WIDTH } from "../theme";
import SearchIcon from "../assets/icons/search.svg?react";
import HelpCenterIcon from "../assets/icons/help-center.svg?react";
import ChatIcon from "../assets/icons/chat.svg?react";
import ArrowDownIcon from "../assets/icons/arrow-down.svg?react";
import NotificationIcon from "../assets/icons/notification.svg?react";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        top: 0,
        left: `${SIDEBAR_WIDTH}px`,
        width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
        height: `${HEADER_HEIGHT}px`,
        backgroundColor: "surface",
        color: "text.primary",
        boxShadow: "0px 2px 6px #0000000A",
        opacity: 1,
      }}
    >
      <Toolbar
        sx={{
          minHeight: `${HEADER_HEIGHT}px`,
          height: `${HEADER_HEIGHT}px`,
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "text.secondary",
            flexGrow: 1,
          }}
        >
          <Box sx={{ color: "icon", display: "flex" }}>
            <SearchIcon width={18} height={18} />
          </Box>
          <InputBase
            placeholder="Search transactions, invoices or help"
            sx={{ fontSize: 13, width: "100%", color: "text.primary" }}
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          <IconButton sx={{ color: "icon", padding: 0 }}>
            <HelpCenterIcon width={16} height={16} />
          </IconButton>
          <IconButton size="small" sx={{ color: "icon", padding: 0 }}>
            <ChatIcon width={16} height={16} />
          </IconButton>
          <IconButton sx={{ color: "icon", padding: 0 }}>
            <Badge
              variant="dot"
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "accentOrange",
                  minWidth: 8,
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  border: "2px solid",
                  borderColor: "surface",
                },
              }}
            >
              <NotificationIcon width={14} height={16} />
            </Badge>
          </IconButton>

          <Divider
            orientation="vertical"
            sx={{ height: 28, width: "1px", backgroundColor: "borderDivider" }}
          />

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: 13, marginRight: "15px" }}>John Doe</Typography>
            <Box sx={{ color: "icon", display: "flex", marginRight: "10px" }}>
              <ArrowDownIcon width={11} height={7} />
            </Box>
            <Avatar
              sx={{ width: 38, height: 38 }}
              src="https://i.pravatar.cc/100?img=12"
              alt="John Doe"
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
