import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link } from "../Link";
import { useLocation } from "react-router-dom";

type Props = {
  children: ReactNode;
  url: string;
};

export const SwitchButton = ({ children, url }: Props) => {
  const location = useLocation();
  const isActive = location.pathname === url;
  return (
    <div>
      <Link to={url}>
        <Button
          rounded="full"
          bg={isActive ? "#9fe1ad" : "#1f202d"}
          color={isActive ? "#1f202d" : "#fff"}
          size="sm"
          _hover={{ bg: "#7ab691" }}
        >
          {children}
        </Button>
      </Link>
    </div>
  );
};
