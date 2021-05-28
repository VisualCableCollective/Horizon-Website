import styled from "styled-components";
import { Container } from "@material-ui/core";

import Config from "../../Config";

// Components
import OpenSidebarButton from "../sidebar/opensidebarbutton";
import NavbarItem from "./navbaritem";

// Icons
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function Navbar({ setIsSidebarCollapsed }) {
  return (
    <NavbarWrapper>
      <OpenSidebarButton setIsSidebarCollapsed={setIsSidebarCollapsed} />
      <NavigationContainer maxWidth="md">
        <CommonItems>
          <NavbarItem icon={<img src="/horizon.svg" height={30} />} href="/" />
        </CommonItems>
        <AccountItems>
          <NavbarItem
            title="Sign In"
            icon={<AccountCircleIcon style={{ height: "1em" }} />}
            href={Config.getAPIServerURL() + encodeURI("/auth/vcc/redirect?method=web-app")}
          />
        </AccountItems>
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

const AccountItems = styled.div`
  display: flex !important;
  align-items: center;
`;
