'use strict';
var paths = require('./paths');

module.exports = function(config) {
  config.set({
    files: paths.karma,
    preprocessors: {
      'app/**/!(*spec).js': ['coverage']
    },
    reporters: ['dots', 'coverage'], //spec
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },
    autoWatch: true,
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    plugins: [
      'karma-jasmine',
      'karma-spec-reporter',
      'karma-coverage',
      'karma-phantomjs-launcher'
    ]
  });
};
