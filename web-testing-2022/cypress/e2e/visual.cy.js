describe('home page', () => {
  beforeEach(() => {
    cy.visit('/');
    // need to scroll to handle lazy loading
    // since our page is tiny, it's not scrollable
    cy.scrollTo('bottom', { duration: 5000, ensureScrollable: false });
    cy.scrollTo('top', { duration: 3000, ensureScrollable: false });
  });

  it('looks good', () => {
    cy.get('body').happoScreenshot();
  });
});
