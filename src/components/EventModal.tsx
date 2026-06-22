import { useEffect, useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Popover from "@mui/material/Popover";
import TextField, { type TextFieldProps } from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DateRangeIcon from "@mui/icons-material/DateRange";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { EVENT_COLORS } from "../utils/colors";
import type { EventModalMode } from "../types/types";
import { eventSchema, type EventFormValues } from "../utils/eventSchema";

type EventModalProps = {
  open: boolean;
  mode: EventModalMode;
  initialValues: EventFormValues;
  anchorEl?: HTMLElement | null;
  anchorPosition?: { top: number; left: number } | null;
  onClose: () => void;
  onSave: (values: EventFormValues) => void;
  onDelete?: () => void;
};


const StyledEventField = styled(TextField)(({ theme }) => ({
  "& .MuiInput-root": {
    fontSize: 11,
    color: 'theme.palette.placeholder',
    paddingBottom: "4px",
    "&:before": { borderBottomColor: theme.palette.inputUnderline },
    "&:hover:not(.Mui-disabled):not(.Mui-error):before": {
      borderBottomColor: theme.palette.icon,
    },
  },
  "& .MuiInput-input::placeholder": {
    color: theme.palette.placeholder,
    opacity: 1,
  },
  "& input::-webkit-calendar-picker-indicator": { display: "none" },
  "& input::-webkit-inner-spin-button": { display: "none" },
  "& input::-webkit-clear-button": { display: "none" },
}));

const EventField = ({ variant = "standard", fullWidth = true, ...props }: TextFieldProps) => (
  <StyledEventField variant={variant} fullWidth={fullWidth} {...props} />
);

const openNativePicker = (ref: React.RefObject<HTMLInputElement | null>) => {
  const el = ref.current as (HTMLInputElement & { showPicker?: () => void }) | null;
  if (el && typeof el.showPicker === "function") el.showPicker();
};

const EventModal = ({
  open,
  mode,
  initialValues,
  anchorEl,
  anchorPosition,
  onClose,
  onSave,
  onDelete,
}: EventModalProps) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EventFormValues>({
    resolver: zodResolver(eventSchema),
    defaultValues: initialValues,
  });

  const dateRef = useRef<HTMLInputElement | null>(null);
  const timeRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (open) reset(initialValues);
  }, [open, initialValues, reset]);

  const submit = handleSubmit((values) => onSave(values));
  const isEdit = mode === "edit";
  const useAnchorEl = Boolean(anchorEl);

  return (
    <Popover
      open={open}
      onClose={onClose}
      anchorReference={useAnchorEl ? "anchorEl" : "anchorPosition"}
      anchorEl={anchorEl ?? undefined}
      anchorPosition={anchorPosition ?? undefined}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      slotProps={{
        paper: {
          sx: {
            position: "relative",
            overflow: "visible",
            width: 200,

            mt: "13px",
            p: "25px",
            borderRadius: "10px",
            border: "1px solid",
            borderColor: "text.secondary",
            boxShadow: "0px 3px 18px #00000029",

            "&::before": {
              content: '""',
              position: "absolute",
              top: -13,
              left: "50%",
              transform: "translateX(-50%)",
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderBottomWidth: "13px",
              borderBottomStyle: "solid",
              borderBottomColor: "text.secondary",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              top: -11,
              left: "50%",
              transform: "translateX(-50%)",
              borderLeft: "6px solid transparent",
              borderRight: "11px solid transparent",

            },
          },
        },
      }}
    >
      <IconButton
        type="button"
        onClick={onClose}
        aria-label="Close"
        sx={{ position: "absolute", top: 7, right: 7, color: "placeholder", p: 0 }}
      >
        <HighlightOffRoundedIcon sx={{ fontSize: 26 }} />
      </IconButton>

      <Box component="form" onSubmit={submit} noValidate>
        <Stack spacing={2.5}>
          <Controller
            name="title"
            control={control}
            render={({ field: { ref, ...field } }) => (
              <EventField
                {...field}
                inputRef={ref}
                placeholder="event name"
                error={!!errors.title}
                helperText={errors.title?.message}
                slotProps={{ htmlInput: { maxLength: 30 } }}
              />
            )}
          />

          <Controller
            name="date"
            control={control}
            render={({ field: { ref, ...field } }) => (
              <EventField
                {...field}
                inputRef={(el) => {
                  ref(el);
                  dateRef.current = el;
                }}
                type="date"
                error={!!errors.date}
                helperText={errors.date?.message}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          type="button"
                          edge="end"
                          size="small"
                          aria-label="Pick a date"
                          onClick={() => openNativePicker(dateRef)}
                          sx={{ color: "placeholder" }}
                        >
                          <DateRangeIcon fontSize="small" />
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            )}
          />

          <Controller
            name="time"
            control={control}
            render={({ field: { ref, ...field } }) => (
              <EventField
                {...field}
                inputRef={(el) => {
                  ref(el);
                  timeRef.current = el;
                }}
                type="time"
                error={!!errors.time}
                helperText={errors.time?.message}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          type="button"
                          edge="end"
                          size="small"
                          aria-label="Pick a time"
                          onClick={() => openNativePicker(timeRef)}
                          sx={{ color: "placeholder" }}
                        >
                          <AccessTimeIcon fontSize="small" />
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            )}
          />

          <Controller
            name="notes"
            control={control}
            render={({ field: { ref, ...field } }) => (
              <EventField
                {...field}
                inputRef={ref}
                placeholder="notes"
                error={!!errors.notes}
                helperText={errors.notes?.message}
              />
            )}
          />

          <Controller
            name="color"
            control={control}
            render={({ field }) => (
              <Box sx={{ display: "flex", gap: 0.75, flexWrap: "wrap", pt: 0.5 }}>
                {EVENT_COLORS.map((option) => {
                  const selected = field.value === option.value;
                  return (
                    <IconButton
                      key={option.value}
                      type="button"
                      aria-label={option.label}
                      aria-pressed={selected}
                      onClick={() => field.onChange(selected ? "" : option.value)}
                      sx={{
                        width: 20,
                        height: 20,
                        p: 0,
                        bgcolor: option.value,
                        border: selected ? "2px solid" : "2px solid transparent",
                        borderColor: selected ? "text.secondary" : "transparent",
                        "&:hover": { bgcolor: option.value, opacity: 0.85 },
                      }}
                    />
                  );
                })}
              </Box>
            )}
          />
        </Stack>

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 3.5 }}>
          <Button
            type="button"
            disableRipple
            onClick={isEdit ? onDelete : onClose}
            sx={{
              minWidth: 0,
              p: 0,
              fontSize: 12,

              textTransform: "none",
              color: "accentRed",
              "&:hover": { backgroundColor: "transparent", opacity: 0.8 },
            }}
          >
            {isEdit ? "DISCARD" : "Cancel"}
          </Button>
          <Button
            type="button"
            disableRipple
            onClick={submit}
            sx={{
              minWidth: 0,
              p: 0,
              fontSize: 12,
              textTransform: "none",
              color: "accentSave",
              "&:hover": { backgroundColor: "transparent", opacity: 0.8 },
            }}
          >
            {isEdit ? "EDIT" : "Save"}
          </Button>
        </Box>
      </Box>
    </Popover>
  );
};

export default EventModal;
