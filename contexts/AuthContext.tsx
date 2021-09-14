import { LoginStatus } from 'horizon-api-client';
import { createContext, useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { AuthUser } from '../models/auth/AuthUser';
import { useHorizonAPI } from './HorizonAPIContext';

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
  const apiClient = useHorizonAPI();

  const [user, setUser] = useState(new AuthUser());
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [cookies, setCookie] = useCookies(['auth']);

  async function loginHandler(emailOrUsername: string, password: string) {
    const response = await apiClient.client.authenticateUserWithCredentials(emailOrUsername, password);

    if (response.status != LoginStatus.Success){
      return response.status;
    }

    const authUser = new AuthUser();
    authUser.accessToken = response.tokenData.access_token;
    authUser.refreshToken = response.tokenData.refresh_token;
    authUser.tokenType = response.tokenData.token_type;
    setUser(authUser);
    setIsAuthenticated(true);

    const cookieData = JSON.stringify({
      access_token: response.tokenData.access_token,
      refresh_token: response.tokenData.refresh_token,
      token_type: response.tokenData.token_type,
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

      authUser.accessToken = cookies.auth.access_token;
      authUser.refreshToken = cookies.auth.refresh_token;
      authUser.tokenType = cookies.auth.token_type;

      setUser(authUser);
      setIsAuthenticated(true);
      console.log('restored session!');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AuthContext.Provider value={context}>{props.children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);