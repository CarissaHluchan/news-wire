describe('News-wire-spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=*', {
      statusCode: 200,
      fixture: 'allNews.json'
    }).as('getAllNews')

    cy.visit('http://localhost:3000/');
  });

  it('Should load the landing page with title, date search form, articles, and footer', () => {
    cy.get('body').should('be.visible');
    cy.get('h1').contains('News Wire');

    cy.get('form').should('be.visible');
    cy.get('input').should('be.visible');
    cy.get('.search-by-date-button').contains('Search');
    cy.get('.all-news-main').children().should('have.length', 3);

    cy.get('#\\32 024-09-11-04-00-00').should('be.visible');
    cy.get('#\\32 024-09-11-04-00-00 > .new-card-source-wrapper > div').contains('Wired');
    cy.get('#\\32 024-09-11-04-00-00 > h2').contains('The World\’s Biggest Bitcoin Mine Is Rattling This Texas Oil Town');
    cy.get('#\\32 024-09-11-04-00-00 > .news-card-image').should('be.visible');
    cy.get('#\\32 024-09-11-04-00-00 > p').contains('A cashstrapped city in rural Texas will soon be home to the world\’s largest bitcoin mine. Local protesters are “raising hell.”');

    cy.get('footer').should('be.visible');
    cy.get('footer > div').contains('Created By: Carissa Hluchan')
    cy.get('.url-link-github').contains('See it on: GitHub')
  });

  it('Should be able to select the date 09/11/2024 and submit the form', () => {
    cy.get('input').focus().click();
    cy.get('.react-datepicker').should('be.visible');
    cy.get('.react-datepicker__navigation').click();
    cy.get('.react-datepicker__day--011').click();
    cy.get('.search-by-date-button').click();

    cy.get('.all-news-main').should('be.visible');
    cy.get('.all-news-main').should('have.length', 1);
    cy.get('#\\32 024-09-11-04-00-00').should('be.visible');
    cy.get('#\\32 024-09-11-04-00-00 > .new-card-source-wrapper > div').contains('Wired');
    cy.get('#\\32 024-09-11-04-00-00 > h2').contains('The World\’s Biggest Bitcoin Mine Is Rattling This Texas Oil Town');
    cy.get('#\\32 024-09-11-04-00-00 > .news-card-image').should('be.visible');
    cy.get('#\\32 024-09-11-04-00-00 > p').contains('A cashstrapped city in rural Texas will soon be home to the world\’s largest bitcoin mine. Local protesters are “raising hell.”');
  });

  it('Should be able to see the list of all articles if an empty date is entered', () => {
    cy.get('input').click();
    cy.get('input').clear();
    cy.get('.search-by-date-button').click();
    cy.get('.all-news-main').children().should('have.length', 3);
  });

  it('Should recieve a message if no articles are found matching the searched date', () => {
    cy.get('.react-datepicker__input-container input').click();
    cy.get('.react-datepicker').find('.react-datepicker__day--005').click();
    cy.get('.search-by-date-button').click();
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('.no-articles-found-message').should('be.visible').contains('No articles found for the selected date.')
  });

  it('Should be able to open a detailed view of an article and navigateback to all articles', () => {
    cy.get('#\\32 024-09-26-09-12-00').click();

    cy.get('.detailed-view-article').should('be.visible');
    cy.get('.detailed-view-button-wrapper > button').contains('All Articles');
    cy.get('.detailed-view-source').contains('CNET');
    cy.get('.detailed-view-title').contains('PayPal to Allow Businesses Buy and Sell Crypto');
    cy.get('.detailed-view-image').should('be.visible');
    cy.get('.detailed-view-date').contains('Thursday, September 26, 2024 9:12 AM');
    cy.get('.detailed-view-author').contains('By: Samantha Kelly');
    cy.get('p').contains('It\'s about to get easier for US merchants to use cryptocurrency for payments. PayPal is launching a new service to allow the businesses that use its platform to buy, hold and sell crypto. Although … [+1029 chars]');
    
    cy.get('.detailed-view-button-wrapper > button').click();
    cy.get('.all-news-main').children().should('have.length', 3);
  });

  it('Should be able to navigated to the link of the article from the detailed View', () => {
    cy.get('#\\32 024-09-26-09-12-00').click();

    cy.get('.detailed-view-article').should('be.visible');
    cy.get('.detailed-view-button-wrapper > button').contains('All Articles');
    cy.get('.detailed-view-source').contains('CNET');
    cy.get('.detailed-view-title').contains('PayPal to Allow Businesses Buy and Sell Crypto');
    cy.get('.detailed-view-image').should('be.visible');
    cy.get('.detailed-view-date').contains('Thursday, September 26, 2024 9:12 AM');
    cy.get('.detailed-view-author').contains('By: Samantha Kelly');
    cy.get('p').contains('It\'s about to get easier for US merchants to use cryptocurrency for payments. PayPal is launching a new service to allow the businesses that use its platform to buy, hold and sell crypto. Although … [+1029 chars]');
  
    cy.get('.detailed-view-button-wrapper > button').click();
    cy.get('.all-news-main').children().should('have.length', 3);
  });
});