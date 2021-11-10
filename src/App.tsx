import { Box, Container } from "@mui/material";
import React from "react";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;
