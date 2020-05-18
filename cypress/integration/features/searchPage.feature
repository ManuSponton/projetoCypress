Feature: Search Page

  As a consumer want to look for a product I want to buy

  Background: Should access the product search page
    Given that I access the home page

  Scenario: Should search a product
    When I search for a product "researchedProduct"
    Then a list of products will be loaded

  Scenario: Should search for non-existent product
    When I search for a product "nonExistentProduct"
    Then I will see an alert message
    And suggestions for other products