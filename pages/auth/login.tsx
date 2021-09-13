import { Environment, HorizonAPIClient as Client, HorizonAPIClientConfig } from 'horizon-api-client';
import LoginForm from '../../components/forms/auth/LoginForm';
import AuthLayout from '../../components/layouts/AuthLayout';

export default function Home() {
  const client = new Client(new HorizonAPIClientConfig(2, 'ZmWrSAT1TURrY8skR5OjRngbYomoHyzTYG7wQYa5', Environment.LocalDevelopment, 'http://localhost:8000/'));
  console.log(client);
  console.log(client.Config);
  client.authenticateUserWithCredentials('test@gmail.com', '1234');

  return (
    <AuthLayout>
        <LoginForm />
    </AuthLayout>
  );
}