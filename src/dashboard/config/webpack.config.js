const path = require("path")
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    entry: path.resolve("src/dashboard/index.js"),
    output: {
        //path: path.resolve(__dirname, "dist"),
        path: path.resolve("dist-dashboard"),
        filename: "js/bundle.js"
    },
    devServer: {
        contentBase: path.join("dist-dashboard"),
        compress: true,
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
                test: /\.html$/,
                use: {
                    loader: 'html-loader'/* ,
                  options: {
                    presets: ['es2015']
                  } */
                }
            },
            {
                // test: que tipo de archivo quiero reconocer,
                // use: que loader se va a encargar del archivo
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    // ['style-loader','css-loader']
                    // fallback: 'style-loader',
                    use: [
                        "css-loader",
                        {
                            loader: 'stylus-loader',
                            options: {
                                use: [
                                    require('nib'),
                                    require('rupture')
                                ],
                                import: [
                                    '~nib/lib/nib/index.styl',
                                    '~rupture/rupture/index.styl'
                                ]
                            }
                        }
                    ]
                }),
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.(png|jpg|gif|woff|eot|ttf|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 100000
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // new ExtractTextPlugin("css/styles.css")
        new ExtractTextPlugin("css/[name].css"),
        // new webpack.DllReferencePlugin({
        //     manifest: require('./modules-manifest.json')
        // })
    ],
    optimization: {
        // splitChunks: {
        //     cacheGroups: {
        //         vendor: {
        //             chunks: 'initial',
        //             name: 'vendor',
        //             test: 'vendor',
        //             enforce: true
        //         }
        //     }
        // }
    }
}