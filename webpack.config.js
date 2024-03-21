const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point of your application  
  entry: './src/index.js',

  //Output configuration
  output: {
    // Filename of the bundled file
    filename: 'main.js',
    // Output directory as an absolute path
    path: path.resolve(__dirname, 'dist'),
    // Clean the output directory before emit
    clean: true,
  },

  //Plugins configuration
  plugins: [
    new HtmlWebpackPlugin({
        // Path to HTML to use as a template
        template: './src/index.html',
    }),
  ],

  // Development tools
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },

  // Module and rules for file types
  module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
            ],
        },
    ],
  },
};