import { @activityPage } from './app.po';

describe('@activity App', function() {
  let page: @activityPage;

  beforeEach(() => {
    page = new @activityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
