import { BasePage } from '../../../lib';
import { CombinesRowFragment } from './fragments/combines.row';

class CombinesPage extends BasePage {
  combineRow;
  constructor() {
    super('#combines_page', 'combines page page');
    this.combineRow = this.init('.dynamic_table_row', 'Combine row fragment', CombinesRowFragment);
  }
}

export { CombinesPage };
