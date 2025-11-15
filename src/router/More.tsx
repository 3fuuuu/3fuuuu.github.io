import { Box } from "@chakra-ui/react";
import MoreAbout from "../features/MoreAbout/MoreAbout";
import { useWindowSize } from "../hooks/useWindowSize";
import { SwitchButton } from "../components/SwitchButton";

function More() {
  const [, height] = useWindowSize();
  return (
    <>
      <Box bg="#1f202d" h={height}>
        <MoreAbout />
      </Box>
    </>
  );
}

export default More;
