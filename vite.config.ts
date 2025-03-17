import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/hex2rgb/", // Замени на свое имя репозитория
});
