import { BaseFragment } from '../../../../lib';
import { Input, Button, CheckBox } from '../../../../lib';

class AddNewUserFragment extends BaseFragment {
  username;
  name;
  password;
  email;
  addButton;
  makeAdminCheckBox;
  constructor(root, id) {
    super(root, id);
    this.username = this.init(`[placeholder="Ім'я користувача"]`, 'username field ', Input);
    this.name = this.init(`[placeholder="Ім'я"]`, 'name field', Input);
    this.password = this.init('[placeholder="Пароль"]', 'password field', Input);
    this.email = this.init('[placeholder="імейл"]', 'email field', Input);
    this.addButton = this.init('//button[text()="Створити нового користувача"]', 'add new user button', Button);
    this.makeAdminCheckBox = this.init('[type=checkbox]', 'make user admin checkbox', CheckBox);
  }
}

export { AddNewUserFragment };
