import { FaLastfm, FaSpotify } from "react-icons/fa";
import { Flex, Text } from "theme-ui";
import { LastfmLink } from "./LastfmLink";
import { SpotifyLink } from "./SpotifyLink";

export const LastfmHeading = () => (
  <Flex sx={{ alignItems: "center" }}>
    <FaLastfm size={`1.1em`} color={"whitesmoke"} />
    <LastfmLink />

    <Text
      sx={{
        width: "25px",
        color: "crimson",
        textAlign: "center",
        fontSize: 4,
      }}
    >
      {" "}
      &middot;{" "}
    </Text>

    <FaSpotify size={`1.1em`} color={"whitesmoke"} />
    <SpotifyLink />
  </Flex>
);
