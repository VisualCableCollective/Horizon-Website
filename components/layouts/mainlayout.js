// Components
import Navbar from '../navbar';
import Sidebar from '../sidebar';

import {useState} from "react";

export default function MainLayout({ children = null }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  return <div>
    <Navbar setIsSidebarCollapsed={setIsSidebarCollapsed} />
    <Sidebar isSidebarCollapsed={isSidebarCollapsed} setIsSidebarCollapsed={setIsSidebarCollapsed} />
    {children}
    <div style={{height: "200vh"}}>
    </div>
  </div>;
}