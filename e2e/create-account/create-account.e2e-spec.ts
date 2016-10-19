import { CreateAccountPage } from './create-account.po';

describe('Create event view', function() {
  let page: CreateAccountPage;

  beforeEach(() => {
    page = new CreateAccountPage();
  });

  it('should display message saying create an account', () => {
    page.navigateTo();
    expect(page.getCreateAccountText()).toEqual('Create an account');
  });

  it('should allow a user to create an account', () => {
    page.navigateTo();
    page.createUser();
    expect(page.getWelcomeText()).toEqual('Hey, Phil');
  });
});
