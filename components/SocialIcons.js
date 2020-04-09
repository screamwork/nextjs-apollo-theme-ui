import React from "react";
import {
  FaBitbucket,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Box } from "theme-ui";

export const SocialIcons = () => (
  <>
    <Box px={2}>
      <a href={`${process.env.socialTwitter}`} target="_blank">
        <FaTwitter size={`1.75em`} color={"crimson"} />
      </a>
    </Box>
    <Box px={2}>
      <a href={`${process.env.socialFacebook}`} target="_blank">
        <FaFacebook size={`1.75em`} color={"crimson"} />
      </a>
    </Box>
    <Box px={2}>
      <a href={`${process.env.socialInstagram}`} target="_blank">
        <FaInstagram size={`1.75em`} color={"crimson"} />
      </a>
    </Box>
    <Box px={2}>
      <a href={`${process.env.socialYoutube}`} target="_blank">
        <FaYoutube size={`1.75em`} color={"crimson"} />
      </a>
    </Box>
    <Box px={2}>
      <a href={`${process.env.socialBitbucket}`} target="_blank">
        <FaBitbucket size={`1.75em`} color={"crimson"} />
      </a>
    </Box>
    <Box px={2}>
      <a href={`${process.env.socialGithub}`} target="_blank">
        <FaGithub size={`1.75em`} color={"crimson"} />
      </a>
    </Box>
  </>
);
