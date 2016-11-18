import { AngularcmsCliPage } from './app.po';

describe('angularcms-cli App', function() {
  let page: AngularcmsCliPage;

  beforeEach(() => {
    page = new AngularcmsCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
