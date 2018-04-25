const path = require('path');
module.exports = {
  entry: {
		clique: "./src/clique.js"
  },
  output: {
    path: path.resolve(__dirname, "client"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /\.babelrc/,
        use: [ 'vue-loader' ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['es2015', { modules: false }]
              ]
            }
          }
        ]
      }
    ]
  },
  externals: {
    jquery: 'jQuery',
    vue: 'Vue',
  }
};
