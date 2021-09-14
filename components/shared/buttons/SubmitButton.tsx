interface Props {
  title: String;
  titleOnLoading: String;
  isLoading: boolean;
}

export function SubmitButton(props: Props) {
  return (
        <button type="submit"
            className="bg-blue-600 hover:bg-blue-700 w-full p-3 rounded transition-all duration-100 mt-3 disabled:bg-blue-900"
            disabled={props.isLoading}>
            <div className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 38 38" stroke="#fff" className={'pr-2' + (!props.isLoading ? ' hidden' : '')} id="LoginSubmitLoadingSVG">
                    <g fill="none" fillRule="evenodd">
                        <g transform="translate(1 1)" strokeWidth="2">
                            <circle strokeOpacity=".5" cx="18" cy="18" r="18"></circle>
                            <path d="M36 18c0-9.94-8.06-18-18-18">
                                <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform>
                            </path>
                        </g>
                    </g>
                </svg>
                <span id="LoginSubmitBtnText">{props.isLoading ? props.titleOnLoading : props.title}</span>
            </div>
        </button>
  );
}