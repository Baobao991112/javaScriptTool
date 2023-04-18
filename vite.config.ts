import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    //设置路径别名
    alias: {
      "@src": resolve(__dirname, "./src"),
      "*": resolve(""),
    },
  },
});
