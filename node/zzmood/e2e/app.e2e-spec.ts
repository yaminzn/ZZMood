import { ZzmoodPage } from './app.po';

describe('zzmood App', () => {
  let page: ZzmoodPage;

  beforeEach(() => {
    page = new ZzmoodPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
