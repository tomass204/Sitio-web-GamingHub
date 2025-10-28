module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'webpack'],

    files: [
      'tests/**/*.spec.js'
    ],

    preprocessors: {
      'tests/**/*.spec.js': ['webpack']
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

    browsers: ['ChromeHeadless'],

    reporters: ['progress', 'coverage'],

    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    singleRun: true,

    plugins: [
      'karma-jasmine',
      'karma-webpack',
      'karma-chrome-launcher',
      'karma-coverage'
    ]
  });
};
