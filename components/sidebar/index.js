import styled, {css} from "styled-components";

// Components
import Topbar from "./topbar";
import SidebarItem from "./sidebaritem";

import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';

export default function Sidebar({isSidebarCollapsed, setIsSidebarCollapsed}) {

  return (
  <SidebarWrapper collapsed={isSidebarCollapsed}>
    <Topbar setIsSidebarCollapsed={setIsSidebarCollapsed}/>
    <SidebarItem title="Home" href="/" icon={<HomeIcon style={{height: "24px", width: "24px"}} />} />
    <SidebarItem title="My Products" href="/developers/my-products" icon={<AppsIcon style={{height: "24px", width: "24px"}} />} />
  </SidebarWrapper>);
}

const SidebarWrapper = styled.div`
  background-color: #212121;
  width: 300px;
  min-height: 100vh;
  position: fixed;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  transition: transform 0.5s ease-in-out;
  ${props =>
    props.collapsed &&
    css`
      transform: translateX(-300px);
    `};
`;
