import { Title } from "../../components/Title";
import { Text, Container } from "@chakra-ui/react";
import { Link } from "../../components/Link";

export const AboutMe = () => {
  return (
    <div>
      <Title>
        <p>About me</p>
      </Title>
      <Container maxW="100ch" p={4}>
        <Text color="#9fe1ad" p={3} textStyle="lg">
          愛媛県出身、新居浜工業高等専門学校所属(24s)です。
          <br />
          本格的なプログラミングは高専に入ってから始めました。ロボット研究部でロボコンに関する制御をしています。webが好きです。ラズピコも好きです。
          <br />
          <Link color="#9fe1ad" to="https://yoinokoe.jp/">
            ヨイノコエクリエイターズグループ
          </Link>
          に所属しています。
        </Text>
        <Container maxW="100ch" p={4}>
          <Link color="#9fe1ad" to="/more">
            More about me→
          </Link>
        </Container>
      </Container>
    </div>
  );
};
export default AboutMe;
