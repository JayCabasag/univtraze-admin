import { AdminSignInType } from '../constants/adminConstants';
import { ADMIN_API, LOCAL_STORAGE_KEY, handleApiError } from './utils';

export const signIn = async (credential: AdminSignInType) => {
  try {
    const res = await ADMIN_API.post('/auth/signin', credential);
    localStorage.setItem('token', res.data['access_token'])
    return { error: null, data: res.data };
  } catch (error) {
    return handleApiError(error as Error);
  }
};

export const signOut = async () => {
  try {
    const res = localStorage.removeItem(LOCAL_STORAGE_KEY);
    return { error: null, data: res };
  } catch (error) {
    return handleApiError(error as Error);
  }
};

export const verify = async () => {
  try {
    const res = await ADMIN_API.post('/auth/verify');
    return { error: null, data: res };
  } catch (error) {
    return handleApiError(error as Error);
  }
};
