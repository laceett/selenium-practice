const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var capabilities = {
 'browserName' : 'Chrome',
 'browser_version' : '81.0',
 'os' : 'Windows',
 'os_version' : '10',
 'resolution' : '1024x768',
 'browserstack.user' : 'laceexu1',
 'browserstack.key' : 'UkZsy5mr7dYuKcqyo8ph',
 'name' : 'Bstack-[Node] Sample Test'
}
var driver = new webdriver.Builder().
  usingServer('http://hub-cloud.browserstack.com/wd/hub').
  withCapabilities(capabilities).
  build();
driver.get('http://www.google.com').then(function(){
  driver.findElement(webdriver.By.name('q')).sendKeys('webdriver\n').then(function(){
    driver.getTitle().then(function(title) {
      console.log(title);
      if(title === 'webdriver - Google Search') {
         console.log('Test passed');
      } else {
         console.log('Test failed');
      }      
      driver.quit();
    });
  });
});