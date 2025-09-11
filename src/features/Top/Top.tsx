import { Image, Box, Center } from "@chakra-ui/react";
import icon from "./icon.png";
import { useWindowSize } from "../../hooks/useWindowSize";

export const Top = () => {
  const [width, height] = useWindowSize();
  return (
    <div>
      <Box>
        <Box>
          <Center h={height / 2}>
            <Center h={height / 2}>
              <Image height="100px" width="100px" src={icon} alt="icon" />
            </Center>
          </Center>
        </Box>
      </Box>
    </div>
  );
};
export default Top;
