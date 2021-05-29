import { useEffect } from "react";
import { useRouter } from "next/router";
import { HorizonAPIClient } from "horizon-api-client-ts";

import MainLayout from "../components/layouts/mainlayout";

export default function Auth({token, setIsUserAuthenticated}) {
  const router = useRouter();

  useEffect(() => {
    if (!token) return alert("Sorry, but we couldn't sign you in. (Error: VCC_AUTH_TOKEN_MISSING)");
    HorizonAPIClient.authenticateUserWithToken(token).then(
      (result) => {
        if(result === true){
          setIsUserAuthenticated(true);
          router.push("/");
        }else{
          alert("Sorry, but we couldn't sign you in. (Error: VCC_TOKEN_AUTH_FAILED)");
        }
      }
    );
  }, []);

  return <MainLayout>Hi</MainLayout>;
}

Auth.getInitialProps = async ({ query }) => {
  const {token} = query;

  return {token}
}
