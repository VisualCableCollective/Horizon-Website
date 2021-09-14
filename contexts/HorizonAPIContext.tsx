import { Environment, HorizonAPIClient, HorizonAPIClientConfig } from 'horizon-api-client';
import { createContext, useContext } from 'react';

export type HorizonAPIContextType = {
  client: HorizonAPIClient;
};

export const HorizonAPIContext = createContext<HorizonAPIContextType>({
  client: null,
});

interface Props {
  children: React.ReactNode;
}

export function HorizonAPIContextProvider(props: Props) {
  const client = new HorizonAPIClient(new HorizonAPIClientConfig(2, 'ZmWrSAT1TURrY8skR5OjRngbYomoHyzTYG7wQYa5', Environment.LocalDevelopment, 'http://localhost:8000/'));

  const context = {
    client,
  };

  return <HorizonAPIContext.Provider value={context}>{props.children}</HorizonAPIContext.Provider>;
}

export const useHorizonAPI = () => useContext(HorizonAPIContext);