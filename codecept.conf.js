exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://127.0.0.1:8000/',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_test'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {},
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'gesc'
}