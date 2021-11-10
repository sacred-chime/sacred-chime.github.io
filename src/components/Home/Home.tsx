import { Box, Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/system";
import React from "react";
import html_img from "./../../images/circuit_board.svg";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  let style: SxProps<Theme> = {
    backgroundColor: "purple",
    display: "flex",
    height: "630px",
    pt: "80px",
    position: "relative",
  };

  return (
    <Box sx={{ ...style }}>
      <Box>
        <Typography>Hello World</Typography>
        <Typography>Welcome to my website</Typography>
      </Box>
      <Box component="img" src={html_img} alt="html_img"></Box>
    </Box>
  );
};
