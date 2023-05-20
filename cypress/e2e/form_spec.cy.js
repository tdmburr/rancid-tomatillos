import multipleStub from "../fixtures/multipleStub"
import singleStub from "../fixtures/singleStub"

describe('User Form dashboard with user flows', () => {
  let testVisit = () => cy.visit('http://localhost:3000')
  
  beforeEach(()=> {

    cy.intercept({method: 'GET', url:'https://rancid-tomatillos.herokuapp.com/api/v2/movies'}, multipleStub)
    cy.intercept({method: 'GET', url:'https://rancid-tomatillos.herokuapp.com/api/v2/movies/*'}, singleStub)
    testVisit()

  })

it('As a user, i should be able to interact with the input field and see the entered value' , () => {
  cy.get('input[name="title"]')
      .type('W')
        .should('have.value', 'W')
      .type('{backspace}')
        .should('have.value', '')
      .type('B')
        .should('have.value', 'B')
      .type('l')
        .should('have.value', 'Bl')
      .type('a')
        .should('have.value', 'Bla')
})

it('As a user, i should see the form with default text' , () => {
  cy.get('form')
  .should('exist')
  .should('be.visible')
  cy.get('input[placeholder="Movie Search (Case Sensitive)"]')
  .should('exist')
  .should('have.value', '')

  })
  
  it('As a user, i should see a displayed movie based off form input' , () => {
    cy.get('input[name="title"]')
      .type('B')
      .get('section')
        .should('exist')
        .get('#436270')
        .should('exist').should('be.visible') .find('img').should('have.attr', 'src', "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg")
      .get('section')
        .get('#505642')
        .should('exist').should('be.visible')
  })

  it('As a user, i should see an error display when no movies are found' , () => {
    cy.get('input[name="title"]')
      .type('B')
      .should('have.value', 'B')
      .type('l')
      .should('have.value', 'Bl')
      .type('a')
      .should('have.value', 'Bla')
      .type('k')
      .should('have.value', 'Blak')
    
      cy.get('.message')
        .should('exist')
        .should('be.visible')
        .contains("No movies are available based on the current input in the search field. Please check the movie titles and try again.")

  })
})