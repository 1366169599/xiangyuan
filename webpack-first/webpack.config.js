module.exports = {
    entry: {
        'a': ["./a.js", './b.js'],
        'b': "./b.js",
        'tudou': "./tudou.js",

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
            { test: /\.js$/, loader: "babel-loader" },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'file-loader',
            }
        ]
    }
};