const path = require("path")

module.exports = {
    entry: path.resolve( "src/dashboard/index.js"),
    output: {
        //path: path.resolve(__dirname, "dist"),
        path: path.resolve("dist-dashboard"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "dist-dashboard"),
        // compress: true,
        port: 9000,
        // after(app){
        //   console.log('======== after ==========')
        //   console.log(app)
        //   // do fancy stuff
        // },
        // before(app) {
        //   console.log('======== before =========')
        //   console.log(app)
        // }
    },
    module: {
        rules: [
            {
                //que tipos de archivos quiero reconocer
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                  loader: 'babel-loader'/* ,
                  options: {
                    presets: ['es2015']
                  } */
                }
            },
            {
                //que tipos de archivos quiero reconocer
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}