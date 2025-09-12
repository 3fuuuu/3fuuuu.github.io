import React from "react";
import { Box, ChakraProvider, defaultSystem, Theme } from "@chakra-ui/react";
import Top from "./features/Top/Top";
function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Box bg="#1f202d">
        <div>
          <Top />
        </div>
      </Box>
    </ChakraProvider>
  );
}

export default App;
