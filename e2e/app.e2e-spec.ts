import { GiftpagoPage } from './app.po';

describe('giftpago App', () => {
  let page: GiftpagoPage;

  beforeEach(() => {
    page = new GiftpagoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
