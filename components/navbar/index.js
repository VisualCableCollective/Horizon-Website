import styled from "styled-components";
import { Container } from "@material-ui/core";

// Components
import OpenSidebarButton from "../sidebar/opensidebarbutton";

export default function Navbar({setIsSidebarCollapsed}) {
  return (
  <NavbarWrapper>
    <OpenSidebarButton setIsSidebarCollapsed={setIsSidebarCollapsed} />
    <NavigationContainer maxWidth="md">
      <img src="/horizon.svg" height={30}/>
    </NavigationContainer>
  </NavbarWrapper>);
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
  margin-left: 300px!important;
`;

const Title = styled.h1`
margin: 0;
font-size: large;
`;
