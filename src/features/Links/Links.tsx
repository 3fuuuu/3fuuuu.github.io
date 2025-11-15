import { Title } from "../../components/Title";
import { LinkButton } from "../../components/LinkButton";
import { Box, Container, Text, Wrap } from "@chakra-ui/react";
import { SiNiconico } from "react-icons/si";
import { IconContext } from "react-icons/lib";
import { FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";
import { useWindowSize } from "../../hooks/useWindowSize";

export const Links = () => {
  const [width] = useWindowSize();
  return (
    <Box bg="#1f202d">
      <IconContext.Provider value={{ color: "white", size: "" }}>
        <Title>Link</Title>

        <Container maxW="100ch">
          <Wrap>
            <LinkButton url="https://www.nicovideo.jp/user/124854773">
              <SiNiconico />
              <Text>niconico</Text>
            </LinkButton>

            <LinkButton url="https://x.com/3fuuuu___">
              <FaTwitter />
              <Text>Twitter</Text>
            </LinkButton>

            <LinkButton url="https://www.youtube.com/channel/UCGhqMirRTd_bcGnxtzQjTgw">
              <FaYoutube />
              <Text>YouTube</Text>
            </LinkButton>

            <LinkButton url="https://github.com/3fuuuu">
              <FaGithub />
              <Text>GitHub</Text>
            </LinkButton>
          </Wrap>
        </Container>
      </IconContext.Provider>
    </Box>
  );
};
