import { BaseFragment } from '../../../../lib';
import { Button, Input } from '../../../../lib';

class FilterFragment extends BaseFragment {
  filterManufacturer;
  filterWorkVolume;
  filterPrice;
  filterButton;

  constructor(root, id) {
    super(root, id);
    this.filterManufacturer = this.init('[placeholder="Manufacturer"]', 'filter manufacturer', Input);
    this.filterWorkVolume = this.init('[placeholder="Work volume"]', 'filter work volume', Input);
    this.filterPrice = this.init('[placeholder="Price"]', 'filter price', Input);
    this.filterButton = this.init('xpath=//*[@id="table_page"]/button', 'filter Button', Button);
  }
}

export { FilterFragment };
