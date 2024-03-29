import { MainPage } from './pages/main/page';
import { I } from './actor';
import { browser } from '../lib';
import { getPreparedRunner } from 'promod-system';

const users = {
  admin: { username: 'admin', password: 'admin' },
};

const fixtures = {
  I,
  browser,
  users
};

const provider = {
  get actor() {
    return { I, browser };
  },
  get main() {
    return new MainPage();
  },
  get testRunner() {
    return getPreparedRunner<typeof fixtures>(fixtures);
  },
};

export { provider };
