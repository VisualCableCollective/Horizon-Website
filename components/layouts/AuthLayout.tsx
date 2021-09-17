interface Props {
  children: React.ReactNode;
}
  
function AuthLayout(props: Props) {
  return (
      <div className="bg-dark-1 min-h-screen w-full flex items-center justify-center text-white">
        {props.children}
      </div>
  );
}
  
export default AuthLayout;