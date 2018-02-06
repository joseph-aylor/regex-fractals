import { RegexFractalsPage } from './app.po';

describe('regex-fractals App', () => {
  let page: RegexFractalsPage;

  beforeEach(() => {
    page = new RegexFractalsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
