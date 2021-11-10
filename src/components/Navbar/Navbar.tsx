import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "background.paper",
        position: "fixed",
        zIndex: 999,
      }}
    >
      <Tabs value={value} onChange={handleChange} aria-label="navtabs" centered>
        <LinkTab label={<StyledLabel label="Home" />} href="/" />
        <LinkTab label={<StyledLabel label="About Me" />} href="/#about" />
        <LinkTab label={<StyledLabel label="Skills" />} href="/#skills" />
        <LinkTab label={<StyledLabel label="Map" />} href="/#map" />
        <LinkTab label={<StyledLabel label="Contact" />} href="/#contact" />
      </Tabs>
    </Box>
  );
};

const LinkTab = (props: any) => {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
};

const StyledLabel: React.FC<{ label: string }> = ({ label }) => {
  return <Box sx={{ fontSize: "18px", mx: "5px", my: "5px" }}>{label}</Box>;
};
