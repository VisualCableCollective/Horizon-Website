import styled, {css} from "styled-components";

// Components
import Topbar from "./topbar";

import { useState } from "react";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
  <SidebarWrapper collapsed={isCollapsed}>
    <Topbar setIsSidebarCollapsed={setIsCollapsed}/>
  </SidebarWrapper>);
}

const SidebarWrapper = styled.div`
  background-color: #424242;
  width: 200px;
  min-height: 100vh;
  position: fixed;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  transition: transform 0.5s ease-in-out;
  ${props =>
    props.collapsed &&
    css`
      transform: translateX(-200px);
    `};
`;
