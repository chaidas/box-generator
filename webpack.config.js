const path = require("path");

module.exports = {
    name: "react",
    entry: "./js/bootstrap.jsx",
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "app.js",
    },
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    externals: {
        // Jquery will be included in the bottom of data/templates/global/jobs/common/footer.ttk
        // using a <script> tag. Tell Webpack to not look for it for bundling.
        react: "React",
        "react-dom": "ReactDOM",
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /(node_modules)/,
                use: "babel-loader",
            },
        ],
    },
    plugins: [
        // new BundleAnalyzerPlugin()
    ],
};
