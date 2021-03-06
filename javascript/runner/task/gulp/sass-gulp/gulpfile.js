var del         = require('del');
var gulp        = require('gulp');
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');

var config = {
  src: './src',
  dist: './css'
};

gulp.task('clean:css', function(cb) {
    del([
      config.dist
    ], cb);
});

gulp.task('clean', ['clean:css']);

gulp.task('build:css', function() {
  return gulp.src(config.src+'/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dist));
});

gulp.task('default', ['clean:css', 'build:css']);
