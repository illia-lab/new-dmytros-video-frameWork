import { BaseFragment } from '../../../../lib';
import { Button } from '../../../../lib';

class HeaderFragment extends BaseFragment {
  analytics;
  combines;
  adminPanel;
  LogOut;

  constructor(root, id) {
    super(root, id);
    this.analytics = this.init('[href="/analytics"]', 'Analytics', Button);
    this.combines = this.init('[href="/combaines"]', 'Combines', Button);
    this.adminPanel = this.init('[href="/admin"]', 'Admin panel', Button);
    this.LogOut = this.init('button.logout', 'Log out', Button);
  }
}

export { HeaderFragment };
