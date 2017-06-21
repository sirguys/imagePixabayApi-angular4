import { ImagePixabayApiAngular4Page } from './app.po';

describe('image-pixabay-api-angular4 App', () => {
  let page: ImagePixabayApiAngular4Page;

  beforeEach(() => {
    page = new ImagePixabayApiAngular4Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
