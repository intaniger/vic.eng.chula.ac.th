const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

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
    if(Object.getPrototypeOf(config.plugins[config.plugins.length - 1]).constructor.name === "UglifyJsPlugin"){
      console.log("ตรวจพบการใช้ปลั๊กอินหัวควย กำลังเปลี่ยนปลั๊กอินโดยอัตโนมัติ...")
      config.plugins[config.plugins.length - 1] = new UglifyJSPlugin()
    }
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
