import { MaterialMenu2Page } from './app.po';

describe('material-menu2 App', () => {
  let page: MaterialMenu2Page;

  beforeEach(() => {
    page = new MaterialMenu2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
