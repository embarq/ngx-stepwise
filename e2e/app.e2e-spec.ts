import { StepwisePage } from './app.po';

describe('stepwise App', () => {
  let page: StepwisePage;

  beforeEach(() => {
    page = new StepwisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
