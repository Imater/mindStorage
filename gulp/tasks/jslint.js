var paths = require('../paths');
var jslint = require('gulp-jslint');
var gulp = require('gulp');

module.exports = function(){
  return gulp.src(paths.app.concat(paths.test))
    .pipe(jslint());
};
