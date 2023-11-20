import { BaseFragment } from '../../../../lib';
import { Button } from '../../../../lib';

class AnalyticsHeaderFragment extends BaseFragment {
  machinesButton;
  combineButton;
  adminPanelButton;
	logOutButton;

  constructor(root, id) {
    super(root, id);
    this.machinesButton = this.init('xpath=//button[text()="До таблиць"]', 'Machines button', Button);
    this.combineButton = this.init('xpath=//button[text()="До комбайнів"]', 'Combines button', Button);
    this.adminPanelButton = this.init('xpath=//button[text()="До адмін кабінету"]', 'Admin panel button', Button);
    this.logOutButton = this.init('xpath=//button[text()="Вийти"]', 'Log out button', Button);
  }
}

export { AnalyticsHeaderFragment };
