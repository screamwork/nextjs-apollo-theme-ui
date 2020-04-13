import { MDXProvider } from "@mdx-js/react";
import Prism from "@theme-ui/prism";
import React from "react";
import { ThemeProvider } from "theme-ui";
import "../styles.scss";
import theme from "../theme";

const components = {
  pre: ({ children }) => <>{children}</>,
  code: Prism,
};

export default ({ Component, pageProps }) => {
  return (
    <MDXProvider components={components}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </MDXProvider>
  );
};
