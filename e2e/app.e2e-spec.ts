import { MeetUpEventPlannerPage } from './app.po';

describe('meet-up-event-planner App', function() {
  let page: MeetUpEventPlannerPage;

  beforeEach(() => {
    page = new MeetUpEventPlannerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
