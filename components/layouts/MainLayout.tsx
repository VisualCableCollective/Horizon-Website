import { SideBar } from '../navigation/SideBar';

interface Props {
  children: React.ReactNode;
}
  
export function MainLayout(props: Props) {
  return (
      <div className="bg-gradient-to-tr from-purple-900 to-blue-600 min-h-screen flex text-white">
        <SideBar />
        <div className="w-full">
          { props.children }
        </div>
      </div>
  );
}
