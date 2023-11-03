import { I } from '../project/actor';
import { browser } from '../lib';

describe('check That Navigation buttons leads us to proper pages test suite', async () => {
  it.only('test case [P]', async () => {
    I.onMainPageSetValuesToLoginFragment({ username: 'admin', password: 'admin' })
      .onMainPagePerformOnLoginFragment({
        loginButton: null,
      })
      .onTablePagePerformOnTablesHeader({ analytics: 'click' });
    await browser.sleep(2000);
  });
});
