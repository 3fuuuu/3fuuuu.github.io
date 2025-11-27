import { Box, Button, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link } from "../Link/Link";

type Props = {
  children: ReactNode;
  // icon: IconType;
  url: string;
  onClick?: () => void;
};

export const LinkButton = ({ children, url, onClick }: Props) => {
  return (
    <Box width="ch" height="" p={2} maxW="100ch">
      <Link to={url} target="_blank">
        <Button onClick={onClick} bg="#1f202d" p="10">
          <VStack>{children}</VStack>
        </Button>
      </Link>
    </Box>
  );
};
