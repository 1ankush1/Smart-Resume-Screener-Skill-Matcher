import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api",
  timeout: 60000
});

export async function analyzeResume(file, jobDescription, jobTitle) {
  const body = new FormData();
  body.append("file", file);
  body.append("jobDescription", jobDescription);
  body.append("jobTitle", jobTitle || "Position");

  const response = await api.post("/matching/analyze", body);
  return response.data;
}

export default api;
