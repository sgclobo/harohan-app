import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: "autoUpdate",
            includeAssets: ["favicon.ico", "apple-touch-icon.png", "icon-512.png"],
            manifest: {
                name: "Harohan ba Na'i",
                short_name: "Harohan",
                description: "Orasaun no Knananuk Sarani Timor nian",
                theme_color: "#db2777", // The pink color from your app
                icons: [{
                        src: "icon-192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "icon-512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
            },
        }),
    ],
});