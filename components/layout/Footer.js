import React from "react";
import { Box, Text, useThemeUI } from "theme-ui";
import { SocialIcons } from "../SocialIcons";

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
        backgroundImage: `url(${require("../../public/images/bg-dark1.jpg")})`,
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
            width: [35, 50, 75],
            height: [35, 50, 75],
            backgroundImage: `url(${require("../../public/images/gphoto.jpg")})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
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
        <Text
          py={2}
          sx={{
            color: "whitesmoke",
            fontSize: [
              `${theme.fontSizes[0]}px`,
              `${theme.fontSizes[1]}px`,
              `${theme.fontSizes[2]}px`,
            ],
          }}
        >
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
        <SocialIcons />
      </Box>
    </Box>
  );
};
