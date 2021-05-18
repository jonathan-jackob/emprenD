const mix = require("laravel-mix")

require("dotenv").config()

mix.js("resources/js/app.js", "public/js").react().disableSuccessNotifications()
// .sass("resources/sass/app.scss", "public/css")
