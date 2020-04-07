import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Box } from "theme-ui";

export const SocialIcons = () => (
  <>
    <Box px={2}>
      <a href={`${process.env.socialTwitter}`}>
        <FaTwitter size={`1.75em`} color={"crimson"} />
      </a>
    </Box>
    <Box px={2}>
      <a href={`${process.env.socialFacebook}`}>
        <FaFacebook size={`1.75em`} color={"crimson"} />
      </a>
    </Box>
    <Box px={1}>
      <a href={`${process.env.socialInstagram}`}>
        <FaInstagram size={`1.75em`} color={"crimson"} />
      </a>
    </Box>
    <Box px={1}>
      <a href={`${process.env.socialYoutube}`}>
        <FaYoutube size={`1.75em`} color={"crimson"} />
      </a>
    </Box>
  </>
);
