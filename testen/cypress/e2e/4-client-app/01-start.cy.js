const url = 'http://127.0.0.1:3000/app/index.html';

context('Window', () => {
  beforeEach(() => {
    cy.visit(url)
  })

  it('cy.window() - get the global window object', () => {
    cy.window().should('have.property', 'top')
  })

  it('cy.document() - get the document object', () => {
    // https://on.cypress.io/document
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
  })

  it('cy.title() - get the title', () => {
    // https://on.cypress.io/title
    cy.title().should('include', 'CV Erik Leusink');
  })
})


