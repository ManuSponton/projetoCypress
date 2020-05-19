import { When, Then } from 'cypress-cucumber-preprocessor/steps';
const CartFunction = require('../contextTestFiles/CartPage/cartPage.function');

Then('I add the product to my cart', function () {
  cy.addProduct();
  CartFunction.seeTheProductInTheShoppingCart();
  CartFunction.seeThePurchaseOrderDetails();
});

Then('I can change the number of items', function () {
  CartFunction.changeProductQuantity();
});

When('I remove items from my shopping cart', function () {
  CartFunction.removeProduct();
});

Then('the cart should present the empty order message', function () {
  CartFunction.seeEmptyCartMessage();
});