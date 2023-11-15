import { BaseFragment } from '../../../../lib';
import { Text } from '../../../../lib';

class AnalyticsFieldsFragment extends BaseFragment {
  machinesQuantity;
  workVolumeStats;
  priceStats;

  constructor(root, id) {
    super(root, id);
    this.machinesQuantity = this.init('.analytics_info_field.alert.alert-primary.quantity', 'Machines Quantity', Text);
    this.workVolumeStats = this.init(
      '.analytics_info_field.alert.alert-primary.work_volume',
      'Work Volume Stats ',
      Text,
    );
    this.priceStats = this.init('.analytics_info_field.alert.alert-primary.price', 'Price Stats', Text);
  }
}

export { AnalyticsFieldsFragment };
