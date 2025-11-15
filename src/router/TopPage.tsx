import { Outlet } from "react-router-dom";
import Top from "../features/Top/Top";
import { Box } from "@chakra-ui/react";

function TopPage() {
  return (
    <>
      <Box bg="#1f202d">
        <Top />

        <Outlet />
      </Box>
    </>
  );
}

export default TopPage;
