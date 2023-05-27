const path = require('path');
const webpack = require('webpack');

const appDirectory = path.resolve(__dirname, '../');

// This is needed for webpack to compile JavaScript.
// Many OSS React Native packages are not compiled to ES5 before being
// published. If you depend on uncompiled packages they may cause webpack build
// errors. To fix this webpack can be configured to compile to the necessary
// `node_module`.
const babelLoaderConfiguration = {
  test: /\.(tsx)|(ts)|(js)|(jsx)$/,
  // Add every directory that needs to be compiled by Babel during the build.
  include: [
    path.resolve(appDirectory, 'index.web.js'),
    path.resolve(appDirectory, '.'),
    path.resolve(appDirectory, 'node_modules/react-native-reanimated'),
  ],
  //exclude: [path.resolve(appDirectory, 'node_modules/react-native-reanimated')],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      // The 'metro-react-native-babel-preset' preset is recommended to match React Native's packager
      presets: [
        'module:metro-react-native-babel-preset',
        { plugins: ['@babel/plugin-proposal-class-properties'] },
      ],
      // Re-write paths to import only the modules needed by the app
      plugins: [
        'react-native-web',
        [
          'module-resolver',
          {
            alias: {
              '^react-native$': 'react-native-web',
            },
          },
        ],
        'inline-json-import',
        {},
      ],
    },
  },
};

// This is needed for webpack to import static images in JavaScript files.
const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]',
      esModule: false,
    },
  },
};

module.exports = {
  entry: [
    'babel-polyfill',
    // load any web API polyfills
    // path.resolve(appDirectory, 'polyfills-web.js'),
    // your web-specific entry file
    path.resolve(appDirectory, 'index.web.js'),
  ],

  // configures where the build ends up
  output: {
    filename: 'bundle.web.js',
    path: path.resolve(appDirectory, 'dist'),
  },

  // ...the rest of your config
  plugins: [
    new webpack.EnvironmentPlugin({ JEST_WORKER_ID: null }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      __DEV__: process.env.NODE_ENV !== 'production' || true,
    }),
  ],
  module: {
    rules: [
      babelLoaderConfiguration,
      imageLoaderConfiguration,
      {
        test: /\.json$/,
        loader: 'json-loader',
        include: path.resolve(__dirname, '../node_modules/react-native-vector-icons'),
      },
      {
        test: /\.ttf$/,
        loader: 'url-loader', // or directly file-loader
        include: path.resolve(__dirname, '../node_modules/react-native-vector-icons'),
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, '../node_modules/react-native-vector-icons'),
        options: {
          presets: ['@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    ],
  },

  resolve: {
    // This will only alias the exact import "react-native"
    alias: {
      'react-native$': 'react-native-web',
    },
    // If you're working on a multi-platform React Native app, web-specific
    // module implementations should be written in files using the extension
    // `.web.js`.
    extensions: ['.web.js', '.js', '.jsx', '.ts', '.web.tsx', '.tsx'],
  },
};
