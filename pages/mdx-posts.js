// @ts-check
import axios from "axios";
import Link from "next/link";
import pagination from "pagination";
import React from "react";
import { FaCalendarDay } from "react-icons/fa";
import { Box, Flex, Heading, Text, useThemeUI } from "theme-ui";
import { withApollo } from "../apollo";
import { Layout } from "../components/Layout";

const MdxPosts = ({ data }) => {
  const context = useThemeUI();
  const { theme, colorMode, setColorMode } = context;
  const [paginatedPosts, setPaginatedPosts] = React.useState([]);
  const [current, setCurrent] = React.useState(1);
  const rowsPerPage = 3;
  let sliced = null;

  const getSliced = (offset, page) => {
    return data.slice(
      offset - 1,
      page * rowsPerPage > data.length ? data.length : page * rowsPerPage
    );
  };

  const getOffset = (page) => {
    return (page - 1) * rowsPerPage + 1;
  };

  const handlePagination = (page) => {
    const offset = getOffset(page);
    sliced = getSliced(offset, page);
    setPaginatedPosts(sliced);
  };

  const handleClick = (e) => {
    e.preventDefault();
    let page = e.target.href.match(new RegExp(/(page=(\d*))/g));
    page = parseInt(page[0].split("=")[1], 10);
    setCurrent(page);
    sliced = getSliced(getOffset(current), current);
    setPaginatedPosts(sliced);
  };

  React.useEffect(() => {
    handlePagination(current);

    const aTags = document.querySelectorAll(".paginator a");

    aTags.forEach((a) => {
      a.addEventListener("click", handleClick);
    });

    return () => {
      aTags.forEach((a) => {
        a.removeEventListener("click", handleClick);
      });
    };
  }, [current]);

  const paginator = pagination.create("search", {
    prelink: "/mxd-posts",
    current,
    rowsPerPage,
    totalResult: data.length,
  });

  return (
    <Layout>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundImage: `url(${require("../public/images/crowd4.jpg")})`,
          backgroundRepeat: "no-repeat no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Box
          p={[2, 2, 4, 4]}
          sx={{
            width: ["100%", "100%", "75%"],
            backgroundColor: "rgba(22,22,22,.975)",
            // border: "2px dotted crimson",
            // boxShadow: "5px 5px 10px #222",
          }}
        >
          <Heading as="h2" mb={4}>
            MDX Posts Page!
          </Heading>
          {paginatedPosts.map((p, index) => (
            <Box
              key={`${p.slug}-${index}`}
              sx={{
                display: "flex",
                flexDirection: ["column", "column", "column", "column"],
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
              mb={[
                `${theme.space[3]}px`,
                `${theme.space[3]}px`,
                `${theme.space[3]}px`,
                `${theme.space[3]}px`,
              ]}
            >
              <Flex mb={3} sx={{ alignItems: "center" }}>
                <FaCalendarDay
                  size={`.9em`}
                  color={"#909090"}
                  style={{ marginRight: "7px" }}
                />
                <Text
                  mr={2}
                  sx={{ color: "grey", fontSize: `${theme.fontSizes[0]}` }}
                >{`published at:`}</Text>
                <Heading as="h5" sx={{ display: "inline-block" }}>
                  {`${p.date}`}
                </Heading>
              </Flex>
              <Box>
                <Heading
                  as="h3"
                  mb={2}
                  sx={{ textTransform: "capitalize", display: "inline-block" }}
                >
                  <Link href={`/mdx/[slug]`} as={`/mdx/${p.slug}`}>
                    <a style={{}}>{`${p.title}`}</a>
                  </Link>
                </Heading>
                <Text
                  mb={[2, 2, 4, 4]}
                  sx={{ color: "whitesmoke" }}
                >{`${p.description}`}</Text>
              </Box>
            </Box>
          ))}
          <Box dangerouslySetInnerHTML={{ __html: paginator.render() }}></Box>
        </Box>
      </Box>
    </Layout>
  );
};

export const getStaticProps = async (context) => {
  const { data } = await axios.get(
    `${process.env.SERVER_URL}/api/rest/mdxposts`
  );

  return {
    props: {
      data,
    },
  };
};

export default withApollo({ ssr: false })(MdxPosts);
