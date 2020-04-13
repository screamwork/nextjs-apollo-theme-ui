import { MDXProvider } from "@mdx-js/react";
import Prism from "@theme-ui/prism";
import React from "react";
import { Heading, ThemeProvider } from "theme-ui";
import "../styles.scss";
import theme from "../theme";

const components = {
  h1: (props) => <Heading as="h5" {...props} />,
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
