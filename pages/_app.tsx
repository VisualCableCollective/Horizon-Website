import 'tailwindcss/tailwind.css';
import { AuthContextProvider } from '../contexts/AuthContext';
import { HorizonAPIContextProvider } from '../contexts/HorizonAPIContext';

function MyApp({ Component, pageProps }) {
  return (
    <HorizonAPIContextProvider>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </HorizonAPIContextProvider>
  );
}

export default MyApp;
