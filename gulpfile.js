'use strict';
var appPaths = ['app/*.js'];
var testPaths = ['app/*.spec.js'];
var gulp = require('gulp');
var jslint = require('gulp-jslint');

gulp.task('default', function(){
  return gulp.src(appPaths.concat(testPaths))
    .pipe(jslint());
});
