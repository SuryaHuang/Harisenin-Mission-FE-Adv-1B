import axios from "axios";

const FIREBASE_BASE_URL = import.meta.env.VITE_FIREBASE_BASE_URL;
const FIREBASE_API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;

export const axiosInstance = axios.create({
  baseURL: FIREBASE_BASE_URL,
});

export const axiosApi = axios.create({
  axiosApiKey: FIREBASE_API_KEY,
});
