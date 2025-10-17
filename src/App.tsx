import React from "react";
import { Box, ChakraProvider, defaultSystem } from "@chakra-ui/react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./router/Main";
import More from "./router/More";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/more" element={<More />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
