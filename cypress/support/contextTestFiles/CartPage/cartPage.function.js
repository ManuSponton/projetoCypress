const CartElement = require('../CartPage/cartPage.element');
const CartData = require('../CartPage/cartPage.data');
const CommonElement = require('../Common/common.element');

module.exports = {
    seeTheProductInTheShoppingCart: function () {
        cy.get(CartElement.header.cartIcon)
            .click();
        cy.url()
            .should(CommonElement.constant.contain, CartData.url.url);
        cy.get(CartElement.cartDetails.cartPageTitle)
            .should(CommonElement.constant.haveText, CartData.cartDetails.cartPageTitle);
        cy.get(CartElement.cartDetails.cartPageTitle)
            .should(CommonElement.constant.beVisible);
        cy.get(CartElement.cartDetails.productDescription)
            .should(CommonElement.constant.haveText, CartData.cartDetails.productDescription);
        cy.get(CartElement.cartDetails.productDescription)
            .should(CommonElement.constant.beVisible);
        cy.get(CartElement.cartDetails.quantityField)
            .should(CommonElement.constant.haveValue, CartData.cartDetails.quantityWithValue1);
    },
    seeThePurchaseOrderDetails: function () {
        cy.get(CartElement.orderSummary.orderSummaryTitle)
            .should(CommonElement.constant.haveText, CartData.orderSummary.orderSummaryTitle);
        cy.get(CartElement.orderSummary.subtotalValue)
            .should(CommonElement.constant.exist);
        cy.get(CartElement.orderSummary.subtotalValue)
            .should(CommonElement.constant.beVisible);
        cy.get(CartElement.orderSummary.totalValue)
            .should(CommonElement.constant.exist);
        cy.get(CartElement.orderSummary.totalValue)
            .should(CommonElement.constant.beVisible);
        cy.get(CartElement.orderSummary.checkoutButton)
            .should(CommonElement.constant.contain, CartData.orderSummary.checkoutButton);
        cy.get(CartElement.orderSummary.checkoutButton)
            .should(CommonElement.constant.beVisible);
    },
    changeProductQuantity: function () {
        cy.get(CartElement.cartDetails.plusclick)
            .click();
        cy.get(CartElement.cartDetails.quantityField)
            .should(CommonElement.constant.haveValue, CartData.cartDetails.quantityWithValue2);
    },
    removeProduct: function () {
        cy.get(CartElement.cartDetails.removeButton)
            .click();
        cy.xpath(CartElement.cartDetails.confirmRemove)
            .click();
    },
    seeEmptyCartMessage: function () {
        cy.get(CartElement.emptyCart.emptyCartTitle)
            .should(CommonElement.constant.haveText, CartData.emptyCart.emptyCartTitle)
            .should(CommonElement.constant.beVisible);
        cy.get(CartElement.emptyCart.emptyCartMessage)
            .should(CommonElement.constant.haveText, CartData.emptyCart.emptyCartMessage)
            .should(CommonElement.constant.beVisible);
        cy.get(CartElement.emptyCart.emptyCartSubMessage)
            .should(CommonElement.constant.haveText, CartData.emptyCart.emptyCartSubMessage)
            .should(CommonElement.constant.beVisible);
    }
}
