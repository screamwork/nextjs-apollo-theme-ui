import React from "react";
import { Box } from "theme-ui";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

export const Layout = ({ children }) => {
  return (
    <>
      <Box style={{ flex: 1, minHeight: "100vh", marginBottom: 249 }}>
        <Nav />
        <Box className="main">{children}</Box>
      </Box>
      <Footer />
    </>
  );
};
