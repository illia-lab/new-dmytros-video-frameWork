import { BasePage } from '../../../lib';
import { HeaderFragment } from './fragments/header';
import { LoginFragment } from './fragments/login';

class MainPage extends BasePage {
  login;
  header;
  constructor() {
    super('[id="main_page"]', 'Main page');

    this.header = this.init('.main_header', 'Header Fragment', HeaderFragment);
    this.login = this.init('.login_form', 'Login Fragment ', LoginFragment);
  }
}

export { MainPage };
