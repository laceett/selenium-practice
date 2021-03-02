const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    username = "laceett",
    accessKey = "7d8e8357-ebdc-43c1-83fa-861f3096e4ff";
let driver = new webdriver.Builder()
    .withCapabilities({
        'browserName': 'chrome',
        'browserVersion': 'latest',
        'platformName': 'macOS 11.2.1',
        'sauce:options': {
        },
      'username': username,
      'accessKey': accessKey
    })
    .usingServer("https://" + username + ":" + accessKey +
          "@ondemand.us-west-1.saucelabs.com:443/wd/hub")
    .build();
driver.get('http://www.google.com');
driver.findElement(By.name('q')).sendKeys('webdriver');
driver.sleep(1000).then(function() {
  driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB);
});
driver.findElement(By.name('btnK')).click();
driver.sleep(2000).then(function() {
  driver.getTitle().then(function(title) {
    console.log(title);
    if(title === 'webdriver - Google Search') {
      console.log('Test passed');
    } else {
      console.log('Test failed');
    }
  });
});
driver.quit();