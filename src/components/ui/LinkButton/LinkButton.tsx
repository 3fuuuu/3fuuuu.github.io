import { Box, Container, Button, Center, VStack, Link } from "@chakra-ui/react";
import { ReactNode } from "react";
import { IconType } from "react-icons/lib";

type Props = {
  children: ReactNode;
  icon: IconType;
  url: string;
  onClick?: () => void;
};

export const LinkButton = ({ children, icon, url, onClick }: Props) => {
  return (
    <Container maxW="100ch">
      <Box width="25ch">
        <Link href={url}>
          <Button onClick={onClick}>
            <VStack>
              {"icon"}
              {children}
            </VStack>
          </Button>
        </Link>
      </Box>
    </Container>
  );
};
