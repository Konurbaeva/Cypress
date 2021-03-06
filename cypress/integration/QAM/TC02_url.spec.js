describe('Create and mark-unmark as favorite', function(){

    before('load fixture', () => {

        cy.fixture('userDetails').as('user')
    });

    it('Sign in', function(){
        cy.visit('/#/login')
        cy.title().should('eq','Conduit')
        cy.location('protocol').should('eq','https:')
        cy.get('input[type="email"]').type(`${this.user.email}`)
        cy.get('input[type="password"]').type(`${this.user.password}`)
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.contains('Your Feed', {timeout:10000}).should('be.visible')
    })

    it('Create a post', function(){
        cy.contains('New Post').click()
        cy.hash().should('include','#/editor')
        //cy.location('hash').should('include','#/editor')
        cy.get('input[placeholder="Article Title"]').type('Test')
        cy.get('input[placeholder="What\'s this article about?"]').type('Test 1')
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type('Test 2')
        cy.contains('Publish Article').click()
        cy.url().should('include','article')
    })

    // fix
    it('Mark-unmark as favorite', function(){
      //  cy.get('.nav-link').contains('TestingCypress').first().click()
       cy.get('.nav-link').contains('TestingCypress').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').first().click()
        cy.contains('Favorited Articles').click()
        cy.url().should('include','favorites')
        cy.get('.ion-heart').first().click()

        cy.get('.ion-heart').each(listItem => { 
          //  const itemText = listItem.text().trim() 
      
            cy.wrap(listItem).click()
       })  

        
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go('back')
  

    })
})