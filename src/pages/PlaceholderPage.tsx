import Box from "@mui/material/Box";
import PageTitle from "../components/PageTitle";

type PageProps = {
  title: string;
};

const PlaceholderPage = ({ title }: PageProps) => {
  return (
    <Box sx={{ p: { xs: 3, md: 4 } }}>
      <PageTitle>{title}</PageTitle>
    </Box>
  );
};

export default PlaceholderPage;
