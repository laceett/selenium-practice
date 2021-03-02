# selenium-practice

**Reference:**
[How to Setup Selenium on Node Environment](https://dev.to/oyetoket/how-to-setup-selenium-on-node-environment-30bc)

## Getting Started
- Git clone the project
- Run `npm install`
- Run `npm start`

## How to run the test

#### Using Selenium Web Driver
**on Web Driver**
Run `node selenium_test.js`

#### Using Selenium Grid (Remote Testing)
**On BrowserStack**
- Sign up for [BrowserStack](https://www.browserstack.com/)
- Replace the `USERNAME` and `ACCESS_KEY` with your username and your access key
- Run  `node selenium_grid_test.js`

 **On Sauce Labs**
 - Sign up for [SauceLabs](https://saucelabs.com/)
 - Replace the `USERNAME` and `ACCESS_KEY` with your username and your access key
 - Replace the `withCapabilities`
     e.g.
     `.withCapabilities({
        'browserName': 'chrome',
        'browserVersion': 'latest',
        'platformName': 'macOS 11.2.1',
        'sauce:options': {
        },
      'username': username,
      'accessKey': accessKey
    })`
 - Run  `node selenium_grid_test.js`

#### Using Mocha (Test Runner) With Selenium
**Mocha**
Run `mocha mocha_test.js`

