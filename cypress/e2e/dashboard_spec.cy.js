import multipleStub from "../fixtures/multipleStub"
import singleStub from "../fixtures/singleStub"

describe('User movie dashboard with user flows', () => {
  let testVisit = () => cy.visit('http://localhost:3000')
  
  beforeEach(()=> {

    cy.intercept({method: 'GET', url:'https://rancid-tomatillos.herokuapp.com/api/v2/movies'}, multipleStub)
    cy.intercept({method: 'GET', url:'https://rancid-tomatillos.herokuapp.com/api/v2/movies/*'}, singleStub)
    testVisit()

  })

  it('As a user, I should be able to visit http://localhost:3000 and see a title.', () => {

    cy.get('h1')
      .should('exist')
      .should('be.visible')
      .contains('Putrid Portabellos')
  })

  it('As a user, I should see multiple movies on the "home" page.', () => {

    cy.get('.movieContainer')
      .should('exist')
    .get('#436270')
      .should('exist').should('be.visible')
    .get('#724495')
      .should('exist').should('be.visible')
    .get('#1013860')
      .should('exist').should('be.visible')
    .get('#505642')
      .should('exist').should('be.visible')
    .get('#934641')
      .should('exist').should('be.visible')
    .find('img')
      .should('have.attr', 'src', "https://image.tmdb.org/t/p/original//pUPwTbnAqfm95BZjNBnMMf39ChT.jpg")
  })

  it('As a user, I should see a form (search bar) at the bottom of the movie display.', () => {

    cy.get('form')
      .should('exist')
      .should('be.visible')
      .should('have.value', '')
  })
})