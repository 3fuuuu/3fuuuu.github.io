import React from "react";
import { Box, ChakraProvider, defaultSystem } from "@chakra-ui/react";
import Top from "./features/Top/Top";
import AboutMe from "./features/AboutMe/AboutMe";
import { Links } from "./features/Links/Links";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Box bg="#1f202d">
        <div>
          <Top />
          <AboutMe />
          <Links />
        </div>
      </Box>
    </ChakraProvider>
  );
}

export default App;
