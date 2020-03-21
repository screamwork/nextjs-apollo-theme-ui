import { Link } from "next/link";
import React from "react";
import { Box } from "theme-ui";

const links = [
  { href: "https://zeit.co/now", label: "ZEIT" },
  { href: "https://github.com/zeit/next.js", label: "GitHub" }
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const navHTML = (showMenu, setShowMenu) => (
  <nav className="nav">
    <div>
      <Link href="/posts">
        <a
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          /POSTS
        </a>
      </Link>
    </div>
    {links.map(({ key, href, label }) => (
      <div key={key}>
        <a href={href} onClick={() => {}}>
          {`${label}`}
        </a>
      </div>
    ))}
  </nav>
);

export const Menu = ({ showMenu, setShowMenu }) => {
  if (showMenu) {
    return (
      <Box
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          position: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#20232c",
          zIndex: 1
        }}
      >
        {navHTML(showMenu, setShowMenu)}
      </Box>
    );
  } else {
    return "";
  }
};
