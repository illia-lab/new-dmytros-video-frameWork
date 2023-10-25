import * as mainPageActions from './pages/main/page.actions';
import * as tablePageActions from './pages/tables/page.actions';
import type { TChainableActions } from 'promod-system';
import { makePropertiesChainable } from 'chain-simple';

const _I = {
  ...mainPageActions,
  ...tablePageActions,
};

const I: TChainableActions<typeof _I> = makePropertiesChainable(_I);

export { I };
