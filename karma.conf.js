module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
      'tests/**/*.spec.js'
    ],

    browsers: ['ChromeHeadless'],

    reporters: ['progress'],

    singleRun: true,

    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher'
    ]
  });
};
