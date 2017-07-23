/**
 * Created by wangyanqing on 2017/7/22.
 */
//引入插件----> 将文件打包生成html结构
const htmlwebpackplugin = require('html-webpack-plugin');

//
module.exports ={

    //入口
    entry:__dirname + '/src/main.js',
    //出口
    output:{
        //打包后生成的html文件的去处
        path:__dirname + "/dist",
        //打包后，生成是js文件的名字
        filename:'bundle.js'
    },
    //模块
    module:{

        rules:[
            {
                test:/\.vue$/,
                use:'vue-loader'
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(jpg|png|jpeg|ttf|svg|gif)/,
                use:'url-loader'
            },
            {
                test:/\.js/,
                use:'babel=loader',
                exclude:/node_modules/
            }
        ]
    },
    //插件
    plugins:[
        new htmlwebpackplugin({
            template:'./src/index.html',
            filename:'index.html'
        })
    ]
};

