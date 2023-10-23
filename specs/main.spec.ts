import { provider } from '../project';
import { $ } from '../lib';
const { main } = provider;

const { I, browser } = provider.actor;

describe('Main page suite', async () => {
  it('[P] login', async () => {
    await browser.get('http://localhost:4000');
    await I.onMainPageSetValuesToLoginFragment({ username: 'admin', password: 'admin' });
    await I.onMainPagePerformOnLoginFragment({ loginButton: 'click' });
    await I.onTablePagePerformOnTablesHeader({ analytics: 'click' });

    await browser.sleep(2000);
  });
});
