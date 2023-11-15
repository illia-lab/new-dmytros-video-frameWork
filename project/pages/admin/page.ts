import { BasePage } from '../../../lib';
import { AdminFragment } from './fragments/admin';
import { UserListFragment } from './fragments/user.list';
import { AddNewUserFragment } from './fragments/add.user';
import { Collection } from '../../../lib';
import { AdminUserFormFragment } from './fragments/admin.form';

class AdminPage extends BasePage {
  adminButtons;
  userList;
  addNewUser;
  adminUserForm;
  constructor() {
    super('#admin_page', 'admin page');
    this.adminButtons = this.init('.view_toggler', 'admin page buttons', AdminFragment);
    this.userList = this.init('.user_item', 'user list row', Collection, UserListFragment);
    this.addNewUser = this.init('.admin_user_form', 'add new user form', AddNewUserFragment);
    this.adminUserForm = this.init('.admin_user_form', 'admin user form', AdminUserFormFragment);
  }
}

export { AdminPage };
