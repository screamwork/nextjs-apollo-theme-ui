import Link from "next/link";
import React from "react";

export const SidebarContent = () => {
  return (
    <div style={{ padding: "75px 60px 75px 30px" }} className="sidebar">
      <h2 style={{ color: "whiteSmoke" }}>Sidebar content</h2>
      <Link href="/">
        <a>Menu Item 1</a>
      </Link>
      <Link href="/">
        <a>Menu Item 2</a>
      </Link>
      <Link href="/">
        <a>Menu Item 3</a>
      </Link>
    </div>
  );
};
