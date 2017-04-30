import { AngularMod9Page } from './app.po';

describe('angular-mod9 App', () => {
  let page: AngularMod9Page;

  beforeEach(() => {
    page = new AngularMod9Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
