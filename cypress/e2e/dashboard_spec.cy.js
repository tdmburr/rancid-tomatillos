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
      .should('exist').should('be.visible') .find('img').should('have.attr', 'src', "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg")
    .get('#724495')
      .should('exist').should('be.visible')
    .get('#1013860')
      .should('exist').should('be.visible')
    .get('#505642')
      .should('exist').should('be.visible')
    .get('.movieContainer').scrollTo('bottom')
    .get('#934641')
      .should('exist').should('be.visible')
  })

  it('As a user, I should see a form (search bar) at the bottom of the movie display.', () => {

    cy.get('form')
      .should('exist')
      .should('be.visible')
      .should('have.value', '')
  })
})

describe('User movie dashboard with errorhandling', () => {
  let testVisit = () => cy.visit('http://localhost:3000/error')
  
  beforeEach(()=> {

    cy.intercept({method: 'GET', url:'https://rancid-tomatillos.herokuapp.com/api/v2/movies'}, "")
    testVisit()
  })

  it('As a user, if an error occurs I should see a message letting me know an error occurred.', () => {
    cy.get('.message')
      .should('exist').should('be.visible')
      .contains('p', 'That\'s not a very fungi!')
  })

})


 

