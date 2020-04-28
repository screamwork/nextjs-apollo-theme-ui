import { Box, Flex, Grid } from "theme-ui";
import { LastfmColumn } from "./LastfmColumn";
import { LastfmHeading } from "./LastfmHeading";

const checkLastfmIsPlaying = (arr) => {
  if ("@attr" in arr[0]) {
    return [arr[0]].concat(arr.slice(2));
  } else {
    return arr;
  }
};

export const Lastfm = ({ data }) => (
  <Flex
    py={5}
    sx={{
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: `100vh`,
      backgroundColor: "rgba(255,255,255,.25)",
    }}
  >
    <Box
      p={[2, 2, 3, 3]}
      py={4}
      sx={{ width: ["100%", "100%", "75%"], backgroundColor: "#222" }}
    >
      <Box mb={3}>
        <LastfmHeading />
      </Box>
      <Grid gap={16} columns={[(1, "1fr"), (1, "1fr"), (2, "1fr 1fr")]}>
        {checkLastfmIsPlaying(data).map((o, idx) => {
          return <LastfmColumn o={o} key={`${o.mbid}${idx}`} />;
        })}
      </Grid>
    </Box>
  </Flex>
);
