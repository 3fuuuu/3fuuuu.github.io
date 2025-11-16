import { Title } from "../../components/Title";
import { ReactComponent as Zenn } from "./logo-only.svg";
import { Article } from "../../components/Article";
import { Container, HStack, Wrap } from "@chakra-ui/react";

export const ArticlesSpace = () => {
  return (
    <div>
      <Title>Articles</Title>
      <Container maxW="100ch">
        <HStack p={4} maxW="100ch">
          <Wrap>
            <Article
              url="https://zenn.dev/3fuuuu/articles/b164f90382bc3d"
              website="zenn.dev"
              title="Raspbrry pi pico同士でUART(PlatformIO)"
              date="2025/11/4"
              icon={<Zenn />}
            />
            <Article
              url="https://zenn.dev/3fuuuu/articles/73ab50de067f85"
              website="zenn.dev"
              title="dotfilesの作り方(Arch Linux+Sway)"
              date="2025/11/11"
              icon={<Zenn />}
            />
          </Wrap>
        </HStack>
      </Container>
    </div>
  );
};

export default ArticlesSpace;
