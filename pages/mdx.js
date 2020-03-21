import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";
import { Box, useThemeUI } from "theme-ui";
import { withApollo } from "../apollo";
import { Layout } from "./_layout";

const MdxPage = () => {
  const context = useThemeUI();
  const router = useRouter();
  const { theme, colorMode, setColorMode } = context;
  let DynamicComponent = null;

  const pagename = router.asPath.replace("/mdx/", "");
  if (process.browser) {
    DynamicComponent = dynamic(import(`./mdx/${pagename}.mdx`));
  }

  return (
    <Layout>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "white"
        }}
      >
        <Box p={5}>{DynamicComponent && <DynamicComponent />}</Box>
      </Box>
    </Layout>
  );
};

// MdxPage.getInitialProps = async (context) => {

// };

export default withApollo({ ssr: false })(MdxPage);
