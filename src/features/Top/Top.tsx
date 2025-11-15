import { Image, Box, VStack, Text, Container, Wrap } from "@chakra-ui/react";
import icon from "./icon.png";
import { useWindowSize } from "../../hooks/useWindowSize";
import { SwitchButton } from "../../components/SwitchButton";

export const Top = () => {
  const [, height] = useWindowSize();

  return (
    <div>
      <Box h={height}>
        <VStack h={height / 1.1} justify="center">
          <Image height="100px" width="100px" src={icon} alt="icon" />
          <Text textStyle="3xl" color="#9fe1ad">
            三風-Mifu-
          </Text>
          <Text textStyle="2xl" color="#9fe1ad">
            3fuuuu
          </Text>
        </VStack>
      </Box>
      <Container maxW="100ch" p={4}>
        <Wrap>
          <SwitchButton url="/">Top</SwitchButton>
          <SwitchButton url="/articles">Articles</SwitchButton>
          <SwitchButton url="/more">More about me</SwitchButton>
        </Wrap>
      </Container>
    </div>
  );
};
export default Top;
