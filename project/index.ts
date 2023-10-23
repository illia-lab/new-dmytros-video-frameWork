import { MainPage } from './pages/main/page';
import { I } from './actor';
import { browser } from '../lib';

const provider = {
  get actor() {
    return { I, browser };
  },
  get main() {
    return new MainPage();
  },
};

export { provider };