const { defineConfig } = require("vite");
const vue = require("@vitejs/plugin-vue-jsx");

module.exports = defineConfig({
    root: "example",
    plugins: [vue()]
    // esbuild: {
    //   jsxFactory: 'h',
    //   jsxFragment: 'Fragment'
    // }
});