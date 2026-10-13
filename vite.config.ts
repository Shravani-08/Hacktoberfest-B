import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: "apps/dashboard",
  plugins: [react()],
  resolve: {
    alias: {
      "@git-cure/shared": path.resolve(__dirname, "packages/shared/src/types.ts"),
    },
  },
});
