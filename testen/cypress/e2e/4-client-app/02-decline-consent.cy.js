const url = 'http://127.0.0.1:3000/app/index.html';

context('Click', () => {
    beforeEach(() => {
        cy.visit(url)
    })

    it('GDPR gets declined', () => {

        cy.document()
            .find('[data-cy="decline-consent-button"]')
            .click();
    })

    it('Contact pagina niet zichtbaar.', () => {
        // https://on.cypress.io/title
        // cy body shown should include the following text "Deze content wordt alleen getoond als gdpr consent niet is gekozen."
        cy.get('body').should('contain', 'Deze content wordt alleen getoond als gdpr consent niet is gekozen.')
        cy.screenshot();
      })
    
});


