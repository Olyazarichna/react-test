import { createTheme } from "@mui/material/styles";

export const SIDEBAR_WIDTH = 260;
export const HEADER_HEIGHT = 70;

declare module "@mui/material/styles" {
  interface Palette {
    icon: string;
    placeholder: string;
    accentRed: string;
    accentSave: string;
    accentOrange: string;
    sidebarMain: string;
    sidebarDark: string;
    sidebarActive: string;
    sidebarIcon: string;
    sidebarTextMuted: string;
    sidebarTextHover: string;
    sidebarHoverBg: string;
    sidebarActiveBg: string;
    pageBackground: string;
    surface: string;
    borderLight: string;
    borderDivider: string;
    hoverLight: string;
    hoverLighter: string;
    hoverToolbar: string;
    inputUnderline: string;

  }
  interface PaletteOptions {
    icon?: string;
    placeholder?: string;
    accentRed?: string;
    accentSave?: string;
    accentOrange?: string;
    sidebarMain?: string;
    sidebarDark?: string;
    sidebarActive?: string;
    sidebarIcon?: string;
    sidebarTextMuted?: string;
    sidebarTextHover?: string;
    sidebarHoverBg?: string;
    sidebarActiveBg?: string;
    pageBackground?: string;
    surface?: string;
    borderLight?: string;
    borderDivider?: string;
    hoverLight?: string;
    hoverLighter?: string;
    hoverToolbar?: string;
    inputUnderline?: string;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1A90FF",
    },
    background: {
      default: "#F5F6F8",
    },
    text: {
      primary: "#4D4F5C",
      secondary: "#43425D",
    },
    icon: "#BCBCCB",
    placeholder: "#D6D6D6",
    accentRed: "#FF5F5F",
    accentSave: "#6A6996",
    accentOrange: "#FFC06A",
    sidebarMain: "#43425D",
    sidebarDark: "#3C3B53",
    sidebarActive: "#A3A0FB",
    sidebarIcon: "#A5A4BF",
    sidebarTextMuted: "rgba(255, 255, 255, 0.65)",
    sidebarTextHover: "rgba(255, 255, 255, 0.85)",
    sidebarHoverBg: "rgba(255, 255, 255, 0.06)",
    sidebarActiveBg: "rgba(0, 0, 0, 0.25)",
    pageBackground: "#F0F0F7",
    surface: "#FFFFFF",
    borderLight: "#D7DAE2",
    borderDivider: "#EBEBF2",
    hoverLight: "#F5F7FA",
    hoverLighter: "#F9FAFB",
    hoverToolbar: "#F7F8FA",
    inputUnderline: "#E2E2EA",

  },
  typography: {
    fontFamily: '"Source Sans Pro", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});
