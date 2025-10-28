module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
      'tests/**/*.spec.js'
    ],

    browsers: ['ChromeHeadless'],

    reporters: ['progress', 'coverage'],

    singleRun: true,

    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-webpack',
      'karma-coverage'
    ],

    preprocessors: {
      'tests/**/*.spec.js': ['webpack', 'coverage']
    },

    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          }
        ]
      }
    },

    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    }
  });
};
