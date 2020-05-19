const SearchElement = require('../SearchPage/searchPage.element');
const SearchData = require('../SearchPage/searchPage.data');
const CommonElement = require('../Common/common.element');

module.exports = {
  seeTheSearchPageInformation: function () {
    cy.get(SearchElement.header.logoKalunga)
      .should(CommonElement.constant.beVisible)
    cy.get(SearchElement.header.userName)
      .should(CommonElement.constant.haveText, SearchData.header.userName);
  },
  seeListOfProducts: function () {
    cy.get(SearchElement.searchResult.searchResultTitle)
      .should(CommonElement.constant.beVisible)
      .should(CommonElement.constant.contain, SearchData.searchResult.searchResultTitle);
    cy.get(SearchElement.searchResult.termSearchPag)
      .should(CommonElement.constant.beVisible)
      .should(CommonElement.constant.contain, SearchData.searchProduct.researchedProduct);
    cy.get(SearchElement.searchResult.listOfProducts)
      .should(CommonElement.constant.beVisible);
  },
  seeProductNotFoundMessage: function () {
    cy.get(CommonElement.constant.span)
      .should(CommonElement.constant.contain, SearchData.searchResult.nonExistentProductMsg);
  },
  seeProductsSuggestions: function () {
    cy.get(CommonElement.constant.span)
      .parent(CommonElement.constant.span)
      .should(CommonElement.constant.contain, SearchData.searchResult.productSuggestionMsg);
    cy.get(CommonElement.constant.span)
      .parent(CommonElement.constant.span)
      .should(CommonElement.constant.contain, SearchData.searchResult.continuedProductSuggestionMsg);
    cy.get(SearchElement.searchResult.listOfProducts)
      .should(CommonElement.constant.beVisible);
  }
}
