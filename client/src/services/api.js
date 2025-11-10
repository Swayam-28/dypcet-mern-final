import axios from "axios";

export const api = axios.create({
  baseURL: "https://dypcet-clone.onrender.com/api",
});

// For protected admin APIs (requires token)
export const apiAuth = axios.create({
  baseURL: "https://dypcet-clone.onrender.com/api",
});

apiAuth.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Upload helper
export const uploadFile = async (file) => {
  const form = new FormData();
  form.append("file", file);
  const res = await apiAuth.post("/upload", form, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};
