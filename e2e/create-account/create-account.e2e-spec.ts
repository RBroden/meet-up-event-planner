import { CreateAccountPage } from './create-account.po';

describe('meet-up-event-planner App', function() {
  let page: CreateAccountPage;

  beforeEach(() => {
    page = new CreateAccountPage();
  });

  it('should display message saying create an account', () => {
    page.navigateTo();
    expect(page.getWelcomeText()).toEqual('Create an account');
  });
});
