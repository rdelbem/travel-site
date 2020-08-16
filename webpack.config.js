const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: {
    home: ["./app/assets/scripts/App.js"],
  },

  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "styles.css",
            },
          },
          {
            loader: "extract-loader",
          },
          {
            loader: "css-loader?-url",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      output: {
        filename: "./dist/styles.css",
        path: path.resolve(__dirname, "dist"),
      },
    }),

    new HtmlWebpackPlugin({
      template: "./app/index.html",
      filename: "index.html",
    }),
  ],
};
