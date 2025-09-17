import { Title } from "../../components/ui/Title";
import { LinkButton } from "../../components/ui/LinkButton";
import { Box, Container, HStack, Text } from "@chakra-ui/react";
import { SiNiconico } from "react-icons/si";
import { IconContext } from "react-icons/lib";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Links = () => {
  return (
    <Box bg="#1f202d">
      <IconContext.Provider value={{ color: "white", size: "" }}>
        <Title>Link</Title>

        <Container maxW="100ch">
          <HStack>
            <LinkButton url="https://www.nicovideo.jp/user/124854773">
              <SiNiconico />
              <Text>niconico</Text>
            </LinkButton>

            <LinkButton url="https://x.com/3fuuuu___">
              <FaTwitter />
              <Text>Twitter</Text>
            </LinkButton>

            <LinkButton url="">
              <FaYoutube />
              <Text>YouTube</Text>
            </LinkButton>

            <LinkButton url="https://github.com/3fuuuu">
              <FaGithub />
              <Text>GitHub</Text>
            </LinkButton>
          </HStack>
        </Container>
      </IconContext.Provider>
    </Box>
  );
};
