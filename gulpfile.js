const gulp = require("gulp")
const sass = require("gulp-sass")
sass.compiler = require("sass")

gulp.task("sass", function () {
  return gulp
    .src("./resources/sass/app.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./public/css"))
})

gulp.task("sass:build", function () {
  return gulp
    .src("./resources/sass/app.scss")
    .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
    .pipe(gulp.dest("./public/css"))
})

exports.build = gulp.series("sass:build")
exports.dev = gulp.series("sass")
