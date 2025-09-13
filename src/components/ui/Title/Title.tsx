import { ReactNode } from "react";
import { Text, Separator, Box, Container } from "@chakra-ui/react";
import { useWindowSize } from "../../../hooks/useWindowSize";
type Props = {
  children: ReactNode;
};
export const Title = ({ children }: Props) => {
  const [width] = useWindowSize();
  return (
    <div>
      <Container maxWidth="100ch">
        <Box p={2}>
          <Text textStyle="3xl" color="#9fe1ad">
            {children}
          </Text>
        </Box>
        <Separator />
      </Container>
    </div>
  );
};
