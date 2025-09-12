import React from "react";
import { Box, ChakraProvider, defaultSystem } from "@chakra-ui/react";
import Top from "./features/Top/Top";
import AboutMe from "./features/AboutMe/AboutMe";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Box bg="#1f202d">
        <div>
          <Top />
          <AboutMe />
        </div>
      </Box>
    </ChakraProvider>
  );
}

export default App;
