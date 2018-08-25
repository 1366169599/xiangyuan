const {
    VueLoaderPlugin
} = require('vue-loader');

module.exports = {
    entry: {
        'main': './main.js',
    },
    output: {
        path: __dirname,
        filename: "[name].min.js"
    },
    mode: 'development',
    devtool: '#source-map',
    module: {
        rules: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
            { test: /\.vue$/, loader: "vue-loader",
                options: {
                    loaders: {
                        css:'vue-style-loader!css-loader',
                        js: 'babel-loader'
                    }
                }
            },
            { test: /\.js$/, loader: "babel-loader" },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'file-loader',
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};
