import axios from "axios";
import { logout } from "./shared/utils/auth";

const apiClient = axios.create({
  baseURL: "http://localhost:8000/api",
  timeout: 1000 * 5,
});

apiClient.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem("user");

    if (userDetails) {
      const token = JSON.parse(userDetails).token;
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const login = async (data) => {
  try {
    return await apiClient.post("/auth/login", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const register = async (data) => {
  try {
    return await apiClient.post("/auth/register", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const sendFriendInvitation = async (data) => {
  try {
    return await apiClient.post("/friend-invitation/invite", data);
  } catch (exception) {
    checkResponseCodes(exception);
    return {
      error: true,
      exception,
    };
  }
};

const checkResponseCodes = (exception) => {
  const responseCode = exception?.response?.status;
  if (responseCode) {
    (responseCode === 401 || responseCode === 403) && logout();
  }
};

export const acceptFriendInvitation = async (data) => {
  try {
    return await apiClient.post("/friend-invitation/accept", data);
  } catch (exception) {
    checkResponseCodes(exception);
    return {
      error: true,
      exception,
    };
  }
};

export const rejectFriendInvitation = async (data) => {
  try {
    return await apiClient.post("/friend-invitation/reject", data);
  } catch (exception) {
    checkResponseCodes(exception);
    return {
      error: true,
      exception,
    };
  }
};
