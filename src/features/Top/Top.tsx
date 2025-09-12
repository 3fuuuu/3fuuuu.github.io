import { Image, Box, Center, VStack, Text } from "@chakra-ui/react";
import icon from "./icon.png";
import { useWindowSize } from "../../hooks/useWindowSize";

export const Top = () => {
  const [width, height] = useWindowSize();

  return (
    <div>
      <Box>
        <Box>
          <VStack h={height / 1.25} justify="center">
            <Image height="100px" width="100px" src={icon} alt="icon" />
            <Text textStyle="3xl" color="#9fe1ad">
              三風-Mifu-
            </Text>
            <Text textStyle="2xl" color="#9fe1ad">
              3fuuuu
            </Text>
          </VStack>
        </Box>
      </Box>
    </div>
  );
};
export default Top;
