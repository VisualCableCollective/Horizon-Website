interface Props {
  icon: React.ReactNode;
}
  
export function SideBarItem(props: Props) {
  return (
      <div className="sidebar-item text-blue-200 text-2xl p-6 flex items-center transition-all duration-100 hover:bg-opacity-20 bg-black bg-opacity-0">
        {props.icon}
      </div>
  );
}