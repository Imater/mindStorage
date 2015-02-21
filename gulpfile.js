'use strict';
var gulp = require('./gulp')([
  'jslint',
  'browserify'
]);

gulp.task('default', ['browserify']);

gulp.task('jslint', ['jslint']);
