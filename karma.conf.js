'use strict';
var paths = require('./gulp/paths');

module.exports = function(config) {
  config.set({
    files: ['./app/index.js', './app/**/*.spec.js'],
    exclude: ['*.spec.js'],
    frameworks: ['browserify', 'jasmine'],
    preprocessors: {
       'app/**/!(*.spec)+(.js)': ['coverage', 'browserify'],
       'app/**/*.js': ['browserify']
    },
    reporters: [
      'coverage',
      'spec'
    ], //spec
    coverageReporter1: [
      { type: 'html', dir: 'coverage/' }
    ],
    autoWatch: true,
    browsers: ['PhantomJS'],
    browserify: {
      debug: true,
      transform: ['browserify-istanbul'],
      bundleDelay: 0
    },
    plugins: [
      'karma-jasmine',
      'karma-coverage',
      'karma-spec-reporter',
      'karma-story-reporter',
      'karma-phantomjs-launcher',
      'karma-browserify',
      'browserify-istanbul',
      'browserify-shim'
    ]
  });
};
