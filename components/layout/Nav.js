// @ts-check
import Link from "next/link";
import React from "react";
import {
  FaBars,
  FaExternalLinkAlt,
  FaMinus,
  FaPlus,
  FaTimes,
} from "react-icons/fa";
import { Box, Flex, Heading, useThemeUI } from "theme-ui";
import { SocialIcons } from "../SocialIcons";

export const Nav = () => {
  const [isSticky, setIsSticky] = React.useState(false);
  const context = useThemeUI();
  const { theme, colorMode, setColorMode } = context;
  const [showMenu, setShowMenu] = React.useState(false);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  let isMounted = true;

  const iconHeight = `1.5em`;
  const logoHeight = `40px`;

  const handleSetIsSticky = React.useCallback((val) => {
    setIsSticky(val);
  }, []);

  React.useEffect(() => {
    const header = document.getElementById("nav");
    const sticky = header.offsetTop + 50;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (isMounted) {
        if (window.pageYOffset > sticky) {
          handleSetIsSticky(true);
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
          handleSetIsSticky(false);
        }
      }
    });
    return () => {
      isMounted = false;
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, [isSticky, setIsSticky]);

  const handleBarsClick = () => {
    setShowMenu(!showMenu);
  };
  const handlePlusClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {showMenu && <Menu showMenu={showMenu} setShowMenu={setShowMenu} />}
      <Sidebar sidebarOpen={sidebarOpen} />
      <Flex
        id="nav"
        p={["7px 25px 7px 5px", "7px 25px 7px 5px", "7px 55px 7px 35px"]}
        sx={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgba(11, 11, 11, .85)",
          maxWidth: "100%",
          transition: "padding .15s ease-out, background-color .3s ease-out",
          zIndex: 1,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <Link href="/">
          <a
            style={{
              padding: `${theme.space[2]}px`,
              textDecoration: "none",
            }}
          >
            <Flex>
              <img
                style={{
                  zIndex: 1,
                  width: logoHeight,
                  borderRadius: 10,
                }}
                src="/images/gphoto.jpg"
              />
              <Heading
                as="h2"
                sx={{
                  lineHeight: logoHeight,
                  marginLeft: [
                    `${theme.space[2]}px`,
                    `${theme.space[2]}px`,
                    `${theme.space[3]}px`,
                  ],
                  color: "whitesmoke",
                }}
              >
                Gu Ng
              </Heading>
            </Flex>
          </a>
        </Link>

        <Flex
          sx={{
            flex: 1,
            maxWidth: "75px",
            justifyContent: "space-between",
            zIndex: 5,
          }}
        >
          {sidebarOpen ? (
            <Box
              sx={{
                "height": iconHeight,
                ":hover": {
                  cursor: "pointer",
                },
              }}
            >
              <FaMinus
                size={iconHeight}
                onClick={() => handlePlusClick()}
                color={"crimson"}
              />
            </Box>
          ) : (
            <Box
              sx={{
                "height": iconHeight,
                ":hover": {
                  cursor: "pointer",
                },
              }}
            >
              <FaPlus
                size={iconHeight}
                onClick={() => handlePlusClick()}
                color={"whiteSmoke"}
              />
            </Box>
          )}

          {showMenu ? (
            <Box
              sx={{
                "height": iconHeight,
                ":hover": {
                  cursor: "pointer",
                },
              }}
            >
              <FaTimes
                size={iconHeight}
                onClick={() => handleBarsClick()}
                color={showMenu ? "crimson" : "inherit"}
              />
            </Box>
          ) : (
            <Box
              sx={{
                "height": iconHeight,
                ":hover": {
                  cursor: "pointer",
                },
              }}
            >
              <FaBars
                size={iconHeight}
                onClick={() => handleBarsClick()}
                color={"whiteSmoke"}
              />
            </Box>
          )}
        </Flex>
      </Flex>
    </>
  );
};

const links = [
  { href: "https://zeit.co/now", label: "ZEIT" },
  { href: "https://google.com", label: "Google" },
  { href: "https://last.fm", label: "LastFM" },
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const linkStyle = {
  fontFamily: "Lato, sans-serif",
  fontSize: "24px",
  display: "block",
  padding: "5px 0",
  textDecoration: "none",
  textTransform: "uppercase",
  color: "crimson",
};

const NavHtml = ({ setShowMenu, showMenu }) => (
  <nav>
    <div>
      <Link href="/wp-posts">
        <a style={linkStyle}>/WP POSTS</a>
      </Link>
      <Link href="/mdx-posts">
        <a style={linkStyle}>/MDX POSTS</a>
      </Link>
      <Link href="/masonry">
        <a style={linkStyle}>/Masonry Unsplash</a>
      </Link>
    </div>
    {links.map(({ key, href, label }) => (
      <Box
        key={key}
        sx={{ display: "flex", alignItems: "center", flexDirection: "row" }}
      >
        <a href={href} style={linkStyle} onClick={() => {}}>
          {`${label}`}
          <FaExternalLinkAlt
            size={16}
            style={{ color: "crimson", marginLeft: `12px` }}
          />
        </a>
      </Box>
    ))}
    <Box
      mt={[4, 5, 5]}
      pb={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SocialIcons />
    </Box>
  </nav>
);

const Menu = ({ setShowMenu, showMenu }) => (
  <div
    style={{
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      position: "fixed",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(32, 35, 44,.95)",
      zIndex: 1,
    }}
  >
    <NavHtml setShowMenu={setShowMenu} showMenu={showMenu} />
  </div>
);

const Sidebar = ({ sidebarOpen }) => (
  <Box
    mt={`70px`}
    px={4}
    className="sidebar"
    style={{
      top: 0,
      left: sidebarOpen ? 0 : -320,
      width: 320,
      height: "100vh",
      bottom: 0,
      position: "fixed",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#20232c",
      zIndex: 1,
      transition: "all 0.25s ease-out",
    }}
  >
    <NavHtml />
  </Box>
);
