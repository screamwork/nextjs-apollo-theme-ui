import { Box } from "theme-ui";

export const BackgroundImage = () => (
  <Box
    sx={{
      position: "relative",
      height: `100vh`,
      overflow: "hidden",
    }}
  >
    <Box
      id="indexBackground"
      sx={{
        position: "fixed",
        backgroundImage: `url(${require("../public/images/crowd4.jpg")})`,
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
        maxWidth: "100%",
        zIndex: -100,
      }}
    />
  </Box>
);
