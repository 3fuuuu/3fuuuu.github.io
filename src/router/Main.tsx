import Top from "../features/Top/Top";
import AboutMe from "../features/AboutMe/AboutMe";
import { Links } from "../features/Links/Links";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <>
      <Box bg="#1f202d">
        <Top />
        <AboutMe />
        <Links />
      </Box>
    </>
  );
}

export default Main;
