import { BasePage } from '../../../lib';
import { HeaderFragment } from './fragments/header';
import { LoginFragment } from './fragments/login';
import { RegistrationFragment } from './fragments/registration';
import { Button } from '../../../lib';

class MainPage extends BasePage {
  login;
  header;
  registration;
  chat;
  constructor() {
    super('#main_page', 'Main page');

    this.header = this.init('.main_header', 'Header Fragment', HeaderFragment);
    this.login = this.init('.login_form', 'Login Fragment ', LoginFragment);
    this.chat = this.init('//button[text()="Надіслати відгук"]', 'Chat Button', Button);
    this.registration = this.init('.registration_form', 'Registration Fragment', RegistrationFragment);
  }
}

export { MainPage };
