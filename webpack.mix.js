let mix = require('laravel-mix');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css');
mix.js('resources/assets/js/chat/client.js', 'public/js/chat');
mix.js('resources/assets/js/login/login.js', 'public/js/login');
mix.webpackConfig({
    plugins: [
        new BrowserSyncPlugin(
            {
                host: '192.168.10.10',
                port: 3000,
                proxy: 'http://laravel-chat.test',
                files: [
                    './**/*.css',
                    './app/**/*',
                    './config/**/*',
                    './resources/views/**/*',
                    './routes/**/*'
                ],
                watchOptions: {
                    usePolling: true,
                    interval: 500
                },
                open: false
            },
            {
                reload: false
            }
        )
    ]
})