import { MovieScoutPage } from './app.po';

describe('movie-scout App', function() {
  let page: MovieScoutPage;

  beforeEach(() => {
    page = new MovieScoutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
