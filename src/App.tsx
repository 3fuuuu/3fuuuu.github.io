import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./router/Main";
import More from "./router/More";
import TopPage from "./router/TopPage";
import Articles from "./router/Articles";

function App() {
  const router = createBrowserRouter([
    {
      element: <TopPage />,
      children: [
        { path: "/", element: <Main /> },
        { path: "/more", element: <More /> },
        { path: "/articles", element: <Articles /> },
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
