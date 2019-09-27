const StyleLintWebpackPlugin = require('stylelint-webpack-plugin');

module.exports = {
  devServer: {
    open: true,
  },
  configureWebpack: {
    plugins: [
      new StyleLintWebpackPlugin({
        files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
      }),
    ],
  },
};
