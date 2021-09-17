import { useRouter } from 'next/router';
import { useEffect } from 'react';
import AuthLayout from '../../components/layouts/AuthLayout';
import { useAuth } from '../../contexts/AuthContext';

export default function Logout() {
  const auth = useAuth();
  const router = useRouter();
  useEffect(() => {
    auth.logout();
    router.push('/');
  });

  return (
    <AuthLayout>
      <div>
        <h1 className="text-3xl text-center">Please wait until you are signed out...</h1>
        <p className="mt-1 text-center text-white text-opacity-70">You will be automatically redirect to the homepage.</p>
      </div>
    </AuthLayout>
  );
}