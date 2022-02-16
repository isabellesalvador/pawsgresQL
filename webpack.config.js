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
    port: 8080, //client server
    proxy: {
      '/api': 'http://localhost:3000' //requests from front end get rerouted to backend 
    }
  }
};