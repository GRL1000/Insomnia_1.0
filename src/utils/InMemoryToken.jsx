import axios from "axios";
import { Buffer } from "buffer";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;
const REDIRECT_URI = import.meta.env.VITE_URL;

let InMemoryToken = {
  token: localStorage.getItem("accessToken") || null,
  expirationDate: localStorage.getItem("expirationDate")
    ? new Date(localStorage.getItem("expirationDate"))
    : null,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

export const GetToken = () => InMemoryToken;

export const setUser = (user) => {
  InMemoryToken = {
    ...InMemoryToken,
    user,
  };

  localStorage.setItem("user", JSON.stringify(user)); // Almacenar datos del usuario
};

export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const setToken = (token, expirationDate) => {
  InMemoryToken = {
    ...InMemoryToken,
    token,
    expirationDate,
  };

  localStorage.setItem("accessToken", token);
  localStorage.setItem("expirationDate", expirationDate.toISOString());

  return true;
};

export const deleteToken = () => {
  InMemoryToken = {
    token: null,
    expirationDate: null,
    user: null,
  };

  localStorage.removeItem("accessToken");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("user");

  return true;
};

export const login = async (
  code,
  url = "https://accounts.spotify.com/api/token"
) => {
  const auth = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");

  const headers = {
    Authorization: `Basic ${auth}`,
    "content-type": "application/x-www-form-urlencoded",
  };
  const params = {
    grant_type: "authorization_code",
    code,
    redirect_uri: REDIRECT_URI,
  };

  try {
    const { data } = await axios.post(url, null, {
      headers,
      params,
    });

    const expirationDate = new Date(
      new Date().getTime() + data.expires_in * 1000
    );
    setToken(data.access_token, expirationDate);
    localStorage.setItem("refreshToken", data.refresh_token);

    const user = await fetchUserData(data.access_token);
    setUser(user);

    return GetToken();
  } catch (error) {
    throw new Error(`Login: ${error}`);
  }
};

export const getNewToken = async (
  refreshToken = localStorage.getItem("refreshToken"),
  url = "https://accounts.spotify.com/api/token"
) => {
  const headers = {
    Authorization: `Basic ${Buffer.from(
      `${CLIENT_ID}:${CLIENT_SECRET}`
    ).toString("base64")}`,
    "content-type": "application/x-www-form-urlencoded",
  };
  const params = {
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  };

  try {
    const { data } = await axios.post(url, null, { headers, params });

    const expirationDate = new Date(
      new Date().getTime() + data.expires_in * 1000
    );
    setToken(data.access_token, expirationDate);

    const user = await fetchUserData(data.access_token);
    setUser(user);

    return GetToken();
  } catch (error) {
    throw new Error(`Request New Token: ${error}`);
  }
};

const fetchUserData = async (accessToken) => {
  try {
    const response = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const userData = response.data;
    
    return userData;
  } catch (error) {
    throw new Error(`Fetch User Data: ${error}`);
  }
};

export const fetchUserPlaylists = async (accessToken) => {
  try {
    const response = await axios.get("https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data.items;
  } catch (error) {
    throw new Error(`Fetch Playlists: ${error}`);
  }
};


export const logout = async () => {
  deleteToken();
  localStorage.setItem("logout", Date.now());
  localStorage.clear();
  window.location.href = REDIRECT_URI;
};

export const logoutListener = (e) => {
  if (e.key === "logout") {
    window.location.href = REDIRECT_URI;
  }
};
