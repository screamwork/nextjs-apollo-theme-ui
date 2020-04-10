import React from "react";
import { Box } from "theme-ui";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

export const Layout = ({ children }) => {
  return (
    <>
      <Box sx={{ flex: 1, minHeight: "100vh", marginBottom: [146, 191, 231] }}>
        <Nav />
        <Box className="main">{children}</Box>
      </Box>
      <Footer />
    </>
  );
};
