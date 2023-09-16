import { signIn, signOut, verify } from '../api/authAPI';
import { AdminSignInType } from '../constants/adminConstants';

export const signInAction = async (credential: AdminSignInType) => {
  const { error, data } = await signIn(credential);
  if (error) {
    throw new Error(error);
  }
  return data
};

export const signOutAction = async () => {
  const { error, data } = await signOut();
  if (error) {
    throw new Error(error);
  }
  return data;
};

export const verifyAction = async () => {
  const { error, data } = await verify();
  if (error) {
    throw new Error(error);
  }
  return data;
};

