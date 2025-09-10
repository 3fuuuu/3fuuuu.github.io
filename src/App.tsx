import { Provider } from "./components/ui/provider";
import { Button } from "@chakra-ui/react";
function App({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <Provider>
      <Component {...pageProps} />
      <Button colorScheme="grean" size="md">
        Click!
      </Button>
    </Provider>
  );
}

export default App;
