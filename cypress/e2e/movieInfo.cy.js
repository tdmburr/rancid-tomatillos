import multipleStub from "../fixtures/multipleStub"
import singleStub from "../fixtures/singleStub"

describe('User movie details view with user flows and error handling', () => {
  let testVisit = () => cy.visit('http://localhost:3000')
  
  beforeEach(()=> {

    cy.intercept({method: 'GET', url:'https://rancid-tomatillos.herokuapp.com/api/v2/movies'}, multipleStub)
    cy.intercept({method: 'GET', url:'https://rancid-tomatillos.herokuapp.com/api/v2/movies/*'}, singleStub)
    testVisit()

  })
  
  it('As a user, I should be able to click a movie to view more details about the movie.', () => {

    cy.get('#436270')
    .click()
      .get('.section')
        .should('not.exist')
      .get('section')
        .should('exist').should('be.visible')
        .contains('p', "Title: Black Adam")
      .get('section')  
        .contains('p', "Release Date: 2022-10-19")
        .should('exist').should('be.visible')
      .get('section')  
        .contains('p', "Black Adam is freed from his earthly tomb")
        .should('exist').should('be.visible')  
      .get('section')  
        .contains('p', "Genre: ActionFantasyScience Fiction")
        .should('exist').should('be.visible')
      .get('section')  
        .contains('p', "Budget: $200,000,000.00")
        .should('exist').should('be.visible')
      .get('section')  
        .contains('p', "Revenue: $384,571,691.00")
        .should('exist').should('be.visible')
      .get('section')  
        .contains('p', "Duration: 125 minutes.")
        .should('exist').should('be.visible')
      .get('section')  
        .contains('p', "Tagline: The world needed a hero. It got Black Adam.")
        .should('exist').should('be.visible')
      .get('section')
        .contains('p', "Rating: 4")
        .should('exist').should('be.visible')        
  })

  it('As a user, when a click a movie, I should see the URL update to a unique ID', () => {
    cy.get('#436270')
      .click()

    cy.url()
      .should('include', '/movies/436270')
  })
})