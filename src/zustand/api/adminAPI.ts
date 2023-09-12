import { AdminSignInType } from "../constants/adminConstants";
import { ADMIN_API, handleApiError } from "./utils";

export const signIn = async (credential: AdminSignInType) => {
    try {
      const res = await ADMIN_API.post("/auth/signin", credential);
      return { error: null, data: res.data };
    } catch (error) {
      return handleApiError(error as Error);
    }
  }