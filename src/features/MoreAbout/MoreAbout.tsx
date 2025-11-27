import { Title } from "../../components/Title";
import { Box, Container, Text } from "@chakra-ui/react";

export const MoreAbout = () => {
  return (
    <Box>
      <Title>More about me</Title>
      <Container maxW="100ch" p={4}>
        <Text color="#9fe1ad" p={4} textStyle="lg">
          ラップトップ : Arch Linux (Sway)
          <br />
          デスクトップ : Windows11
          <br />
          Reactがちょっとだけ書けます。バックエンドと組み込みや制御工学を勉強中です。
          <br />
          <br />
          ほかの好きなこと : 作曲、サッカー、ゲーム、おえかき
          <br />
          検定 : ワープロ検定2級(2023)、実用英語技能検定 3級(2023)
          <br />
          資格 : サッカー公認審判員4級(2025)
        </Text>
      </Container>
    </Box>
  );
};
export default MoreAbout;
