
Feature: Test different kinds of clicks in the Button Page

    Background:
        Given I navigate to Button Page

    Scenario: Test able to double click
        When I click on double click on the Double Click Me button in Button Page
        Then I am able to see the double click message in Button Page

    Scenario: Test able to right click
        When I click on double click on the Right Click Me button in the Button Page
        Then I am able to see the right click message in Button Page

    Scenario: Test able to click
        When I click on click on the Click Me button in the Button Page
        Then I am able to see the click message in Button Page
