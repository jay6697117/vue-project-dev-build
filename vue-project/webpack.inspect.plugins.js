[
  /* config.plugin('vue-loader') */
  new VueLoaderPlugin(),
  /* config.plugin('define') */
  new DefinePlugin(
    {
      'process.env': {
        NODE_ENV: '"development"',
        BASE_URL: '"/dev/"'
      }
    }
  ),
  /* config.plugin('case-sensitive-paths') */
  new CaseSensitivePathsPlugin(),
  /* config.plugin('friendly-errors') */
  new FriendlyErrorsWebpackPlugin(
    {
      additionalTransformers: [
        function () { /* omitted long function */ }
      ],
      additionalFormatters: [
        function () { /* omitted long function */ }
      ]
    }
  ),
  /* config.plugin('hmr') */
  new HotModuleReplacementPlugin(),
  /* config.plugin('progress') */
  new ProgressPlugin(),
  /* config.plugin('html') */
  new HtmlWebpackPlugin(
    {
      templateParameters: function () { /* omitted long function */ },
      template: '/Users/zhangjinhui/Desktop/Vue-project-dev-build/vue-project/public/index.html'
    }
  ),
  /* config.plugin('preload') */
  new PreloadPlugin(
    {
      rel: 'preload',
      include: 'initial',
      fileBlacklist: [
        /\.map$/,
        /hot-update\.js$/
      ]
    }
  ),
  /* config.plugin('prefetch') */
  new PreloadPlugin(
    {
      rel: 'prefetch',
      include: 'asyncChunks'
    }
  ),
  /* config.plugin('copy') */
  new CopyWebpackPlugin(
    [
      {
        from: '/Users/zhangjinhui/Desktop/Vue-project-dev-build/vue-project/public',
        to: '/Users/zhangjinhui/Desktop/Vue-project-dev-build/vue-project/dist',
        toType: 'dir',
        ignore: [
          '.DS_Store',
          {
            glob: 'index.html',
            matchBase: false
          }
        ]
      }
    ]
  ),
  {
    options: {
      test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i,
      include: undefined,
      exclude: undefined,
      cache: true,
      algorithm: 'gzip',
      compressionOptions: {},
      filename: '[path].gz[query]',
      threshold: 100,
      minRatio: 0.8,
      deleteOriginalAssets: false
    },
    algorithm: function () { /* omitted long function */ },
    compressionOptions: {
      level: 9
    }
  }
]
