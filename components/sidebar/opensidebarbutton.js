import styled from "styled-components";

// Icons
import DehazeIcon from "@material-ui/icons/Dehaze";

export default function OpenSidebarButton({ setIsSidebarCollapsed }) {
  function openSidebar() {
    setIsSidebarCollapsed(false);
  }

  return (
    <OpenButton onClick={openSidebar}>
      <DehazeIcon style={{ fontSize: 30 }} />
    </OpenButton>
  );
}

const OpenButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  padding: 0;
  margin-left: 5px;
  cursor: pointer;
`;
