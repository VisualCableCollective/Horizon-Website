import { LoginStatus } from 'horizon-api-client';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { SubmitButton } from '../../shared/buttons/SubmitButton';
import FormBrandLogo from '../../shared/forms/FormBrandLogo';
import { EmailUsernameInput } from '../../shared/forms/inputs/auth/EmailUsernameInput';
import { FormTitle } from '../../shared/forms/inputs/auth/FormTitle';
import { PasswordInput } from '../../shared/forms/inputs/auth/PasswordInput';
import { CheckBox } from '../../shared/forms/inputs/CheckBox';
import { InputRow } from '../../shared/forms/inputs/InputRow';
import AuthFormWrapper from '../../shared/forms/wrappers/AuthFormWrapper';


function LoginForm() {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [areCredentialsInvalid, setAreCredentialsInvalid] = useState(false);

  const auth = useAuth();
  const router = useRouter();

  if (auth.isAuthenticated) {
    router.push('/');
    return null;
  }

  const loginUser = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    setAreCredentialsInvalid(false);

    setIsLoggingIn(true);

    const target = event.target as typeof event.target & {
      emailOrUsername: { value: string };
      password: { value: string };
    };

    const loginResult = await auth.login(target.emailOrUsername.value, target.password.value);

    switch (loginResult) {
      case LoginStatus.CredentialsInvalid:
        setAreCredentialsInvalid(true);
        break;
        
      case LoginStatus.UnknownError:
        alert('An unknown error occured while signing in');
        setAreCredentialsInvalid(true);
        break;

      case LoginStatus.Success:
        router.push('/');
        return;
    }

    setIsLoggingIn(false);
  };

  return (
    <AuthFormWrapper>
      <form onSubmit={loginUser}>
        <FormBrandLogo />
        <FormTitle title="Sign in to your Horizon account." />
        {areCredentialsInvalid && <p className="text-red-500 pb-1">Incorrect credentials.</p>}
        <EmailUsernameInput isInvalid={areCredentialsInvalid} />
        <PasswordInput isInvalid={areCredentialsInvalid} />
        <InputRow>
          <div className="flex items-center justify-between text-dark text-sm">
            <CheckBox title="Remember Me" />
            <a className="hover:text-dark-hover transition-colors duration-100" href="https://vcc-online.eu/forgot-password">Forgot Password?</a>
          </div>
        </InputRow>
        <SubmitButton title="Sign In" titleOnLoading="Signing In..." isLoading={isLoggingIn} />
        <div className="mt-5 text-sm">
          <p className="text-dark">Don&apos;t have a Horizon account yet? <a className="text-dark-hover hover:text-white" href="https://vcc-online.eu/register">Sign Up</a></p>
        </div>
      </form>
    </AuthFormWrapper>
  );
}

export default LoginForm;