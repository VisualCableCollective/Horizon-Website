import { SideBarItem } from './SideBarItem';

import { IoHomeOutline, IoLogInOutline, IoLogOutOutline, IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineAppstore, AiOutlineDashboard } from 'react-icons/ai';
import { useAuth } from '../../../contexts/AuthContext';
  
export function SideBar() {
  const auth = useAuth();

  return (
      <div className="border-r border-white border-opacity-25 flex-col flex justify-between">
        <div>
          <SideBarItem icon={ <IoHomeOutline /> } title="Home" href="/" />
          <SideBarItem icon={ <AiOutlineAppstore /> } title="Library" href="/" />
        </div>
        { auth.isAuthenticated ? 
        <div>
          <SideBarItem icon={ <AiOutlineDashboard /> } title="Developer Portal" href="/portals/dev/" />
          <SideBarItem icon={ <IoSettingsOutline /> } title="Settings" href="/" />
          <SideBarItem icon={ <IoLogOutOutline /> } title="Sign Out" href="/auth/logout" />
        </div> : 
        <div>
        <SideBarItem icon={ <IoLogInOutline /> } title="Sign In" href="/auth/login" />
        </div> }
      </div>
  );
}