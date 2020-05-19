const SearchElement = require("../support/contextTestFiles/SearchPage/searchPage.element");
const CommonElement = require("../support/contextTestFiles/Common/common.element");
const CommonData = require("../support/contextTestFiles/Common/common.data");

Cypress.Commands.add("searchProduct", product => {
  cy.server();
  cy.route(CommonData.httpVerb.post, CommonData.endpoint.searchProduct).as(
    "searchProduct"
  );
  cy.get(SearchElement.searchProduct.searchInput).type(product, {
    delay: 200,
    force: true
  });
  cy.wait("@searchProduct");
  cy.get(SearchElement.searchProduct.searchButton).click();
});

Cypress.Commands.add("addProduct", () => {
  cy.server();
  cy.route(CommonData.httpVerb.post, CommonData.endpoint.addProduct).as(
    "addProduct"
  );
  cy.xpath(CommonElement.searchProduct.addProduct, { timeout: 3000 }).click();
  cy.wait("@addProduct");
});
