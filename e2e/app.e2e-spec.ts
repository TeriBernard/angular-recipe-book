import { MYRECIPEAPPPage } from './app.po';

describe('my-recipe-app App', () => {
  let page: MYRECIPEAPPPage;

  beforeEach(() => {
    page = new MYRECIPEAPPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
