interface Props {
  children: React.ReactNode;
}

export function SubSideBar(props: Props) {
  return (
      <div className="border-r border-white border-opacity-25 h-screen">
        { props.children }
      </div>
  );
}