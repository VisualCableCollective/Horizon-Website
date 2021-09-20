import { SubSideBar } from '../../navigation/SubSideBar';
import { MainLayout } from '../MainLayout';
import { SubSideBarItem } from '../../navigation/SubSideBar/SubSideBarItem';

import { AiOutlineDashboard, AiOutlineAppstore } from 'react-icons/ai';

interface Props {
  children: React.ReactNode;
}

const ROUTE_PREFIX = '/portals/dev/';

export function DevPortalLayout(props: Props) {
  return (
    <MainLayout>
      <div className="flex">
        <SubSideBar>
          <div>
            <h1 className="p-6 font-semibold text-lg">The VisualCable Collective</h1>
            <SubSideBarItem icon={<AiOutlineDashboard />} title="Dashboard" href={ ROUTE_PREFIX + '/' } />
            <SubSideBarItem icon={<AiOutlineAppstore />} title="Products" href={ ROUTE_PREFIX + '/' } />
          </div>
        </SubSideBar>
        {props.children}
      </div>
    </MainLayout>
  );
}