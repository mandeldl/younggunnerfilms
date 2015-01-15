var gulp = require ('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-ruby-sass');
var plumber = require('gulp-plumber');
var connect = require('gulp-connect');

// SCRIPTS Task
// Minifies JS (after running plumber)
gulp.task('scripts', function(){
  gulp.src('js/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
    .pipe(connect.reload());
});

// STYLES Task
// Compiles Scss (after running plumber)
// Then reload server on change
gulp.task('styles', function(){
  gulp.src('style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest(''))
    .pipe(connect.reload());
});


// CONNECT Task
//launches server
gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

// HTML Task
// launches server on html change
gulp.task('html', function () {
  gulp.src('index.html')
    .pipe(connect.reload());
});


//WATCH Task
// Watches JS and CSS
gulp.task('watch', function () {
  gulp.watch('js/*.js', ['scripts']);
  gulp.watch('css/**/*.scss', ['styles']);
  gulp.watch(['index.html'], ['html']);
  //gulp.watch(['./**/*.jade'], ['jade']);
});

gulp.task('default', ['scripts', 'watch', 'connect']);