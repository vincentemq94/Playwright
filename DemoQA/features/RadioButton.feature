@RadioButton
Feature: Radio Button functionality

    Background:
        Given I am on Radio Button Page

    Scenario Outline: User selects a radio button and verifies the displayed message
        When I click on "<Button Name>" radio button on Raido Button Page
        Then I should see the display message "<Exepcted Message>" on Raido Button Page

        Examples:
            | Button Name | Exepcted Message |
            | Yes         | Yes              |
            | Impressive  | Impressive       |


    Scenario Outline:  User toggles between two radio buttons and verifies the displayed message
        When I click on "<First Button>" radio button on Raido Button Page
        And I click on "<Second Button>" radio button on Raido Button Page
        Then I should see the display message "<Exepcted Message>" on Raido Button Page

        Examples:
            | First Button | Second Button | Exepcted Message |
            | Yes          | Impressive    | Impressive       |
            | Impressive   | Yes           | Yes              |

    @negativeCase
    Scenario: User attempts to select the disabled radio button
        When I click on "No" radio button on Raido Button Page
        Then The display message should not be visible on the Radio Button Page