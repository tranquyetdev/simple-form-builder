module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'core.min.js'
  },
  module: {
    rules:[
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
             loader: 'css-loader',
             options: {
               modules: true
             }
          }
        ]
      },
      {
        test: /\.twig$/,
        use: {
          loader: 'twig-loader',
          options: {
          },
        }
      }
    ]
  }
};
