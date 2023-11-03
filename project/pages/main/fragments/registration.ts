import { BaseFragment } from '../../../../lib';
import { Button, Input } from '../../../../lib';

class RegistrationFragment extends BaseFragment {
	username;
	name;
  password;
  registerButton;
  email;
  constructor(root, id) {
    super(root, id);
    this.username = this.init('[placeholder="User name"]', 'User name', Input);
    this.name = this.init('[placeholder="Name"]', 'Name', Input);
    this.password = this.init('[placeholder="Password"]', 'Password ', Input);
    this.registerButton = this.init('button', 'Registration Button', Button);
    this.email = this.init('[placeholder="Email"]', 'email', Input);
  }
}

export { RegistrationFragment };
