import { BaseFragment } from '../../../../lib';
import { Button, Input } from '../../../../lib';

class LoginFragment extends BaseFragment {
  username;
  password;
  loginButton;
  constructor(root, id) {
    super(root, id);
    this.username = this.init('[placeholder="Імʼя користувача"]', 'User name', Input);
    this.password = this.init('[placeholder="пароль"]', 'Password ', Input);
    this.loginButton = this.init('button', 'Login button', Button);
  }
}

export { LoginFragment };
