import { Box, Heading, Link, Text } from "theme-ui";

export const GithubColumn = ({ o, idx }) => {
  return (
    <Box
      p={(2, 2, 2, 2)}
      sx={{
        backgroundColor: idx % 2 === 0 ? "#333" : "#222",
      }}
    >
      <Link href={o.html_url} target="_blank">
        <Heading
          as="h4"
          sx={{
            "color": "crimson",
            "fontFamily": "Menlo, monospace",
            ":hover": { textDecoration: "underline" },
          }}
        >
          {`> ${o.name}`}
        </Heading>
      </Link>
      <Text sx={{ color: "whitesmoke" }}>{o.description}</Text>
    </Box>
  );
};
