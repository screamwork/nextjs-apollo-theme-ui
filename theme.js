import nightOwl from "@theme-ui/prism/presets/night-owl.json";

export const theme = () => {
  return Object.assign({}, preset, {
    breakpoints: ["40em", "56em", "64em"],
    myStyles: {
      navBlack: "rgb(32, 36, 44)",
    },
    styles: {
      h1: {
        fontSize: 5,
        fontFamily: "heading",
        fontWeight: "heading",
        color: "primary",
        mt: 4,
        mb: 2,
      },
      h2: {
        fontSize: 4,
        fontFamily: "heading",
        fontWeight: "heading",
        color: "primary",
        mt: 4,
        mb: 2,
      },
      h3: {
        fontSize: 3,
        fontFamily: "heading",
        fontWeight: "heading",
        color: "primary",
        mt: 4,
        mb: 2,
      },
      h4: {
        fontSize: 2,
        fontFamily: "heading",
        fontWeight: "heading",
        color: "primary",
        mt: 4,
        mb: 2,
      },
      h5: {
        fontSize: 1,
        fontFamily: "heading",
        fontWeight: "heading",
        color: "primary",
        mt: 4,
        mb: 2,
      },
      h6: {
        fontSize: 0,
        fontFamily: "heading",
        fontWeight: "heading",
        color: "primary",
        mt: 4,
        mb: 2,
      },
      code: {
        ...nightOwl,
        marginTop: preset.space[3],
        marginBottom: preset.space[3],
      },
      img: {
        width: "100%",
        maxHeight: "450px",
        maxWidth: "100%",
        objectFit: "cover",
      },
    },
  });
};

export default theme;

export const preset = {
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
    body: "system-ui, sans-serif",
    heading: "inherit",
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
      color: "primary",
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
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
  },
};
