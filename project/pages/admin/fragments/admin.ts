import { BaseFragment } from '../../../../lib';
import { Button } from '../../../../lib';

class AdminFragment extends BaseFragment {
  userList;
  addNewUser;

  constructor(root, id) {
    super(root, id);
    this.addNewUser = this.init('xpath=//button[text()="Створити нового користувача"]', 'add new user button', Button);
    this.userList = this.init('xpath=//button[text()="Список користувачів"]', 'users list button', Button);
  }
}

export { AdminFragment };
