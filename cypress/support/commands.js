import 'cypress-file-upload';

Cypress.Commands.add("SignIn", () => {
    cy.visit('/#/login')
    cy.title().should('eq', 'Conduit')
    cy.location('protocol').should('eq', 'https:')
    cy.get('form').within(($form) => {
        // cy.get() will only search for elements within form, not within the entire document
        cy.get('input[type = "email"]').type(`${this.user.email}`)
        cy.get('input[type = "password"]').type(`${this.user.password}`)
        cy.root().submit()   // submits the form yielded from 'within'
    })
    cy.contains('Your Feed', { timeout: 10000 }).should('be.visible')
})