interface Props {
  children?: React.ReactNode;
}

function AuthFormWrapper(props: Props) {
  return (
    <div className="bg-dark-3 rounded-lg text-white p-12 shadow-md max-w-md">
      {props.children}
    </div>
  );
}

export default AuthFormWrapper;