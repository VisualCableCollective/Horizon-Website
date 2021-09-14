interface Props {
  title: String
}

export function CheckBox(props: Props) {
  return (
        <div className="inline-flex items-center pr-2">

            <input type="checkbox"
                name="remember"
                className="form-checkbox h-5 w-5 text-blue-600 appearance-none inline-block align-middle select-none flex-shrink-0 border-2 rounded bg-white transition-all duration-150
                checked:border-transparent checked:bg-no-repeat" />

            <span className="ml-2">{props.title}</span>

        </div>
  );
}