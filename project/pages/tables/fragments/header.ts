import { BaseFragment } from '../../../../lib';
import { Button } from '../../../../lib';

class HeaderFragment extends BaseFragment {
  analytics;
  combines;
  adminPanel;
  LogOut;

  constructor(root, id) {
    super(root, id);

    this.analytics = this.init('xpath=//button[text()="До аналітики"]', 'Analytics', Button);
    this.combines = this.init('xpath=//button[text()="До комбайнів"]', 'Combines', Button);
    this.adminPanel = this.init('xpath=//button[text()="До адмін кабінету"]', 'To admin office', Button);
    this.LogOut = this.init('button.logout', 'Log out', Button);
  }
}

export { HeaderFragment };
