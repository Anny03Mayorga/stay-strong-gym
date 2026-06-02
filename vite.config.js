import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "logo.png", "logo1.png", "logo2.png"],
      manifest: {
        name: "Stay Strong Gym",
        short_name: "Stay Strong",
        description: "App de rutinas y seguimiento de entrenamiento",
        theme_color: "#000000",
        background_color: "#000000",
        display: "standalone",
        start_url: "/",
        icons: [
  {
    src: "/logo1.png",
    sizes: "192x192",
    type: "image/png"
  },
  {
    src: "/logo2.png",
    sizes: "512x512",
    type: "image/png"
  }
]
      }
    })
  ]
});