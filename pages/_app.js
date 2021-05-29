import '../styles/globals.css';
import {useState} from "react";

import HorizonAPIHandler from "../handlers/HorizonAPIHandler";

function MyApp({ Component, pageProps }) {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(true);
  pageProps.isUserAuthenticated = isUserAuthenticated;
  pageProps.setIsUserAuthenticated = setIsUserAuthenticated;

  HorizonAPIHandler.Init();

  console.log(pageProps);

  return <Component {...pageProps} />
}

export default MyApp
