import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  title: ReactNode;
  content: ReactNode;
};

export const SkillBox = ({ title, content }: Props) => {
  return (
    <Box>
      <h2>{title}</h2>
      <p>{content}</p>
    </Box>
  );
};
