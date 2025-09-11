import React from "react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import Top from "./features/Top/Top";
function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <div>
        <Top />
      </div>
    </ChakraProvider>
  );
}

export default App;
