import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Divider from "@mui/material/Divider";
import { HEADER_HEIGHT, SIDEBAR_WIDTH, SIDEBAR_WIDTH_COLLAPSED } from "../theme";
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
        left: { xs: `${SIDEBAR_WIDTH_COLLAPSED}px`, md: `${SIDEBAR_WIDTH}px` },
        width: {
          xs: `calc(100% - ${SIDEBAR_WIDTH_COLLAPSED}px)`,
          md: `calc(100% - ${SIDEBAR_WIDTH}px)`,
        },
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
          px: { xs: 1.5, md: 3 },
          gap: 1,
        }}
      >
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 1,
            color: "text.secondary",
            flexGrow: 1,
            minWidth: 0,
          }}
        >
          <Box sx={{ color: "icon", display: "flex", flexShrink: 0 }}>
            <SearchIcon width={18} height={18} />
          </Box>
          <InputBase
            placeholder="Search transactions, invoices or help"
            sx={{ fontSize: 13, width: "100%", color: "text.primary" }}
          />
        </Box>

        <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }} />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 1.5, md: 4 },
            flexShrink: 0,
          }}
        >
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

          <Box sx={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <Typography
              sx={{
                fontSize: 13,
                marginRight: "15px",
                display: { xs: "none", md: "block" },
                whiteSpace: "nowrap",
              }}
            >
              John Doe
            </Typography>
            <Box
              sx={{
                color: "icon",
                display: { xs: "none", md: "flex" },
                marginRight: "10px",
              }}
            >
              <ArrowDownIcon width={11} height={7} />
            </Box>
            <Avatar
              sx={{ width: { xs: 34, md: 38 }, height: { xs: 34, md: 38 } }}
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
