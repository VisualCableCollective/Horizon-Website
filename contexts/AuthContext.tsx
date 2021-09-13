import { createContext, useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { HTTPStatusCode } from '../enums/HTTPStatusCode';
import { LoginStatus } from '../enums/LoginStatus';
import { AuthUser } from '../models/auth/AuthUser';
import { ApiRequestUtil } from '../utils/ApiRequestUtil';

export type AuthContextType = {
  user: AuthUser;
  isAuthenticated: boolean;
  login: (emailOrUsername: string, password: string) => Promise<LoginStatus>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: new AuthUser(),
  isAuthenticated: false,

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login: async (emailOrUsername: string, password: string) => {
    console.error('No auth provider');
    return LoginStatus.Unknown;
  },
  logout: () => {
    console.error('No auth provider');
  },
});

interface Props {
  children: React.ReactNode;
}

export function AuthContextProvider(props: Props) {
  const [user, setUser] = useState(new AuthUser());
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [cookies, setCookie] = useCookies(['auth']);

  async function loginHandler(emailOrUsername: string, password: string) {
    var response = new Response();

    // Get token
    try {
      response = await ApiRequestUtil.fetch(
        'http://localhost:8000/oauth/token',
        'POST',
        JSON.stringify({
          grant_type: 'password',
          client_id: '4',
          client_secret: 'MjV7S0heJ4VaA0dkXj7REk3NBtW3xXu3HxuMsjqj',
          username: emailOrUsername,
          password: password,
          scope: '*',
        }),
      );
    } catch (exception) {
      console.error('Error while signing in: ' + exception);
      return LoginStatus.UnknownError;
    }

    // invalid credentials error
    if (response.status == HTTPStatusCode.BadRequest) {
      return LoginStatus.CredentialsInvalid;
    }

    if (response.status != HTTPStatusCode.OK) {
      return LoginStatus.UnknownError;
    }

    const tokenData = await response.json();

    console.log(tokenData);

    const authUser = new AuthUser();
    authUser.accessToken = tokenData.access_token;
    authUser.refreshToken = tokenData.refresh_token;
    authUser.tokenType = tokenData.token_type;
    setUser(authUser);
    setIsAuthenticated(true);

    const cookieData = JSON.stringify({
      accessToken: tokenData.access_token,
      refreshToken: tokenData.refresh_token,
      tokenType: tokenData.token_type,
    });

    setCookie('auth', cookieData, {
      path: '/',
      sameSite: true,
    });

    return LoginStatus.Success;
  }

  const context = {
    user: user,
    isAuthenticated: isAuthenticated,
    login: loginHandler,
    logout: () => {
      console.error('Logout is not implemented yet!');
    },
  };

  useEffect(() => {
    // check if user was already signed in in the browser
    if (cookies.auth) {
      // restore session
      const authUser = new AuthUser();

      authUser.accessToken = cookies.auth.accessToken;
      authUser.refreshToken = cookies.auth.refreshToken;
      authUser.tokenType = cookies.auth.tokenType;

      setUser(authUser);
      setIsAuthenticated(true);
      console.log('restored session!');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AuthContext.Provider value={context}>{props.children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);