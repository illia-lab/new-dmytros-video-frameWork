// import { browser } from '../lib';
// import { I } from '../project/actor';

// describe('check That Functional in navigation button work as it should be', async () => {
//   it('test case [P]', async () => {
//     I.onMainPageSetValuesToLoginFragment({ username: 'admin', password: 'admin' })
//       .onMainPagePerformOnLoginFragment({
//         loginButton: null,
//       })
//       .onTablePagePerformOnTablesHeader({ adminPanel: null })
//       .onAdminPagePerformOnAdminPageButtons({ addNewUser: 'click' });
//     const result = await I.onAdminPageGetVisibilityOfAddNewUserForm({
//       username: null,
//       password: null,
//       email: null,
//       name: null,
//       addButton: null,
//     });
//     console.log(result);

//     await browser.sleep(2000);
//   });

//   it('test case [P]', async () => {
//     I.onMainPageSetValuesToLoginFragment({ username: 'admin', password: 'admin' })
//       .onMainPagePerformOnLoginFragment({
//         loginButton: null,
//       })
//       .onTablePagePerformOnTablesHeader({ adminPanel: null })
//       .onAdminPagePerformOnAdminPageButtons({ userList: 'click' });
//     const result = await I.onAdminPageGetVisibilityOfUserListRow({ usernameItem: null });
//     console.log(result);

//     await browser.sleep(2000);
//   });
// });
