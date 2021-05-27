import styled from "styled-components";

// Icons
import CloseIcon from '@material-ui/icons/Close';

export default function Topbar({ setIsSidebarCollapsed }) {
  function closeSidebar() {
    setIsSidebarCollapsed(true);
  }

  return (
  <TopbarWrapper>
    <CloseButton onClick={ closeSidebar }>
      <CloseIcon style={{ fontSize: 30 }}/>
    </CloseButton>
  </TopbarWrapper>);
}

const TopbarWrapper = styled.div`
  height: 40px;
  padding: 0px 10px 0px 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  padding: 0;
`;
