import { Box } from "@chakra-ui/react";
import MoreAbout from "../features/MoreAbout/MoreAbout";
import { useWindowSize } from "../hooks/useWindowSize";

function More() {
  const [, height] = useWindowSize();
  return (
    <>
      <Box bg="#1f202d">
        <MoreAbout />
        <Box h="5ch" />
      </Box>
    </>
  );
}

export default More;
