const mix = require("laravel-mix")

require("dotenv").config()

mix
  .js("resources/js/app.js", "public/js")
  .react()
  .sass("resources/sass/app.scss", "public/css")
  .disableSuccessNotifications()
  .browserSync("http://127.0.0.1:8000/")
