import { FaGithub } from "react-icons/fa";
import { Box, Flex, Heading, Text } from "theme-ui";
import { GithubColumn } from "./GithubColumn";

export const Github = ({ data }) => (
  <Flex
    py={5}
    sx={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      minHeight: `100vh`,
      backgroundColor: "#111",
    }}
  >
    <Box
      p={[2, 2, 3, 3]}
      sx={{ width: ["100%", "100%", "50%"], backgroundColor: "#222" }}
    >
      <Heading as="h2" mb={3}>
        <Flex sx={{ alignItems: "center" }}>
          <FaGithub size={`1em`} color={"crimson"} />
          <Text ml={[1, 1, 2, 2]} sx={{ color: "whitesmoke" }}>
            Github repos!
          </Text>
        </Flex>
      </Heading>
      {data.map((o, idx) => {
        return <GithubColumn o={o} idx={idx} key={`${o.mbid}${idx}`} />;
      })}
    </Box>
  </Flex>
);
