import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SegmentedControl from "./SegmentedControl";
import type { NavKey } from "../types/types";

type CalendarToolbarProps = {
  title: string;
  onToday: () => void;
  onPrev: () => void;
  onNext: () => void;
};

const CalendarToolbar = ({ title, onToday, onPrev, onNext }: CalendarToolbarProps) => {
  const [selected, setSelected] = useState<NavKey>("today");

  const navButtons = [
    { key: "today", label: "Today", onClick: onToday },
    { key: "back", label: "Back", onClick: onPrev },
    { key: "next", label: "Next", onClick: onNext },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "center" },
        gap: { xs: 1, md: 0 },
        mb: 2.5,
      }}
    >
      <SegmentedControl
        items={navButtons}
        activeKey={selected}
        variant="nav"
        onItemClick={(key) => setSelected(key as NavKey)}
      />

      <Typography
        sx={{
          position: { xs: "static", md: "absolute" },
          left: { md: "50%" },
          transform: { md: "translateX(-50%)" },
          fontSize: { xs: 16, md: 18 },
          color: "text.primary",
          textAlign: { xs: "left", md: "center" },
          pointerEvents: "none",
          width: { xs: "100%", md: "auto" },
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default CalendarToolbar;
