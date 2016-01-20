var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache');
var del = require('del');
var compass = require('gulp-compass');
var browserSync = require('browser-sync');

// Browser Sync
gulp.task('browser-sync', function() {
  browserSync.init({
    open: 'external',
    host: 'bam.dev',
    proxy: 'bam.dev',
    port: 3000 // port 80 is not accessible by anyone but root
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

// gulp.task('images', function(){
//   gulp.src('img/**/*')
//     .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
//     .pipe(gulp.dest('dist/img/'));
// });

gulp.task('styles', function(){
  gulp.src(['styles/**/*.{scss,sass}'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    // .pipe(sass())
    .pipe(compass({
    css: 'styles',
    sass: 'styles/sass',
    require: ['susy', 'modular-scale']
  }))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('styles/'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('scripts', function(){
  return gulp.src('js/app/*.js')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('vendor', function(){
  return gulp.src('js/vendor/*.js')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.reload({stream:true}))
});

// gulp.task('clean', function() {
//     return del(['styles', 'js']);
// });

gulp.task('default', ['browser-sync', 'styles', 'scripts', 'vendor'], function(){
  gulp.watch("styles/**/*.{scss,sass}", ['styles']);
  gulp.watch("js/app/*.js", ['scripts']);
  gulp.watch("js/vendor/*.js", ['vendor']);
  gulp.watch("*.html", ['bs-reload']);
  gulp.watch("*.php", ['bs-reload']);
});