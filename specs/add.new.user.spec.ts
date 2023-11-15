import { browser } from '../lib';
import { I } from '../project/actor';
import { $ } from '../lib';
import { expect } from 'chai';

describe('check That Functional in navigation button work as it should be', async () => {
  it('test case [P]', async () => {
    await I.onMainPageSetValuesToLoginFragment({
      username: 'admin',
      password: 'admin',
    })
      .onMainPagePerformOnLoginFragment({
        loginButton: null,
      })
      .onTablePagePerformOnTablesHeader({ adminPanel: null })
      .onAdminPagePerformOnAdminPageButtons({ addNewUser: null })
      .onAdminPageSetValuesToAddNewUserForm({ username: 'test', password: 'test', email: 'test', name: 'test' })
      .onAdminPagePerformOnAddNewUserForm({ makeAdminCheckBox: 'click' })
      .onAdminPageWaitForContentStateAddNewUserForm({
        makeAdminCheckBox: true,
      });

    await I.onAdminPagePerformOnAddNewUserForm({ addButton: 'click' }).onAdminPagePerformOnAdminPageButtons({
      userList: 'click',
    });
    const result = await I.onAdminPageGetDataFromUserListRow({
      _indexes: 3,
      _action: { usernameItem: null },
    });

    expect(result).to.deep.equal([{ usernameItem: 'test' }]);
    console.log(result);
    await browser.sleep(2000);
  });
  it('test case [P]', async () => {
    await I.onMainPageSetValuesToLoginFragment({
      username: 'admin',
      password: 'admin',
    })
      .onMainPagePerformOnLoginFragment({
        loginButton: null,
      })
      .onTablePagePerformOnTablesHeader({ adminPanel: null })
      .onAdminPagePerformOnAdminPageButtons({ addNewUser: null })
      .onAdminPageSetValuesToAddNewUserForm({ username: 'test', password: 'test', email: 'test', name: 'test' })
      .onAdminPagePerformOnAddNewUserForm({ makeAdminCheckBox: 'click' })
      .onAdminPageWaitForContentStateAddNewUserForm({
        makeAdminCheckBox: true,
      });

    await I.onAdminPagePerformOnAddNewUserForm({ addButton: 'click' })
      .onAdminPagePerformOnAdminPageButtons({
        userList: 'click',
      })
      .onAdminPagePerformOnUserListRow({ _indexes: 1, _action: { detailsButton: 'click' } });
    const res = await I.onAdminPageGetDataFromAdminUserForm({ username: null });
    console.log(res);

    expect(res).to.deep.include({ username: { text: '', placeholder: 'user' } });
    await browser.sleep(2000);
  });
});
