// import { I } from '../project/actor';
// import { browser, $, $$, getDriver } from '../lib';
// import { isUndefined, isNull } from 'sat-utils';

// const alertMessage = $('.alert alert-danger');
// const tablePage = $('#table_page');

// describe('check That Registration is Working test suite', () => {
//   it('Registration test 1 [P]', async () => {
//     await I.onMainPagePerformOnHeaderFragment({ register: 'click' });
//     await I.onMainPageSetValuesToRegistrationFragment({
//       username: 'test',
//       password: 'test',
//       email: 'test',
//       name: 'test',
//     });
//     await I.onMainPagePerformOnRegistrationFragment({ registerButton: 'click' }).onTablePagePerformOnTablesHeader({
//       LogOut: 'click',
//     });
//     await browser.sleep(2000);
//   });
//   it('Registration test 2 [N]', async () => {
//     await I.onMainPagePerformOnHeaderFragment({ register: 'click' });
//     await I.onMainPageSetValuesToRegistrationFragment({
//       username: 'test',
//       password: '',
//       email: '',
//       name: '',
//     });
//     await I.onMainPagePerformOnRegistrationFragment({ registerButton: 'click' });
//     if (alertMessage.isDisplayed()) {
//       await browser.refresh();
//     }
//     await browser.sleep(2000);
//   });

//   it('Registration test 3 [N]', async () => {
//     await I.onMainPagePerformOnHeaderFragment({ register: 'click' });
//     await I.onMainPageSetValuesToRegistrationFragment({
//       username: '',
//       password: 'test',
//       email: '',
//       name: '',
//     });
//     await I.onMainPagePerformOnRegistrationFragment({ registerButton: 'click' });
//     if (alertMessage.isDisplayed()) {
//       await browser.refresh();
//     }
//   });
//   it('Registration test 4 [N]', async () => {
//     await I.onMainPagePerformOnHeaderFragment({ register: 'click' });
//     await I.onMainPageSetValuesToRegistrationFragment({
//       username: '',
//       password: '',
//       email: 'test',
//       name: '',
//     });
//     await I.onMainPagePerformOnRegistrationFragment({ registerButton: 'click' });
//     if (alertMessage.isDisplayed()) {
//       await browser.refresh();
//     }
//   });
//   it('Registration test 5 [N]', async () => {
//     await I.onMainPagePerformOnHeaderFragment({ register: 'click' });
//     await I.onMainPageSetValuesToRegistrationFragment({
//       username: '',
//       password: '',
//       email: '',
//       name: 'test',
//     });
//     await I.onMainPagePerformOnRegistrationFragment({ registerButton: 'click' });
//     if (alertMessage.isDisplayed()) {
//       await browser.refresh();
//     }
//   });
//   it('Registration test 6 [N]', async () => {
//     await I.onMainPagePerformOnHeaderFragment({ register: 'click' });
//     await I.onMainPageSetValuesToRegistrationFragment({
//       username: '',
//       password: 'test',
//       email: 'test',
//       name: 'test',
//     });
//     await I.onMainPagePerformOnRegistrationFragment({ registerButton: 'click' });
//     if (alertMessage.isDisplayed()) {
//       await browser.refresh();
//     }
//   });
//   it('Registration test 7 [N]', async () => {
//     await I.onMainPagePerformOnHeaderFragment({ register: 'click' });
//     await I.onMainPageSetValuesToRegistrationFragment({
//       username: 'test',
//       password: '',
//       email: 'test',
//       name: 'test',
//     });
//     await browser.sleep(2000);
//     await I.onMainPagePerformOnRegistrationFragment({ registerButton: 'click' });
//     if (alertMessage.isDisplayed()) {
//       await browser.refresh();
//     }
//     await browser.sleep(2000);
//   });
//   it('Registration test 8 [N]', async () => {
//     await I.onMainPagePerformOnHeaderFragment({ register: 'click' });
//     await I.onMainPageSetValuesToRegistrationFragment({
//       username: 'test',
//       password: 'test',
//       email: '',
//       name: 'test',
//     });
//     await I.onMainPagePerformOnRegistrationFragment({ registerButton: 'click' });
//     if (alertMessage.isDisplayed()) {
//       await browser.refresh();
//     }
//   });
//   it('Registration test 9 [N]', async () => {
//     await I.onMainPagePerformOnHeaderFragment({ register: 'click' });
//     await I.onMainPageSetValuesToRegistrationFragment({
//       username: 'test',
//       password: 'test',
//       email: 'test',
//       name: '',
//     });
//     await I.onMainPagePerformOnRegistrationFragment({ registerButton: 'click' });
//     if (alertMessage.isDisplayed()) {
//       await browser.refresh();
//     }
//   });
//   it('Registration test 10 [N]', async () => {
//     await I.onMainPagePerformOnHeaderFragment({ register: 'click' });

//     await I.onMainPageSetValuesToRegistrationFragment({
//       username: '',
//       password: '',
//       email: '',
//       name: '',
//     });
//     await I.onMainPagePerformOnRegistrationFragment({ registerButton: 'click' });
//     if (alertMessage.isDisplayed()) {
//       await browser.refresh();
//     }
//   });
// });
