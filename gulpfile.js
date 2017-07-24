var gulp       = require('gulp'),
  gutil        = require('gulp-util'),
  webserver    = require('gulp-webserver'),
  postcss      = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  precss       = require('precss'),
  cssnano      = require('cssnano'),
  animation    = require('postcss-animation'),
  babel        = require('gulp-babel'),
  browserify   = require('gulp-browserify'),
  oldie        = require('oldie'),
  uglify       = require('gulp-uglify'),
  source       = 'process/css/',
  sourcejs     = 'process/js/',
  dest         = 'builds/postcss/';

gulp.task('html', function() {
  gulp.src(dest + '*.html');
});

gulp.task('css', function() {
  gulp.src(source + 'style.css')
  .pipe(postcss([
    precss(),
    animation(),
    autoprefixer(),
    cssnano()
  ]))
  .on('error', gutil.log)
  .pipe(gulp.dest(dest + 'css'));
});

gulp.task('cssIE8', function() {
  gulp.src(source + 'style.css')
  .pipe(postcss([
    precss(),
    animation(),
    autoprefixer(),
    cssnano(),
    oldie()
  ]))
  .on('error', gutil.log)
  .pipe(gulp.dest(dest + 'cssOldie'));
});

gulp.task('script', function() {
    gulp.src(sourcejs + 'app.js')
        .pipe(browserify({
          insertGlobals : true
        }))
        .pipe(babel({
            presets: ['es2015','stage-0']
        }))
        .pipe(uglify())
        .pipe(gulp.dest(dest + 'js'));
});

gulp.task('watch', function() {
  gulp.watch(source + '**/*.css', ['css']);
  gulp.watch(dest + '**/*.html', ['html']);
  gulp.watch(sourcejs + '**/*.js', ['script']);
});

gulp.task('webserver', function() {
  gulp.src(dest)
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['html', 'css', 'cssIE8','script', 'webserver', 'watch']);
