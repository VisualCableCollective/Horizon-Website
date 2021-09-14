import { InputRow } from '../InputRow';

interface Props {
  isInvalid: boolean;
}

export function EmailUsernameInput(props: Props) {
  return (
        <InputRow>
            <input
                className={'shadow-inner focus:shadow rounded w-full py-2 px-3 placeholder-gray-400 bg-dark-4 focus:bg-dark-5 transition-all duration-75 outline-none' + 
            (props.isInvalid ? ' border-2 border-red-500' : '')}
                type="email"
                name="emailOrUsername"
                placeholder="E-mail address/Username"
                autoComplete="email"
                required />
        </InputRow>
  );
}