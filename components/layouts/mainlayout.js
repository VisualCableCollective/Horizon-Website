// Components
import Navbar from '../navbar';
import Sidebar from '../sidebar';

import styled from "styled-components";
import {useState} from "react";

export default function MainLayout({ children = null, isUserAuthenticated }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  return <div>
    <Navbar setIsSidebarCollapsed={setIsSidebarCollapsed} isUserAuthenticated={isUserAuthenticated} />
    <Sidebar isSidebarCollapsed={isSidebarCollapsed} setIsSidebarCollapsed={setIsSidebarCollapsed} />
    <ContentWrapper>
      {children}
    </ContentWrapper>
  </div>;
}

const ContentWrapper = styled.div`
  margin-top: 40px;
  height: 200vh;
`;