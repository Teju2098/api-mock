module.exports = {
    default: {
      require: [
        'features/step-definitions/**/*.js',
        'features/support/**/*.js'
      ],
      format: [
        'progress',
        'allure-cucumberjs/reporter'
      ],
      parallel: 1,
      requireModule: [],
      formatOptions: {
         targetDirectory: 'allure-results'
      },
      // paths: ['features/**/*.feature']
    }
  };