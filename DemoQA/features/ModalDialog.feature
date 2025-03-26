Feature: Test all the modal disalog box

    Background:
        Given I navigate to Modal Dialog Box Page

    Scenario: Test able to trigger the small modal dialog box in Modal Dialog Page
        When I click on the small modal dialog box in Modal Dialog Page
        Then I am able to see the small dialog box pop up in Modal Dialog Box Page

    Scenario: Test able to trigger the Big modal dialog box in Modal Dialog Page
        When I click on the large modal dialog box in Modal Dialog Page
        Then I am able to see the large dialog box pop up in Modal Dialog Box Page
