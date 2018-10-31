const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
require('https').globalAgent.options.ca = require('ssl-root-cas/latest').create();
const axios = require('axios')

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
      path: '/register',
      component: 'src/containers/Registration',
      getData: async () => {
        const formID = "e89bd2e072932eb6ab1b21073b9fc0fd160dace96b8d0cc12346ae5c95e54a9e"
        const { data: result } = await axios.get(`http://datanaliez.com/api/v1/form/info/${formID}`)
        const formData = {...result.result}
        return {formData, formID}
      }
    },
    {
      is404: true,
      component: 'src/containers/404',
    },
  ])
}
