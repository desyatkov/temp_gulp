var gulp = require('gulp'),
  gutil = require('gulp-util'),
  webserver = require('gulp-webserver'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  precss = require('precss'),
  cssnano = require('cssnano'),
  animation = require('postcss-animation'),
  source = 'process/css/',
  sourcejs = 'process/js/',
  dest = 'builds/postcss/',
  babel = require('gulp-babel');

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

gulp.task('script', function() {
    gulp.src(sourcejs + 'app.js')
        .pipe(babel({
            presets: ['es2015','stage-0']
        }))
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

gulp.task('default', ['html', 'css','script', 'webserver', 'watch']);
