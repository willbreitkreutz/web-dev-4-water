import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "https://willbreitkreutz.github.io/web-dev-4-water/",
  plugins: [react()],
});
