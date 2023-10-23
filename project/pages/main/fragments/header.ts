import { BaseFragment } from '../../../../lib';
import { Button } from '../../../../lib';

class HeaderFragment extends BaseFragment {
  register;
  login;

  constructor(root, id) {
    super(root, id);

    this.register = this.init('.user_buttons button:nth-child(2)', 'Register button', Button);
    this.login = this.init('.user_buttons button:nth-child(1)', 'Login button', Button);
  }
}

export { HeaderFragment };
