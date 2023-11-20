import { BaseFragment } from '../../../../lib';
import { Button, Input } from '../../../../lib';

class FilterFragment extends BaseFragment {
  filterManufacturer;
  filterWorkVolume;
  filterPrice;
  filterButton;

  constructor(root, id) {
    super(root, id);
    this.filterManufacturer = this.init('[placeholder="Виробник"]', 'filter manufacturer', Input);
    this.filterWorkVolume = this.init(`[placeholder="Робочий об'єм"]`, 'filter work volume', Input);
    this.filterPrice = this.init('[placeholder="Ціна"]', 'filter price', Input);
    this.filterButton = this.init('xpath=//*[@id="table_page"]/button', 'filter Button', Button);
  }
}

export { FilterFragment };
