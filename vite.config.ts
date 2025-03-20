import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  publicDir: "src/assets",
  server: {
    port: 3000,
  },
  optimizeDeps: {
    exclude: ["@mui/x-date-pickers"],
  },
});
