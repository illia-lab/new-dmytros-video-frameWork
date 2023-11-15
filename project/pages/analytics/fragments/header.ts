import { BaseFragment } from '../../../../lib';
import { Button } from '../../../../lib';

class AnalyticsHeaderFragment extends BaseFragment {
  machinesButton;
  combineButton;
  adminPanelButton;
	logOutButton;

  constructor(root, id) {
    super(root, id);
    this.machinesButton = this.init('xpath=//button[text()="Machines"]', 'Machines button', Button);
    this.combineButton = this.init('xpath=//button[text()="Combines"]', 'Combines button', Button);
    this.adminPanelButton = this.init('xpath=//button[text()="Admin panel"]', 'Admin panel button', Button);
    this.logOutButton = this.init('xpath=//button[text()="Logout"]', 'Log out button', Button);
  }
}

export { AnalyticsHeaderFragment };
