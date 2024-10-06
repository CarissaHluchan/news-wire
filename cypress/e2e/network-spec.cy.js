describe('network-spec', () => {
  it('Should display an error message for a 400 level network error', () => {
    cy.intercept('GET', 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=*', {
      statusCode: 400,
      fixture: 'allNews.json'
    }).as('getAllNews')

    cy.visit('http://localhost:3000/');

    cy.get('.error-wrapper').should('be.visible');
    cy.get('.error-message').contains('500: We are so sorry, there has been an error! Please try again later.');
  });

  it('Should display an error message for a 500 level network error', () => {
    cy.intercept('GET', 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=*', {
      statusCode: 500,
      fixture: 'allNews.json'
    }).as('getAllNews')

    cy.visit('http://localhost:3000/');

    cy.get('.error-wrapper').should('be.visible');
    cy.get('.error-message').contains('500: We are so sorry, there has been an error! Please try again later.');
  });

  it('Should display an error message if the URL is not correct', () => {
    cy.intercept('GET', 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=*', {
      statusCode: 200,
      fixture: 'allNews.json'
    }).as('getAllNews')

    cy.visit('http://localhost:3000/test');
    cy.get('.error-wrapper').should('be.visible');
    cy.get('.error-message').contains('404: We are so sorry, there has been an error! Please try again later.');
  });
});