import styled from "styled-components";
import { Container } from "@material-ui/core";

export default function Navbar() {
  return (
  <NavbarWrapper>
    <Container maxWidth="md">
      <img src="/horizon.svg" height={30}/>
    </Container>
  </NavbarWrapper>);
}

const NavbarWrapper = styled.div`
  background-color: #424242;
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
margin: 0;
font-size: large;
`;
