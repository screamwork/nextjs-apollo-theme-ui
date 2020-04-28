import { Box, Heading, Link, Text, useThemeUI } from "theme-ui";

export const LastfmColumn = ({ o }) => {
  const context = useThemeUI();
  const { theme, colorMode, setColorMode } = context;
  return (
    <Box
      sx={{
        backgroundColor: "#333",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <Box
        mr={2}
        sx={{
          width: ["50px", "75px", "75px", "75px"],
          height: ["50px", "75px", "75px", "75px"],
        }}
      >
        <img
          src={`${o["image"][1]["#text"]}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box p={2}>
        <Link href={o.url} target="_blank">
          <Heading
            as="h4"
            sx={{
              "wordBreak": "break-word",
              "color": "crimson",
              ":hover": { textDecoration: "underline" },
            }}
          >
            {"@attr" in o && (
              <img
                // mr={`${theme.space[2]}px`}
                style={{
                  marginRight: theme.space[2],
                  width: "16px",
                }}
                src={`${require("../../public/images/now_playing.gif")}`}
              />
            )}
            {o.name}
          </Heading>
        </Link>
        <Text
          sx={{
            wordBreak: "break-word",
            fontSize: [
              theme.fontSizes[1],
              theme.fontSizes[2],
              theme.fontSizes[2],
              theme.fontSizes[2],
            ],
            color: "whitesmoke",
          }}
        >{`${o["artist"]["#text"]} - ${o["album"]["#text"]}`}</Text>
      </Box>
    </Box>
  );
};
