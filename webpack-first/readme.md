http://www.runoob.com/w3cnote/webpack-tutorial.html

npm init

npm install css-loader style-loader --save

webpack a.js a.min.js
=>
require("!style-loader!css-loader!./style.css");
=>
webpack a.js a.min.js --module-bind 'css=style-loader!css-loader'
=>
webpack.config.js

module.exports = {
    entry: "./a.js",
    output: {
        path: __dirname,
        filename: "a.min.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};

=>
wabpack

=>

webpack --progress --watch







