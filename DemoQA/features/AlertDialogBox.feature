@AlertDialogBox
Feature: Alert Page Functionality

    Background:
        Given I am on Alert Page

    Scenario: User accepts alert popup and verifies the displayed message
        When I click on the "Alert" Button and "accept" on the Alert Page
        Then I should see alert popup displays "You clicked a button" message on the Alert Page
        And The popup type should be "alert" on the Alert Page

    Scenario: User accepts timer alert popup and verifies the delayed message
        When I click on the "Timer Alert" Button and "accept" on the Alert Page
        Then I should see alert popup displays "This alert appeared after 5 seconds" message after 5 seconds on the Alert Page
        And The popup type should be "alert" on the Alert Page

    Scenario Outline: User interacts with confirm popup and verifies the outcome
        When I click on the "<Button Type>" Button and "<Action>" on the Alert Page
        Then I should see confirm output displays "<Expected Message>" message on the Alert Page
        And The popup type should be "<Pop up Type>" on the Alert Page
        Examples:
            | Button Type | Action  | Expected Message    | Pop up Type |
            | confirm box | confirm | You selected Ok     | confirm     |
            | confirm box | cancel  | You selected Cancel | confirm     |

    Scenario Outline: User submits prompt popup and verifies the entered message
        When I click on the "<Button Type>" Button and type "<Text>" in the dialog box on the Alert Page
        Then I should see prompt output displays "<Expected Message>" on the Alert Page
        And The popup type should be "<Pop up Type>" on the Alert Page
        Examples:
            | Button Type | Text             | Expected Message             | Pop up Type |
            | prompt      | Hello            | You entered Hello            | prompt      |
            | prompt      | He11lo I am here | You entered He11lo I am here | prompt      |