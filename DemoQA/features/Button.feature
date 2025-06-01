
@Buttons
Feature: Button interactions on the Button Page

    Background:
        Given I am on the Button Page

    Scenario: User verifies the message shown after a double-click
        When I double click on the Double Click Me button on the Button Page
        Then I should see the message "You have done a double click" on the Button Page

    Scenario: User verifies the message shown after a right-click
        When I right click on the Right Click Me button on the Button Page
        Then I should see the message "You have done a right click" on the Button Page

    Scenario: Users verifies the message shown after a single click
        When I click on the Click Me button on the Button Page
        Then I should see the message "You have done a dynamic click" on the Button Page
