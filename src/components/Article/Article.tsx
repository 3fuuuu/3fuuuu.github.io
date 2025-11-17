import { Box, Button, Container, HStack, Text, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link } from "../Link";

type Props = {
  icon: ReactNode;
  website: string;
  title: string;
  date: string;
  url: string;
};

export const Article = ({ url, icon, title, date, website }: Props) => {
  return (
    <Box maxW="100ch">
      <Link to={url} _hover={{ textDecoration: "none" }}>
        <Button
          variant="outline"
          bg="#1f202d"
          borderColor="#fff"
          rounded="xl"
          padding="5ch 4ch"
          _hover={{ transform: "scale(1.05)" }}
          w={{ base: "100%", md: "50ch" }}
          h="12ch"
        >
          <VStack>
            <Text
              fontSize="2xl"
              color="#9fe1ad"
              wordBreak="break-word"
              whiteSpace="normal"
              lineHeight={1.1}
            >
              {title}
            </Text>
            <HStack>
              <Text fontSize="1xl" color="#9fe1ad">
                {date}
              </Text>
              <Text fontSize="1xl" color="#9fe1ad">
                {website}
              </Text>
              <a>{icon}</a>
            </HStack>
          </VStack>
        </Button>
      </Link>
    </Box>
  );
};
