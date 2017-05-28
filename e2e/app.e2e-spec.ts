import { ClientSideShareDocumentPage } from './app.po';

describe('client-side-share-document App', () => {
  let page: ClientSideShareDocumentPage;

  beforeEach(() => {
    page = new ClientSideShareDocumentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
