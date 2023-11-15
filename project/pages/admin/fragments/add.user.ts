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
    this.username = this.init('[placeholder="User name"]', 'username field ', Input);
    this.name = this.init('[placeholder="Name"]', 'name field', Input);
    this.password = this.init('[placeholder="Password"]', 'password field', Input);
    this.email = this.init('[placeholder="Email"]', 'email field', Input);
    this.addButton = this.init('//button[text()="Add new user"]', 'add new user button', Button);
    this.makeAdminCheckBox = this.init('[type=checkbox]', 'make user admin checkbox', CheckBox);
  }
}

export { AddNewUserFragment };
