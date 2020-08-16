import Login from '../pageObjects/login'

describe('Login', function(){
    before('load fixture', () => {

        cy.fixture('userDetails').as('user')
    });


    const login = new Login()

    it('Sign in', function(){
        cy.visit('https://react-redux.realworld.io/#/login')
        login.email().type(`${this.user.email}`)
        login.password().type(`${this.user.password}`)
        login.signInButton().should('be.visible').click()
    })
})