import { Title } from "../../components/ui/Title";
import { LinkButton } from "../../components/ui/LinkButton";
import { Box, HStack, Text } from "@chakra-ui/react";
import { SiNiconico } from "react-icons/si";
import { IconContext } from "react-icons/lib";
import { FaTwitter } from "react-icons/fa";

export const Links = () => {
  return (
    <Box bg="#1f202d">
      <IconContext.Provider value={{ color: "white", size: "100ch" }}>
        <Title>Link</Title>

        <HStack>
          <LinkButton url="https://www.nicovideo.jp/user/124854773">
            <SiNiconico></SiNiconico>
            <Text>niconico</Text>
          </LinkButton>

          <LinkButton url="https://x.com/3fuuuu___">
            <FaTwitter></FaTwitter>
            <Text>Twitter</Text>
          </LinkButton>
        </HStack>
      </IconContext.Provider>
    </Box>
  );
};
