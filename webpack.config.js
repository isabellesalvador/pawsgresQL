const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { apply } = require('file-loader'); => do i need this? from express?

module.exports = {
  mode: process.env.NODE_ENV, //to switch from production to development later in packpage.json
  entry: path.join(__dirname, './client/index.js'), //starting point of app should be top most level
  output: {
    filename: 'build.js', //used for file type
    path: path.resolve(__dirname, 'build'), //creates a folder. if no path defaults to 'dist'
  },
  module: {
    rules:[
      {
        test: /\.jsx?/, //regex that checks for .js/.jsx files
        exclude: /node_modules/, 
        loader: 'babel-loader', //transpiles jsx and parses react
        options: {
          presets: ['@babel/env', '@babel/react']
        }
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
    ]
  }, 
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'index.html' 
    }),
  ],
  devServer: {
    static: {
      publicPath: '/build',
      directory: path.resolve(__dirname, 'build')
    },
    // port: 8080, //client side
    proxy: {
      '/api': 'http://localhost:3000' //requests from front end get rerouted to backend 
    }
  },
  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: ['.js', '.jsx'],
    fallback: { 
      "url":  require.resolve("url/"), 
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "util": require.resolve("util/"),
      "vm": require.resolve("vm-browserify"),
      "console": require.resolve("console-browserify"),
      "tty": require.resolve("tty-browserify"),
      "buffer": require.resolve("buffer/"),
      "assert": require.resolve("assert/"),

      // "os": require.resolve("os-browserify/browser"),
      "os": false,
      // "path": require.resolve("path-browserify"),
      "path": false,
      //when fs is commented out get 5 errors saying fs cant be resolved in node modules.  when i comment back in just get 'Critical dependency: require function is used in a way in which dependencies cannot be statically extracted'
      "fs": false,
      //try uninstalling all of them from dependencies to dev dependencies?
    },
    
  },
};