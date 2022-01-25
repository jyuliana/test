const path = require('path');
const miniCss = require('mini-css-extract-plugin');
module.exports = {
   watch: true,
   entry: './src/index.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, './dist/')
   },
   module: {
      rules: [{
         test:/\.(s*)css$/,
         use: [
            miniCss.loader,
            'css-loader',
            'sass-loader',
         ]
      }]
   },
   plugins: [
      new miniCss({
         filename: 'style.css',
      }),
   ],
   devServer:{
      static: path.join(__dirname, "./"),
      host: '127.0.0.1',
      port: 8080,
  },
  mode: 'development', //add this line her

};
