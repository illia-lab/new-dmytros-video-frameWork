import { BaseFragment } from '../../../../lib';
import { Input, CheckBox, Text } from '../../../../lib';

class AdminUserFormFragment extends BaseFragment {
  username;
  name;
  password;
  email;
  makeAdminCheckBox;
  constructor(root, id) {
    super(root, id);
    this.username = this.init('xpath=//div[@class="form-group"][1]//input', 'username field ', Input);
    this.name = this.init('xpath=//div[@class="form-group"][2]/input', 'name field', Input);
    this.password = this.init('xpath=//div[@class="form-group"][3]/input', 'password field', Input);
    this.email = this.init('xpath=//div[@class="form-group"][4]/input', 'email field', Input);
    this.makeAdminCheckBox = this.init('[type=checkbox]', 'make user admin checkbox', CheckBox);
  }
}

export { AdminUserFormFragment };
