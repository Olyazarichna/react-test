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
        alignItems: "center",
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
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 18,
          color: "text.primary",
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default CalendarToolbar;
