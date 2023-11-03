import { browser, getDriver } from '../lib';

before(async () => {
  await getDriver(browser);
  await browser.get('http://localhost:4000/');
});

after(async () => {
  await browser.quitAll();
});
