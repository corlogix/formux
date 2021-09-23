const reactRefresh = require("@vitejs/plugin-react-refresh");
const { defineConfig } = require("vite");

module.exports = defineConfig({
    root: "example", 
    plugins: [reactRefresh()],
    
});