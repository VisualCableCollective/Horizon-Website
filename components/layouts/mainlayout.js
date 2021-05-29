// Components
import Navbar from '../navbar';
import Sidebar from '../sidebar';

import {useState} from "react";

export default function MainLayout({ children = null, isUserAuthenticated }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  return <div>
    <Navbar setIsSidebarCollapsed={setIsSidebarCollapsed} isUserAuthenticated={isUserAuthenticated} />
    <Sidebar isSidebarCollapsed={isSidebarCollapsed} setIsSidebarCollapsed={setIsSidebarCollapsed} />
    {children}
  </div>;
}