const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = env => {
  const distDirectory = env && env.DIST_DIRECTORY || 'dist';

  return {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.tsx',
    target: 'web',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, distDirectory),
      publicPath: '/'
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'], // `.js` for external libs (/node_modules/)
      fallback: {
        'path': require.resolve('path-browserify')
      }
    },
    module: {
      rules: [
        {
          test: /node_modules\/vfile\/core\.js/,
          use: [{
            loader: 'imports-loader',
            options: {
              type: 'commonjs',
              imports: ['single process/browser process'],
            },
          }],
        },
        { test: /\.tsx?$/i, use: 'ts-loader', exclude: /node_modules/ },
        { test: /\.css?$/i, use: [MiniCssExtractPlugin.loader, 'css-loader'], exclude: /node_modules/ },
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
        filename: path.resolve(__dirname, distDirectory, 'index.html')
      }),
      new MiniCssExtractPlugin({ filename: 'main.css' }),
      new ESLintPlugin({ extensions: 'tsx' })
    ],
    devServer: {
      contentBase: path.resolve(__dirname, distDirectory),
      publicPath: '/',
      compress: true,
      historyApiFallback: {
        disableDotRule: true,
        index: '/'
      },
      host: '0.0.0.0',
      public: '127.0.0.1',
      port: 8000,
      watchOptions: {
        poll: true
      }
    }
  };
};
