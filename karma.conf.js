'use strict';
var paths = require('./paths');

module.exports = function(config) {
  config.set({
    files: paths.karma,
    preprocessors: {
      'app/**/!(*spec).js': ['coverage']
    },
    reporters: [
      'spec',
      'coverage'
    ], //spec
    coverageReporter: [
      { type: 'html', dir: 'coverage/' },
      { type: 'text-summary' },
      { type: 'text' },
    ],
    autoWatch: true,
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    plugins: [
      'karma-jasmine',
      'karma-coverage',
      'karma-spec-reporter',
      'karma-story-reporter',
      'karma-phantomjs-launcher'
    ]
  });
};
