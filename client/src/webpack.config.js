// webpack.config.js

module.exports = {
  // other webpack configurations...
  module: {
    rules: [
      {
        test: /\.jsx?$/, // match both .js and .jsx files
        loader: 'esbuild-loader',
        options: {
          loader: 'jsx', // enable JSX parsing
          target: 'es2015', // set the target to ES2015 or higher
        },
      },
    ],
  },
};
