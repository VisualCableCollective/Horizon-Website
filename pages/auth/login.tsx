import LoginForm from '../../components/forms/auth/LoginForm';
import AuthLayout from '../../components/layouts/AuthLayout';

export default function Login() {
  return (
    <AuthLayout>
        <LoginForm />
    </AuthLayout>
  );
}