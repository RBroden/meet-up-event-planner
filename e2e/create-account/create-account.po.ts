import { browser, element, by } from 'protractor/globals';

export class CreateAccountPage {
  navigateTo() {
    return browser.get('/create-account');
  }

  getWelcomeText() {
    return element(by.css('h4.card-title')).getText();
  }
}
