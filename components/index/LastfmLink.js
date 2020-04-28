import { Heading, Link } from "theme-ui";

export const LastfmLink = () => (
  <Link
    href={`${process.env.lastfmUrl}`}
    target="_blank"
    sx={{ color: "crimson", marginLeft: "7px" }}
  >
    <Heading
      as="h2"
      mb={0}
      sx={{
        "color": "crimson",
        ":hover": { textDecoration: "underline" },
      }}
    >
      Last.fm
    </Heading>
  </Link>
);
