import axios from "axios";

import constants from "./constants";

let authens = {};

authens.getToken = () => {
  try {
    return localStorage.getItem(constants.STORAGE_KEYS.TOKEN);
  } catch (error) {
    console.error("getToken - error: ", error);
    return null;
  }
};

authens.setToken = (token) => {
  try {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    localStorage.setItem(constants.STORAGE_KEYS.TOKEN, token);
  } catch (error) {
    console.error("setToken - error: ", error);
    return null;
  }
};

authens.removeToken = () => {
  try {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem(constants.STORAGE_KEYS.TOKEN);
  } catch (error) {
    console.error("removeToken - error: ", error);
    return null;
  }
};

export default authens;
