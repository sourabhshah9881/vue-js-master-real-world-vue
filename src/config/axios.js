import axios from "axios";
// import nProgress from "nprogress";

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_ENDPOINT_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// apiClient.interceptors.request.use((config) => {
//   nProgress.start();
//   return config;
// });

// apiClient.interceptors.request.use((response) => {
//   nProgress.done();
//   return response;
// });

export default apiClient;
