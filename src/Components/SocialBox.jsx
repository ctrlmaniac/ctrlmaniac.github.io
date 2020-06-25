import React from "react";
import { Box, IconButton } from "@material-ui/core";

// Icons
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";

export function SocialBox({ socials }) {
  const icons = {
    linkedin: <LinkedInIcon />,
    github: <GitHubIcon />,
    facebook: <FacebookIcon />,
    twitter: <TwitterIcon />,
    instagram: <InstagramIcon />,
    pinterest: <PinterestIcon />,
  };

  const handleClick = (loc) => window.open(loc, "_blank");

  return (
    <Box p={1} style={{ textAlign: "center" }}>
      {Object.keys(socials).map((k, i) => {
        const social = socials[k];
        const icon = icons[k];

        return (
          <IconButton key={i} onClick={() => handleClick(social)}>
            {icon}
          </IconButton>
        );
      })}
    </Box>
  );
}
