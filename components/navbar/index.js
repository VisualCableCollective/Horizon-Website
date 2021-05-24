import styled from "styled-components";
import { Container } from "@material-ui/core";

export default function Navbar() {
  return (
  <NavbarWrapper>
    <Container>
      <img src="/horizon.svg"/>
      <Title>Horizon</Title>
    </Container>
  </NavbarWrapper>);
}

const NavbarWrapper = styled.div`
  background-color: #424242;
  height: 50px;
  width: 100%;
`;

const Title = styled.h1`
margin: 0;
font-size: large;
`;
