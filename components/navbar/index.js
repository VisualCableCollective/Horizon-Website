import styled from "styled-components";
import { Container } from "@material-ui/core";

import Config from "../../Config";

// Components
import OpenSidebarButton from "../sidebar/opensidebarbutton";
import NavbarItem from "./navbaritem";
import AccountItems from "./accountitems";

// Icons
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function Navbar({ setIsSidebarCollapsed, isUserAuthenticated }) {
  console.log("got " + isUserAuthenticated);
  return (
    <NavbarWrapper>
      <OpenSidebarButton setIsSidebarCollapsed={setIsSidebarCollapsed} />
      <NavigationContainer maxWidth="md">
        <CommonItems>
          <NavbarItem icon={<img src="/horizon.svg" height={30} />} href="/" />
        </CommonItems>
        <AccountItems isUserAuthenticated={isUserAuthenticated} />
      </NavigationContainer>
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.div`
  background-color: #212121;
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
`;

const NavigationContainer = styled(Container)`
  margin-left: 300px !important;
  display: flex !important;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const CommonItems = styled.div`
  display: flex !important;
  align-items: center;
`;
