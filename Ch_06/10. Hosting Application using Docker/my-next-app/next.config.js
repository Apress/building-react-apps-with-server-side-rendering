const withCSS = require('@zeit/next-css')

require('dotenv').config();
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = withCSS({
    webpack(config, options){
        config.plugins = config.plugins || [];
        config.plugins = [
            ...config.plugins,
            new Dotenv({
                path: path.join(__dirname, '.env'),
                systemvars: true
            })
        ]
        return config;
    }
})