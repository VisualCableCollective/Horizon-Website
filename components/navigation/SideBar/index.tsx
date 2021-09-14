import { SideBarItem } from './SideBarItem';

import { IoHomeOutline } from 'react-icons/io5';
import { AiOutlineAppstore } from 'react-icons/ai';

interface Props {
  children?: React.ReactNode;
}
  
export function SideBar(props: Props) {
  return (
      <div className="border-r border-white border-opacity-25">
        <SideBarItem icon={ <IoHomeOutline /> } />
        <SideBarItem icon={ <AiOutlineAppstore /> } />
      </div>
  );
}