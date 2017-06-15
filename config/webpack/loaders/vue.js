module.exports = {
  test: /.vue$/,
  loader: 'vue-loader',
  options: {
    extractCSS: true,
    loaders: {
      js: 'babel-loader',
      file: 'file-loader',
      scss: [
        'vue-style-loader',
        'css-loader',
        'postcss-loader', 
        'sass-loader',
        {
          loader: 'sass-resources-loader',
          options: {
            resources: [
              'app/javascript/styles/utilities/_rem-calc.scss',
              'app/javascript/styles/bulma/_variables.scss'
            ]
          },
        },
      ],
      sass: 'vue-style-loader!css-loader!postcss-loader!sass-loader?indentedSyntax'
    }
  }
}