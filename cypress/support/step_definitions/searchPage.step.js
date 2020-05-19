import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
const url = Cypress.config('baseUrl');
const SearchFunction = require('../contextTestFiles/SearchPage/searchPage.function');
const SearchData = require('../contextTestFiles/SearchPage/searchPage.data');

Given('that I access the home page', function () {
  cy.visit(url);
  SearchFunction.seeTheSearchPageInformation();
});

When('I search for a product {string}', function (product) {
  cy.searchProduct(SearchData.searchProduct[product]);
});

Then('a list of products will be loaded', function () {
  SearchFunction.seeListOfProducts();
});

Then('I will see an alert message', function () {
  SearchFunction.seeProductNotFoundMessage();
});

And('suggestions for other products', function () {
  SearchFunction.seeProductsSuggestions();
});