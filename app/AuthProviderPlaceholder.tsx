import { AuthProviderPlaceholderProps } from '@headless-adminapp/app/auth';
import { PageLoading } from '@headless-adminapp/fluent/components/PageLoading';
import { DialogLogin } from '@headless-adminapp/fluent/components/DialogLogin';
import { PageBroken } from '@headless-adminapp/fluent/components/PageBroken';
import { FC } from 'react';

export const AuthProviderPlaceholder: FC<AuthProviderPlaceholderProps> = ({
  loading,
  loadingError,
  retry,
}) => {
  if (loading) {
    return (
      <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
        <PageLoading message="Authenticating..." />
      </div>
    );
  }

  if (loadingError) {
    return <PageBroken title="Error loading auth session" />;
  }

  return (
    <DialogLogin
      logoImageUrl="/globe.svg"
      onLogin={async (username, password) => {
        if (username !== 'john' && password !== 'doe') {
          throw new Error('Invalid username or password');
        }

        localStorage.setItem(
          'loginUserInfo',
          JSON.stringify({
            email: 'john.doe@example.com',
            fullName: 'John Doe',
            exp: Date.now() + 1000 * 60 * 60 * 24,
            profilePicture: '',
          })
        );

        retry();
      }}
    />
  );
};
