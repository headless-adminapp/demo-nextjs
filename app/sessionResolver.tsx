import { SessionResolver } from '@headless-adminapp/app/auth';

export const sessionResolver: SessionResolver = async () => {
  const loginUserInfoStr = localStorage.getItem('loginUserInfo');
  if (loginUserInfoStr) {
    const loginUserInfo = JSON.parse(loginUserInfoStr);
    return {
      email: loginUserInfo.email,
      exp: loginUserInfo.exp,
      fullName: loginUserInfo.fullName,
      profilePicture: loginUserInfo.profilePicture,
    };
  }

  return null;
};
