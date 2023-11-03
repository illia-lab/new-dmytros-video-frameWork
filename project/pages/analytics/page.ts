import { BasePage } from '../../../lib';
import { AnalyticsFieldsFragment } from './fragments/analytics.fields';

class AnalyticsPage extends BasePage {
  analyticStats: AnalyticsFieldsFragment;
  constructor() {
    super('#analytics_page', 'Analytic page');

    this.analyticStats = this.init('.analytics_information', 'Analytics info stats', AnalyticsFieldsFragment);
  }
}

export { AnalyticsPage };
