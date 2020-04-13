import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import path from "path";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Box, Flex, useThemeUI } from "theme-ui";
import { Layout } from "../../components/Layout";

const CodeBlock = (props) => {
  const { language, value } = props;
  return (
    <SyntaxHighlighter language={language} style={okaidia}>
      {value}
    </SyntaxHighlighter>
  );
};

export default ({ mdxContent, data }) => {
  const context = useThemeUI();
  const { theme, colorMode, setColorMode } = context;

  return (
    <Layout>
      <Flex
        className="mdxpage"
        mt={[70, 70, 86]}
        pt={[theme.space[4], theme.space[5], theme.space[6]]}
        pb={theme.space[5]}
        sx={{
          flex: 1,
          justifyContent: "center",
          // alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "white",
        }}
      >
        <Box p={[2, 3, 0]} sx={{ width: ["100%", "100%", "66%"] }}>
          <Head>
            <title>{data.title}</title>
            <meta title="description" content={data.description} />
          </Head>
          <ReactMarkdown
            source={mdxContent}
            renderers={{ code: CodeBlock }}
            linkTarget="_blank"
          />
        </Box>
      </Flex>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("mdx");

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetadata = fs
    .readFileSync(path.join("mdx", slug + ".mdx"))
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      mdxContent: parsedMarkdown.content,
      data: parsedMarkdown.data,
    },
  };
};
