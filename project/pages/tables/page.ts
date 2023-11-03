import { BasePage } from '../../../lib';
import { HeaderFragment } from './fragments/header';
import { MachineRowFragment } from './fragments/machine.row';
import { Collection } from '../../../lib/base/collection';
import { FilterFragment } from './fragments/filter';

class TablePage extends BasePage {
  header: HeaderFragment;
  machinesList: MachineRowFragment;
  filterFragment: FilterFragment;

  constructor() {
    super('#table_page', 'Table page');
    this.header = this.init('.header', 'Tables header', HeaderFragment);
    this.machinesList = this.init('.machines_list tbody tr', 'Machines list ', Collection, MachineRowFragment);
    this.filterFragment = this.init('.table.filtering', 'Filter fragment ', FilterFragment);
  }
}

export { TablePage };
