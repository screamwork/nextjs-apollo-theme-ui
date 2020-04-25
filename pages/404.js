import { Box } from "theme-ui";

export default function Custom404() {
  return (
    <Box
      sx={{
        height: "100vh",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>* 404 - Page Not Found</h1>
    </Box>
  );
}
