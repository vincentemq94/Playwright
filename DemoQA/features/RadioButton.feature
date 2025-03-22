Feature: Test Radio Butotn Page

    Background:
        Given I navigate to Radio Button Page

    Scenario: Test able to click on different radio buttons
        When I click on "<button name>" radio button in Raido Button Page
        Then I am able to see "<button name>" in the result section in Raido Button Page

        Examples:
            | button name |
            | Yes         |
            | Impressive  |


    Scenario: Test able to click Yes then Impressive Radio Button
        When I click on "<first button>" radio button in Raido Button Page
        And I click on "<second button>" radio button in Raido Button Page
        Then I am able to see "<second button>" in the result section in Raido Button Page

        Examples:
            | first button | second button |
            | Yes          | Impressive    |
            | Impressive   | Yes           |

    Scenario: Test able unable click No Radio button
        When I click on "No" radio button in Raido Button Page
        Then I am unable to see the result section in Raido Button Page
