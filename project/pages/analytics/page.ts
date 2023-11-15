import { BasePage } from '../../../lib';
import { AnalyticsFieldsFragment } from './fragments/analytics.fields';
import { AnalyticsHeaderFragment } from './fragments/header';

class AnalyticsPage extends BasePage {
  analyticStats;
  analyticsHeader;
  constructor() {
    super('#analytics_page', 'Analytic page');
    this.analyticsHeader = this.init('.header', 'Analaytics header', AnalyticsHeaderFragment);
    this.analyticStats = this.init('.analytics_information', 'Analytics info stats', AnalyticsFieldsFragment);
  }
}

export { AnalyticsPage };
