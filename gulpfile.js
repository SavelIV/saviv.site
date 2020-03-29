const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()

function style() {
  return gulp
    .src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.stream())
}

function watch() {
  browserSync.init({
    proxy: "saviv",
    notify: false
  })
  gulp.watch('./scss/**/*.scss', style)
  gulp.watch('./*.html').on('change', browserSync.reload)
  gulp.watch('./assets/js/*.js').on('change', browserSync.reload)
  gulp.watch('./assets/php/*.php').on('change', browserSync.reload)
}

exports.style = style
exports.watch = watch
