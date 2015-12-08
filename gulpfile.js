// Include gulp
var gulp = require('gulp');

// Include plugins
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var compass = require('gulp-compass');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var babelify = require('babelify');
var notify = require('gulp-notify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var yargs = require('yargs');


// Compile Sass, run autoprefixer, and create sourcemaps
gulp.task('styles', function() {
  return gulp.src('styles/sass/**/*.{scss,sass}')
  .pipe(compass({
    css: 'styles',
    sass: 'styles/sass',
    require: ['susy', 'modular-scale']
  }))
  .on("error", notify.onError("Error: <%= error.message %>"))
  .pipe(autoprefixer({
    browsers: ['last 2 versions', 'ie >= 8'],
    cascade: false
  }))
  .pipe(sourcemaps.init())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('styles'))
  .pipe(browserSync.reload({
      stream: true
  }))
  .pipe(notify({ message: 'sass task complete' }));
});

// Browser Sync
gulp.task('browserSync', function() {
  browserSync.init({
    open: 'external',
    host: 'bam.dev',
    proxy: 'bam.dev',
    port: 3000 // port 80 is not accessible by anyone but root
  });
});

// Lint JS
gulp.task('lint', function() {
  return gulp.src('js/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(notify({ message: 'Linting complete' }));
});

// Browserify Scripts
// gulp.task('browserify', function() {
//   return browserify('js/script.js', { debug: false })
    // .transform(babelify)
    // .bundle()
    // Pass desired output filename to vinyl-source-stream
    // .pipe(source('app.js'))
    // Start piping stream to tasks!
    // .pipe(gulp.dest('js'));
// });

// Watch for changes
gulp.task('watch', ['browserSync'], function() {

  // Watch .scss files
  gulp.watch('styles/sass/**/*.{scss,sass}', ['styles']);

  // Watch .js files
  gulp.watch('js/*.js', ['lint']);
  // gulp.watch('js/*.js', ['browserify']);

  // Watch any files in public/, reload on change
  gulp.watch(['sass', 'js/*js', '*.php']).on('change', browserSync.reload);

});

// Default task
gulp.task('default', ['watch']);
