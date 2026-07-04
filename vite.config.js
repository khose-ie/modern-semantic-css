import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: "src/modern-semantic.scss",
            name: "modern-semantic",
            formats: ["es"]
        },
        cssCodeSplit: true
    }
});
