import '../styles/globals.css';
import {useState, useEffect} from "react";
import { HorizonAPIClient } from "horizon-api-client-ts";

import HorizonAPIHandler from "../handlers/HorizonAPIHandler";

function MyApp({ Component, pageProps }) {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  pageProps.isUserAuthenticated = isUserAuthenticated;
  pageProps.setIsUserAuthenticated = setIsUserAuthenticated;

  HorizonAPIHandler.Init();

  console.log(pageProps);

  useEffect(() => {
    const tokenInStorage = localStorage.getItem("authToken");
    if (!tokenInStorage) return;
    HorizonAPIClient.authenticateUserWithToken(tokenInStorage).then(
      (result) => {
        if(result === true){
          setIsUserAuthenticated(true);
        }
      }
    );
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
