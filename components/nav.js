import Link from "next/link";
import React from "react";
import { FaBars, FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import { useThemeUI } from "theme-ui";

export const Nav = () => {
  const [isSticky, setIsSticky] = React.useState(false);
  const context = useThemeUI();
  const { theme, colorMode, setColorMode } = context;
  const [showMenu, setShowMenu] = React.useState(false);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  let isMounted = true;

  const handleSetIsSticky = React.useCallback((val) => {
    setIsSticky(val);
  }, []);

  React.useEffect(() => {
    const header = document.getElementById("nav");
    const sticky = header.offsetTop + 70;
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
      <div
        id="nav"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgba(11, 11, 11, .85)",
          maxWidth: "100%",
          padding: "25px 25px 25px 55px",
          transition: "padding .15s ease-out, background-color .3s ease-out",
          zIndex: 1,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0
        }}
      >
        <Link href="/">
          <a style={{ paddingTop: theme.space[1] }}>
            <img
              style={{
                zIndex: 1,
                height: 40
              }}
              src="http://localhost/wordpressMU/avada/wp-content/uploads/sites/4/2016/06/avada-freelance-logo.png"
            />
          </a>
        </Link>

        <div
          style={{
            flex: 1,
            maxWidth: "150px",
            display: "flex",
            justifyContent: "space-evenly",
            zIndex: 5
          }}
        >
          {sidebarOpen ? (
            <FaMinus
              size={`1.75em`}
              onClick={() => handlePlusClick()}
              color={"crimson"}
            />
          ) : (
            <FaPlus
              size={`1.75em`}
              onClick={() => handlePlusClick()}
              color={"whiteSmoke"}
            />
          )}
          {showMenu ? (
            <FaTimes
              size={`1.75em`}
              onClick={() => handleBarsClick()}
              color={showMenu ? "crimson" : "inherit"}
            />
          ) : (
            <FaBars
              size={`1.75em`}
              onClick={() => handleBarsClick()}
              color={"whiteSmoke"}
            />
          )}
        </div>
      </div>
    </>
  );
};

const links = [
  { href: "https://zeit.co/now", label: "ZEIT" },
  { href: "https://github.com/zeit/next.js", label: "GitHub" }
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const linkStyle = {
  fontFamily: "Lato, sans-serif",
  fontSize: "28px",
  display: "block",
  padding: "5px 0",
  textDecoration: "none",
  textTransform: "uppercase",
  color: "crimson"
};

const NavHtml = ({ setShowMenu, showMenu }) => (
  <nav className="nav">
    <div>
      <Link href="/posts">
        <a style={linkStyle}>/POSTS</a>
      </Link>
      <Link href="/mdxposts">
        <a style={linkStyle}>/MDXPOSTS</a>
      </Link>
    </div>
    {links.map(({ key, href, label }) => (
      <div key={key}>
        <a href={href} style={linkStyle} onClick={() => {}}>
          {`${label}`}
        </a>
      </div>
    ))}
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
      backgroundColor: "#20232c",
      zIndex: 1
    }}
  >
    <NavHtml setShowMenu={setShowMenu} showMenu={showMenu} />
  </div>
);

const Sidebar = ({ sidebarOpen }) => (
  <div
    className="sidebar"
    style={{
      top: 0,
      left: sidebarOpen ? 0 : -300,
      width: 300,
      height: "100vh",
      bottom: 0,
      position: "fixed",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#20232c",
      zIndex: 1,
      transition: "all 0.25s ease-out"
    }}
  >
    <NavHtml />
  </div>
);
