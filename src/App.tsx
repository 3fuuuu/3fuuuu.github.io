import React from "react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <div>
        <Button colorScheme="teal" size="md">
          あいうえお
        </Button>
      </div>
    </ChakraProvider>
  );
}

export default App;
