const ExtractTextPlugin = require("extract-text-webpack-plugin");

export default {
  webpack: (config, { defaultLoaders }) => {
    config.module.rules = [{
      oneOf: [
        defaultLoaders.jsLoader,
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
          })
        },
        {
          test: /\.svg$/,
          use: [
            "babel-loader",
            {
              loader: "react-svg-loader",
              options: {
                svgo: {
                  plugins: [
                    { removeTitle: false }
                  ],
                  floatPrecision: 2
                }
              }
            }
          ]
        },
        defaultLoaders.fileLoader,
      ]
    }]
    config.plugins.push(new ExtractTextPlugin("styles.css"))
    return config;
  },
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => ([
    {
      path: '/',
      component: 'src/containers/Home',
    },
    {
      path: '/about',
      component: 'src/containers/About',
    },
    {
      is404: true,
      component: 'src/containers/404',
    },
  ])
}
