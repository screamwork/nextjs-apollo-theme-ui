import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Box, Text, useThemeUI } from "theme-ui";

export const Footer = () => {
  const context = useThemeUI();
  const { theme, colorMode, setColorMode } = context;
  return (
    <Box
      sx={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -101,
        // backgroundColor: theme.myStyles.navBlack
        backgroundImage: `url(/images/bg-dark1.jpg)`,
        backgroundRepeat: "repeat repeat",
      }}
    >
      <Box
        pt={5}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: 93,
            height: 93,
            backgroundImage: `url(/images/gphoto.jpg)`,
            backgroundRepeat: "no-repeat",
          }}
        />
      </Box>
      <Box
        py={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text py={2} sx={{ color: "whitesmoke" }}>
          © Copyright 2020 | All Rights Reserved | Powered by nextjs
        </Text>
      </Box>
      <Box
        pb={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
      </Box>
    </Box>
  );
};
