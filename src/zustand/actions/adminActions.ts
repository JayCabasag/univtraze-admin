import { signIn } from "../api/adminAPI";
import { AdminSignInType } from "../constants/adminConstants";

export const signInAction = async (credential: AdminSignInType) => {
    try {
        const { error, data } = await signIn(credential)
        if (error) {
            throw new Error(error);
        }
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}