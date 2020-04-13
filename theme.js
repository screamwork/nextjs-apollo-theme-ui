import nightOwl from "@theme-ui/prism/presets/night-owl.json";

export default () => {
  return {
    colors: {
      text: "#000",
      background: "#fff",
      primary: "#07c",
      secondary: "#30c",
      muted: "#f6f6f9",
      gray: "#dddddf",
      accent: "#639",
      highlight: "hsla(205, 100%, 40%, 0.125)",
    },
    fonts: {
      body: "Source Sans Pro, sans-serif",
      heading: "Lato, sans-serif",
      monospace: "Menlo, monospace",
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
    fontWeights: {
      body: 400,
      heading: 700,
      bold: 700,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.25,
    },
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    sizes: {
      avatar: 48,
    },
    radii: {
      default: 4,
      circle: 99999,
    },
    shadows: {
      card: "0 0 4px rgba(0, 0, 0, .125)",
    },
    links: {
      body: {
        "textDecoration": "none",
        "color": "#222",
        "transition": "all 0.25s ease-in-out",
        "&:hover": {
          color: "#222",
        },
      },
    },
    // rebass variants
    text: {
      heading: {
        fontFamily: "heading",
        lineHeight: "heading",
        fontWeight: "heading",
      },
      display: {
        fontFamily: "heading",
        fontWeight: "heading",
        lineHeight: "heading",
        fontSize: [5, 6, 7],
      },
      caps: {
        textTransform: "uppercase",
        letterSpacing: "0.1em",
      },
    },
    variants: {
      avatar: {
        width: "avatar",
        height: "avatar",
        borderRadius: "circle",
      },
      card: {
        p: 2,
        bg: "background",
        boxShadow: "card",
      },
      link: {
        color: "orange",
        textDecoration: "none",
      },
      nav: {
        "fontSize": 1,
        "fontWeight": "bold",
        "display": "inline-block",
        "p": 2,
        "color": "inherit",
        "textDecoration": "none",
        ":hover,:focus,.active": {
          color: "primary",
        },
      },
    },
    buttons: {
      primary: {
        fontSize: 2,
        fontWeight: "bold",
        color: "background",
        bg: "primary",
        borderRadius: "default",
      },
      outline: {
        variant: "buttons.primary",
        color: "primary",
        bg: "transparent",
        boxShadow: "inset 0 0 2px",
      },
      secondary: {
        variant: "buttons.primary",
        color: "background",
        bg: "secondary",
      },
    },
    breakpoints: ["640px", "768px", "1024px", "1280px"], //["40em", "56em", "64em"],
    myStyles: {
      navBlack: "rgb(32, 36, 44)",
    },
    styles: {
      root: {
        fontFamily: "body",
        fontWeight: "body",
        lineHeight: "body",
        color: "text",
        a: {
          textDecoration: "none",
          color: "secondary",
        },
        h1: {
          fontSize: 5,
          fontFamily: "heading",
          fontWeight: "heading",
          color: "primary",
        },
        h2: {
          fontSize: 4,
          fontFamily: "heading",
          fontWeight: "heading",
          color: "primary",
        },
        h3: {
          fontSize: 3,
          fontFamily: "heading",
          fontWeight: "heading",
          color: "primary",
        },
        h4: {
          fontSize: 2,
          fontFamily: "heading",
          fontWeight: "heading",
          color: "primary",
        },
        h5: {
          fontSize: 1,
          fontFamily: "heading",
          fontWeight: "heading",
          color: "primary",
        },
        h6: {
          fontSize: 0,
          fontFamily: "heading",
          fontWeight: "heading",
          color: "primary",
        },
        code: {
          ...nightOwl,
          marginTop: "space[3]",
          marginBottom: "space[3]",
        },
        img: {
          maxHeight: "450px",
          maxWidth: "100%",
          objectFit: "cover",
        },
      },
    },
  };
};
