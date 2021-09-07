const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  stats: {
    all: false,
    assets: true,
    cachedModules: false,
    colors: true,
    errors: true,
    errorDetails: true,
    errorStack: true,
    timings: true,
    warnings: true,
  },
  entry: {
    app: './src/app.ts',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
    publicPath: '/public/',
  },
  resolve: {
    extensions: ['.ts', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env'],
                ['@babel/preset-typescript']
              ],
            }
          },
          {
            loader: 'ts-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.scss?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  },
  plugins: [
    new MiniCSSExtractPlugin()
  ]
};

