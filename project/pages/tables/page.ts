import { BasePage } from '../../../lib';
import { HeaderFragment } from './fragments/header';
import { MachineRowFragment } from './fragments/machine.row';
import { Collection } from '../../../lib/base/collection';

class TablePage extends BasePage {
  header: HeaderFragment;
  machinesList: MachineRowFragment;

  constructor() {
    super('#table_page', 'Table page');
    this.header = this.init('.header', 'Tables header', HeaderFragment);
    this.machinesList = this.init('.machines_list tbody tr', 'Machines list ', Collection, MachineRowFragment);
  }
}

export { TablePage };
