import { BaseFragment } from '../../../../lib';
import { Text } from '../../../../lib';

class CombinesRowFragment extends BaseFragment {
  manufacturer;
  class;
  height;
  weight;
  price;

  constructor(root, id) {
    super(root, id);
    this.manufacturer = this.init('div:nth-child(1)', 'manufacturer', Text);
    this.weight = this.init('div:nth-child(2)', 'weight', Text);
    this.height = this.init('div:nth-child(3)', 'height', Text);
    this.class = this.init('div:nth-child(4)', 'class', Text);
    this.price = this.init('div:nth-child(5)', 'price', Text);
  }
}

export { CombinesRowFragment };
