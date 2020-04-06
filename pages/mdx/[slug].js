import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import path from "path";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Box, useThemeUI } from "theme-ui";
import { Layout } from "../_layout";

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
      <Box
        className="mdxpage"
        pt={theme.space[7]}
        pb={theme.space[5]}
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "white",
        }}
      >
        <Box p={[2, 3, 4]} sx={{ width: ["100%", "100%", "50%"] }}>
          <Head>
            <title>{data.title}</title>
            <meta title="description" content={data.description} />
          </Head>
          <ReactMarkdown source={mdxContent} renderers={{ code: CodeBlock }} />
        </Box>
      </Box>
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

  console.log("paths: ", paths);

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
