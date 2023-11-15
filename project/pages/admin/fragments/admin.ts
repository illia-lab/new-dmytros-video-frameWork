import { BaseFragment } from '../../../../lib';
import { Button } from '../../../../lib';

class AdminFragment extends BaseFragment {
  userList;
  addNewUser;

  constructor(root, id) {
    super(root, id);
    this.addNewUser = this.init('xpath=//button[text()="Add new user"]', 'add new user button', Button);
    this.userList = this.init('xpath=//button[text()="Users list"]', 'users list button', Button);
  }
}

export { AdminFragment };
