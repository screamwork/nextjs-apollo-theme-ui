import { Heading, Link } from "theme-ui";

export const SpotifyLink = () => (
  <Link
    href={`${process.env.spotifyUrl}`}
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
      Spotify
    </Heading>
  </Link>
);
