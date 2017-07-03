import { GTFNPage } from './app.po';

describe('gtfn App', function() {
  let page: GTFNPage;

  beforeEach(() => {
    page = new GTFNPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
