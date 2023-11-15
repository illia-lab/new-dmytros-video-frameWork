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
    this.username = this.init('[placeholder="Імʼя користувача"]', 'User name', Input);
    this.name = this.init('[placeholder="Імʼя"]', 'Name', Input);
    this.password = this.init('[placeholder="пароль"]', 'пароль ', Input);
    this.registerButton = this.init('button', 'Registration Button', Button);
    this.email = this.init('[placeholder="Імейл"]', 'email', Input);
  }
}

export { RegistrationFragment };
