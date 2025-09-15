import { Title } from "../../components/ui/Title";
import { LinkButton } from "../../components/ui/LinkButton";
import { Box, Text } from "@chakra-ui/react";
import { SiNiconico } from "react-icons/si";

export const Links = () => {
  return (
    <Box>
      <Title>Link</Title>
      <LinkButton url="https://www.nicovideo.jp/user/124854773">
        <Text></Text>
        <SiNiconico />
      </LinkButton>
    </Box>
  );
};
