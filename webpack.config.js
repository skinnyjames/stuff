const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  entry: {
		clique: "./src/js/clique.js"
  },
  output: {
    path: path.resolve(__dirname, "client/js"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
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
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
