Feature: Mocking Api tests

Scenario: Postive mocking Api Test

Given I moke the result with two fruits "mango" and "pinapple"
When I land on the landing page
Then I see the fruits i mocked

Scenario: Negative mocking Api Test

Given I moke the result status and a error message "Internal Server Error"
When I land on the landing login page
Then I see the list of fruits is empty
