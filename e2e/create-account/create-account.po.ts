import { browser, element, by } from 'protractor/globals';

export class CreateAccountPage {
  navigateTo() {
    return browser.get('/create-account');
  }

  getCreateAccountText() {
    return element(by.css('h4.card-title')).getText();
  }

  getWelcomeText() {
    return element(by.css('h1')).getText();
  }

  getFirstNameInput() {
    return element(by.id('fname'));
  }

  getLastNameInput() {
    return element(by.id('lname'));
  }

  getEmailInput() {
    return element(by.id('email'));
  }

  getPasswordInput() {
    return element(by.id('password'));
  }

  getVerifyPasswordInput() {
    return element(by.id('verifyPassword'));
  }

  getBioInput() {
    return element(by.id('bio'));
  }

  getCreateAccountButton() {
    return element(by.id('createAccount'));
  }

  createUser() {
    this.getFirstNameInput().sendKeys('Phil');
    this.getLastNameInput().sendKeys('Merrell');
    this.getEmailInput().sendKeys('philbot5000@gmail.com');
    this.getPasswordInput().sendKeys('Abcdef1!');
    this.getVerifyPasswordInput().sendKeys('Abcdef1!');
    this.getBioInput().sendKeys('This is a biography');
    this.getCreateAccountButton().click();

  }

}
