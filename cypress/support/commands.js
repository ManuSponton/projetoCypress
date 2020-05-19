const SearchElement = require('../support/contextTestFiles/SearchPage/searchPage.element');
const CommonElement = require('../support/contextTestFiles/Common/common.element')

Cypress.Commands.add("searchProduct", (product) => {
  cy.server();
  cy.route("POST", "/webapi/busca/produtos").as("searchProduct");
  cy.get(SearchElement.searchProduct.searchInput)
    .type(product, { delay: 200, force: true });
  cy.wait("@searchProduct");
  cy.get(SearchElement.searchProduct.searchButton)
    .click();
});

Cypress.Commands.add("addProduct", () => {
  cy.xpath(CommonElement.searchProduct.addProduct, { timeout: 120000 })
    .click();
});