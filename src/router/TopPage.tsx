import { Outlet } from "react-router-dom";
import Top from "../features/Top/Top";
import { Box } from "@chakra-ui/react";

function TopPage() {
  return (
    <>
      <Box bg="#1f202d">
        <nav>
          <ul>
            <li>
              <Top />
            </li>
          </ul>
        </nav>

        <Outlet />
      </Box>
    </>
  );
}

export default TopPage;
