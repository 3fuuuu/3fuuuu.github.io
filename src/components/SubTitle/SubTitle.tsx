import { ReactNode } from "react";
import { Text, Separator, Box, Container } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
};
export const SubTitle = ({ children }: Props) => {
  return (
    <div>
      <Container maxWidth="100ch">
        <Box p={2}>
          <Text textStyle="2xl" color="#ffa17c">
            {children}
          </Text>
        </Box>
        <Separator />
      </Container>
    </div>
  );
};
