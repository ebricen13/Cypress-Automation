Feature: End to end Ecommerce validation

@Regression
Scenario: Ecommerce products delivery
Given I am on Ecommerce Page
When I login to the application
And I add items to the Cart and checkout
And Validate the total price limit
Then Select the country submit and verify Thank you

@Smoke
Scenario Outline: Ecommerce products delivery cucumber driven
Given I am on Ecommerce Page
When I login to the application portal
| username             | password |
| rahulshettyacademy   | learning |
And I add items to the Cart and checkout
And Validate the total price limit
Then Select the country submit and verify Thank you