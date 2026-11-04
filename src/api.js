// Single source of truth for the backend URL.
// In dev the vite proxy (vite.config.js) forwards /bb-api to the real
// server from the dev process itself, so the browser never hits CORS.
export const API_URL = import.meta.env.DEV
  ? "/bb-api"
  : "https://book-beacon-server.vercel.app";
