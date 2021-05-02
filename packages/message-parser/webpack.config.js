const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.peg$/,
        use: [
          {
            loader: path.resolve("src/pegloader.js"),
            options: {
              /* ... */
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".peg"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index.js",
    library: "messageParser",
    libraryTarget: "umd",
    globalObject: "this",
    umdNamedDefine: true,
  },
};
