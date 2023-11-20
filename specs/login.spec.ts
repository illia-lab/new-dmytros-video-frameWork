import { I } from '../project/actor';
import { browser, $, $$, getDriver } from '../lib';
import { isUndefined, isNull } from 'sat-utils';

const alertMessage = $('.alert alert-danger');
const tablePage = $('#table_page');

describe('check That Login Is Working as admin test suite', async () => {
  it.only('login test [P]', async () => {
    I.onMainPageSetValuesToLoginFragment({ username: 'admin', password: 'admin' }).onMainPagePerformOnLoginFragment({
      loginButton: null,
		});
		await browser.sleep(2000)
  });
  it('login test [N]', async () => {
    I.onMainPageSetValuesToLoginFragment({
      username: 'admin1111',
      password: 'admin111',
    }).onMainPagePerformOnLoginFragment({ loginButton: null });
    if (alertMessage.isDisplayed()) {
      console.error('test is succefully failed');
    }
  });
  it('login test [N]', async () => {
    I.onMainPageSetValuesToLoginFragment({ username: 'admin1111', password: 'admin' }).onMainPagePerformOnLoginFragment(
      { loginButton: null },
    );
    if (alertMessage.isDisplayed()) {
      console.error('test is succefully failed');
    }
  });
  it('login test [N]', async () => {
    I.onMainPageSetValuesToLoginFragment({ username: 'admin', password: 'admin1111' }).onMainPagePerformOnLoginFragment(
      { loginButton: null },
    );
    if (alertMessage.isDisplayed()) {
      console.error('test is succefully failed');
    }
  });
  it('login test [N]', async () => {
    I.onMainPageSetValuesToLoginFragment({ username: 'admin', password: 'admin1111' }).onMainPagePerformOnLoginFragment(
      { loginButton: null },
    );
    if (alertMessage.isDisplayed()) {
      console.error('test is succefully failed');
    }
  });
  it('login test [N]', async () => {
    I.onMainPageSetValuesToLoginFragment({ username: '', password: '' }).onMainPagePerformOnLoginFragment({
      loginButton: null,
    });
    if (alertMessage.isDisplayed()) {
      console.error('test is succefully failed');
    }
  });
  it('login test [N]', async () => {
    I.onMainPageSetValuesToLoginFragment({ username: 'admin', password: '' }).onMainPagePerformOnLoginFragment({
      loginButton: null,
    });
    if (alertMessage.isDisplayed()) {
      console.error('test is succefully failed');
    }
  });
  it('login test [N]', async () => {
    I.onMainPageSetValuesToLoginFragment({ username: '', password: 'admin' }).onMainPagePerformOnLoginFragment({
      loginButton: null,
    });
    if (alertMessage.isDisplayed()) {
      console.error('test is succefully failed');
    }
  });
});

describe('check That Login Is Working as user test suite', () => {
  it('login test [P]', async () => {
    I.onMainPageSetValuesToLoginFragment({ username: 'user', password: 'user' }).onMainPagePerformOnLoginFragment({
      loginButton: 'click',
    });
  });
  it('login test [N]', async () => {
    I.onMainPageSetValuesToLoginFragment({ username: 'user1', password: 'user1' }).onMainPagePerformOnLoginFragment({
      loginButton: 'click',
    });
    if (alertMessage.isDisplayed()) {
      console.error('test is succefully failed');
    }
  });
  it('login test [N]', async () => {
    I.onMainPageSetValuesToLoginFragment({ username: 'user1', password: 'user' }).onMainPagePerformOnLoginFragment({
      loginButton: 'click',
    });
    if (alertMessage.isDisplayed()) {
      console.error('test is succefully failed');
    }
  });
  it('login test [N]', async () => {
    I.onMainPageSetValuesToLoginFragment({ username: 'user', password: 'user1' }).onMainPagePerformOnLoginFragment({
      loginButton: 'click',
    });
    if (alertMessage.isDisplayed()) {
      console.error('test is succefully failed');
    }
  });
  it('login test [N]', async () => {
    I.onMainPageSetValuesToLoginFragment({ username: '', password: '' }).onMainPagePerformOnLoginFragment({
      loginButton: 'click',
    });
    if (alertMessage.isDisplayed()) {
      console.error('test is succefully failed');
    }
  });
  it('login test [N]', async () => {
    I.onMainPageSetValuesToLoginFragment({ username: 'user', password: '' }).onMainPagePerformOnLoginFragment({
      loginButton: 'click',
    });
    if (alertMessage.isDisplayed()) {
      console.error('test is succefully failed');
    }
  });
  it('login test [N]', async () => {
    I.onMainPageSetValuesToLoginFragment({ username: '', password: 'user' }).onMainPagePerformOnLoginFragment({
      loginButton: 'click',
    });
    if (alertMessage.isDisplayed()) {
      console.error('test is succefully failed');
    }
  });
});

