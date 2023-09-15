import axios, { AxiosError } from "axios";

const BASE_URL: string | undefined = import.meta.env.VITE_BASE_URL;

export const LOCAL_STORAGE_KEY = "token";

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

export const handleApiError = async (error: AxiosError | Error) => {
  const errorMessage = error.message || "An unexpected error occurred.";
  throw new Error(errorMessage);
};