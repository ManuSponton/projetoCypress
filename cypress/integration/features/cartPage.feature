Feature: Cart Page

  As a consumer, I want to add products to my shopping cart

  Background: Should access the product search page
    Given that I access the home page
    When I search for a product "researchedProduct"

  Scenario: Should add a product to the shopping cart
    Then I add the product to my cart

  Scenario: Should change the quantity of product
    When I add the product to my cart
    Then I can change the number of items

  Scenario: Should remove one product from my cart
    And I add the product to my cart
    When I remove items from my shopping cart
    Then the cart should present the empty order message