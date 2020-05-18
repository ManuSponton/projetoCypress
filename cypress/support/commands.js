const SearchElement = require('../support/contextTestFiles/SearchPage/searchPage.element');

Cypress.Commands.add("searchProduct", (product) => {
  cy.server();
  cy.route("POST", "/webapi/busca/produtos").as("searchProduct");
  cy.get(SearchElement.searchProduct.searchInput)
    .type(product, { delay: 200, force: true });
  cy.wait("@searchProduct");
  cy.get(SearchElement.searchProduct.searchButton)
    .click();
});