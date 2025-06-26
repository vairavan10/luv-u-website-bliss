import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Replace 'luv-u-website-bliss' with your actual GitHub repo name
const basePath = "/luv-u-website-bliss/";

export default defineConfig(({ mode }) => ({
  base: basePath, // ✅ This is important for GitHub Pages

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
