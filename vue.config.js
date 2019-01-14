const path = require('path')
const webpack = require('webpack')
function resolve(url){
    return path.resolve(__dirname,url)
}

module.exports = {
    chainWebpack  (config)  {
        config
        .resolve 
        .alias
        .set('@C', resolve('src/components'))
        .set('@S', resolve('src/store'))
        .set('@API',resolve('src/mock/api'))
        .set('@LIB',resolve('src/lib'))
    },
    configureWebpack: {

       plugins: [

          new webpack.ProvidePlugin({

            $:"jquery",

            jQuery:"jquery",

            "windows.jQuery":"jquery"
        
          })
        ],
       

    }
}