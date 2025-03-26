Feature: Test all the Dialog Box in Alert Page

    Background:
        Given I navigate to Alert Page

    Scenario: Test able to handle alert button in Alert Page
        When I click on the Alert Button in the Alert Page
        Then I am able to see Alert Dialog Box in the Alert Page

    Scenario: Test able to handle timer Alert button in Alert Page
        When I click on the Timer Alert Button in the Alert Page
        Then I am able to see Alert Dialog Box after 5 seconds in the Alert Page

    Scenario: Test able to click confirm in confirm dialog box in Alert Page
        When I click on the confirm box Button and dialog box confirm in the Alert Page
        Then I am able to see the confirm results display in the Alert Page

    Scenario: Test able to click cancel in confirm dialog box in Alert Page
        When I click on the confirm box Button and dialog box cancel in the Alert Page
        Then I am able to see the cancel results display in the Alert Page

    Scenario:Test able to enter text prompt dialog box in Alert Page
        When I click on the prompt Button and type "Hello" in the dialog box in the Alert Page
        Then I am able to see prompt results display "You entered Hello" in the Alert Page