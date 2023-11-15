import * as mainPageActions from './pages/main/page.actions';
import * as tablePageActions from './pages/tables/page.actions';
import * as analyticsPageActions from '../project/pages/analytics/page.actions';
import * as combinesPageActions from '../project/pages/comnines/page.actions';
import * as adminPageActions from '../project/pages/admin/page.actions';
import type { TChainableActions } from 'promod-system';
import { makePropertiesChainable } from 'chain-simple';

const _I = {
  ...mainPageActions,
  ...tablePageActions,
  ...analyticsPageActions,
  ...combinesPageActions,
  ...adminPageActions,
};

const I: TChainableActions<typeof _I> = makePropertiesChainable(_I);

export { I };
