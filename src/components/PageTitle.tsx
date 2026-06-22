import Typography from "@mui/material/Typography";

type PageTitleProps = {
  children: string;
  variant?: "primary" | "secondary";
  mb?: number;
};

const PageTitle = ({ children, variant = "primary", mb = 1 }: PageTitleProps) => (
  <Typography
    sx={{
      fontSize: 30,
      fontWeight: 600,
      color: variant === "secondary" ? "text.secondary" : "text.primary",
      mb,
    }}
  >
    {children}
  </Typography>
);

export default PageTitle;
