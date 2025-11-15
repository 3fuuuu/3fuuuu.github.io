import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  url: string;
};

export const SwitchButton = ({ children, url }: Props) => {
  return (
    <div>
      <Link href={url}>
        <Button
          rounded="full"
          bg="#9fe1ad"
          color="#1f202d"
          size="sm"
          _hover={{ bg: "#7ab691" }}
        >
          {children}
        </Button>
      </Link>
    </div>
  );
};
