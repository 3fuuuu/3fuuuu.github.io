import AboutMe from "../features/AboutMe/AboutMe";
import { Links } from "../features/Links/Links";
import { Box } from "@chakra-ui/react";

function Main() {
  return (
    <>
      <Box bg="#1f202d">
        <AboutMe />
        <Links />
        <Box h="5ch" />
      </Box>
    </>
  );
}

export default Main;
