

describe('Login', function(){

    before('load fixture', () => {
        cy.fixture('userDetails').as('user')
    });
    it('Sign in', function(){

        cy.visit('/#/login')
        cy.get('input[type="email"]').type(`${this.user.email}`)
        cy.get('input[type="password"]').type(`${this.user.password}`)
        cy.get('.btn').contains('Sign in').should('be.visible').click()

    })
})