import axios, { AxiosError } from "axios";

const BASE_URL: string | undefined = process.env.BASE_URL;

const LOCAL_STORAGE_KEY = "accessToken";
const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY);

export const API = axios.create({
    baseURL: BASE_URL,
})

export const ADMIN_API = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
})

export const CLINIC_API = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
})

export const handleApiError = async (error: AxiosError | Error) => {
    try {
      const errorMessage = error.message || "An unexpected error occurred.";
      const data = null;
      return { error: errorMessage, data };
    } catch (err) {
      throw new Error("An unexpected error occurred.");
    }
  };