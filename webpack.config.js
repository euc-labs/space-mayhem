module.exports = {
  entry: {
    entry: './src/app/index.js',
  },
  output: {
    path: __dirname,
    filename: './build/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  performance: {
    hints: false,
  },
};
