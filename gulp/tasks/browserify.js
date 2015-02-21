var paths = require('../paths');
var browserify = require('gulp-browserify');
var gulp = require('gulp');

module.exports = function(){
  return gulp.src(paths.app)
    .pipe(browserify({
      insertGlobals: true,
      debug: true
    }))
    .pipe(gulp.dest('./build/'));
};
