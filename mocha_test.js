const webdriver = require('selenium-webdriver');
const { until } = require('selenium-webdriver');
const { By } = require('selenium-webdriver');
const assert = require('assert');
const delay = (x,t) => new Promise(r => setTimeout(r, t, x));

it('webdriver', () => {
    let driver;
    before(async () => {
      driver = new webdriver.Builder().forBrowser('chrome')
      .build();

      await driver.get(`https://google.com`);
    }, 30000);

    after(async () => {
        await delay('lol', 1000);
    });

    it('test google search', async () => {

        await driver.findElement(webdriver.By.name('q')).sendKeys('webdriver\n')

        const title = await driver.getTitle()
        console.log(title)
        assert.equal(title, "webdriver - Google Search")
    }, 35000);
  });