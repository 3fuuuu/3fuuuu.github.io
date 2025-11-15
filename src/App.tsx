import React from "react";
import { Box, ChakraProvider, defaultSystem } from "@chakra-ui/react";

import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Main from "./router/Main";
import More from "./router/More";
import TopPage from "./router/TopPage";

function App() {
  const router = createBrowserRouter([
    {
      element: <TopPage />,
      children: [
        { path: "/", element: <Main /> },
        { path: "/more", element: <More /> },
      ],
    },
  ]);

  return (
    <ChakraProvider value={defaultSystem}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
