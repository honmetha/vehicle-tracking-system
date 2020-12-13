const getToken = () => {
  return localStorage.getItem("ACCESS_TOKEN");
};

const setToken = (token) => {
  localStorage.setItem("ACCESS_TOKEN", token);
};

const removeToken = () => {
  localStorage.removeItem("ACCESS_TOKEN");
};

const service = {
  getToken,
  setToken,
  removeToken,
};

export default service;