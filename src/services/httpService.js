import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError)
    alert("An unexpected error occurred. Please try again after some time");

  return Promise.reject(error);
});
export default {
  get: axios.get,
};
