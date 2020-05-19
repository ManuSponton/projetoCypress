module.exports = {
  header: {
    cartIcon: '.icon-carrinho'
  },
  cartDetails: {
    cartPageTitle: '.text-block',
    quantityField: '#txtQtd477133',
    productDescription: '.text-dark > .ng-binding',
    removeButton: '.m-0 > .col-12 > .text-dark',
    confirmRemove: '//*[@id="aspnetForm"]/section/div/div[2]/div/div[4]/div[2]/div/div[1]/div[2]/div/div/div[3]/div/div/div[2]/div/div/div[3]/button[2]',
    plusclick: '[ng-click="Plus($index); UpdateBasket(produto);"] > .fa'
  },
  orderSummary: {
    orderSummaryTitle: '.my-2 > .font-weight-bold',
    subtotalValue: '#lblSubtotal',
    totalValue: '#lblValorTotal',
    checkoutButton: '.mt-3 > .col-12',
  },
  emptyCart: {
    emptyCartTitle: '.container > .mb-4',
    emptyCartMessage: '.jumbotron > .container > :nth-child(2)',
    emptyCartSubMessage: '.container > :nth-child(3)'
  }
}
