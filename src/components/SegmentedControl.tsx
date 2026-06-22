import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export type SegmentedControlItem = {
  key: string;
  label: string;
  onClick: () => void;
};

type SegmentedControlProps = {
  items: SegmentedControlItem[];
  activeKey?: string;
  variant?: "view" | "nav";
  onItemClick?: (key: string) => void;
};

const SegmentedControl = ({
  items,
  activeKey,
  variant = "view",
  onItemClick,
}: SegmentedControlProps) => {
  const isNav = variant === "nav";

  return (
    <ButtonGroup
      variant="contained"
      sx={{
        flexShrink: 0,
        backgroundColor: "surface",
        boxShadow: "0px 2px 3px #0000000D",
        border: "1px solid",
        borderColor: "borderLight",
        borderRadius: isNav ? undefined : "4px",
        overflow: isNav ? undefined : "hidden",
        opacity: 1,
        "& .MuiButtonGroup-grouped:not(:last-of-type)": {
          borderRightColor: "borderLight",
        },
      }}
    >
      {items.map(({ key, label, onClick }) => {
        const active = activeKey === key;
        return (
          <Button
            key={key}
            disableRipple={!isNav}
            onClick={() => {
              onItemClick?.(key);
              onClick();
            }}
            sx={{
              textTransform: "none",
              fontWeight: 400,
              fontSize: 13,
              minWidth: isNav ? undefined : { xs: 56, md: 72 },
              px: { xs: 1.5, md: 2 },
              py: "6px",
              backgroundColor: "transparent",
              boxShadow: "none",
              borderRadius: 0,
              ...(isNav
                ? {}
                : {
                  borderRight: "1px solid",
                  borderColor: "borderLight",
                  "&:last-of-type": { borderRight: "none" },
                }),
              color: active
                ? "primary.main"
                : isNav
                  ? "text.primary"
                  : "text.secondary",
              "&:hover": {
                backgroundColor: isNav
                  ? "hoverToolbar"
                  : active
                    ? "hoverLight"
                    : "hoverLighter",
                boxShadow: "none",
              },
            }}
          >
            {label}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default SegmentedControl;
