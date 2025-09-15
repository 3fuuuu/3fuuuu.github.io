import { Box, Container, Button, VStack, Link } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  // icon: IconType;
  url: string;
  onClick?: () => void;
};

export const LinkButton = ({ children, url, onClick }: Props) => {
  return (
    <Container maxW="100ch">
      <Box width="25ch">
        <Link href={url}>
          <Button onClick={onClick}>
            <VStack>{children}</VStack>
          </Button>
        </Link>
      </Box>
    </Container>
  );
};
