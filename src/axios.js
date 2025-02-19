import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9000", // Change to your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // ✅ Get token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // ✅ Attach token
  }
  return config;
});

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       console.warn("🔴 Unauthorized! Logging out...");

//       // Remove token & redirect to login
//       localStorage.removeItem("token");
//       window.location.href = "/login"; // ⬅️ Redirect user
//     }
//     return Promise.reject(error);
//   }
// );
export default api;
