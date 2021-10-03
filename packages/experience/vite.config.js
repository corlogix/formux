const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
    resolve: {
        extensions: [".scss"]
    },
    build: {
        outDir: "./css",
        lib: {
            entry: path.resolve(__dirname, 'scss/index.scss'),
            name: "css",
            fileName: "index.css"
        },
        cssCodeSplit: true,
        minify: false,
    },
    css: {
        preprocessorOptions: {
            javascriptEnabled: false,
        }
    }
});