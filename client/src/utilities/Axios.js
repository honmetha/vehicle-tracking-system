import axios from "axios";
import LocalStorageService from "./localStorage";

axios.interceptors.request.use(
  (config) => {
    if (config.url.includes("/signin") || config.url.includes("/signup")) {
      return config;
    }
    const token = LocalStorageService.getToken();
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (err) => {
    throw err;
  }
);

export default axios;
