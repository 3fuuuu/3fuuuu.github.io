import { Title } from "../../components/Title";
import { Box, Container, Text } from "@chakra-ui/react";

export const MoreAbout = () => {
  return (
    <Box>
      <Title>More about</Title>
      <Container maxW="100ch" p={4}>
        <Text color="#9fe1ad" p={3} textStyle="lg"></Text>
      </Container>
    </Box>
  );
};
export default MoreAbout;
