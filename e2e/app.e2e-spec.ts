import { DaabPage } from './app.po';

describe('daab App', () => {
  let page: DaabPage;

  beforeEach(() => {
    page = new DaabPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
