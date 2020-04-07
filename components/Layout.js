import React from "react";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

export const Layout = ({ children }) => {
  return (
    <>
      <div style={{ flex: 1, minHeight: "100vh", marginBottom: 249 }}>
        <Nav />
        <div className="main">{children}</div>
      </div>
      <Footer />
    </>
  );
};
