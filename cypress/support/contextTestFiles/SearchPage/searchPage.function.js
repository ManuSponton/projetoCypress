const SearchElement = require('../SearchPage/searchPage.element');
const SearchData = require('../SearchPage/searchPage.data');

module.exports = {
  selectProduct: function () {
    cy.xpath(SearchElement.searchResult.selectProduct, { timeout: 120000 })
      .click();
  },
  seeTheSearchPageInformation: function () {
    cy.get(SearchElement.header.logoKalunga, { timeout: 120000 })
      .should('be.visible')
    cy.get(SearchElement.header.userName, { timeout: 120000 })
      .should('have.text', SearchData.header.userName);
  },
  seeListOfProducts: function () {
    cy.get(SearchElement.searchResult.searchResultTitle)
      .should('be.visible')
      .should('contain', SearchData.searchResult.searchResultTitle);
    cy.get(SearchElement.searchResult.termSearchPag)
      .should('be.visible')
      .should('contain', SearchData.searchProduct.researchedProduct);
    cy.get(SearchElement.searchResult.listOfProducts)
      .should('be.visible');
  },
  seeProductNotFoundMessage: function () {
    cy.get('span')
      .should('contain', SearchData.searchResult.nonExistentProductMsg);
    cy.get('span')
      .parent('span')
      .should('contain', SearchData.searchResult.productSuggestionMsg);
    cy.get('span')
      .parent('span')
      .should('contain', SearchData.searchResult.continuedProductSuggestionMsg);
  }
}
