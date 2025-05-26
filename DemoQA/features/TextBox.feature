Feature: "Fill in all the texbox"

    Scenario Outline: "Test if the textbox fields are working"
        Given I navigate to Demo QA text box Page
        And I fill up full name input with "<full name>"
        And I fill up email address input with "<emailAddress>"
        And I fill up full current address with "<currentAddress>"
        And I fill up permanent Address input with "<permanentAddress>"
        When I click on the submit button

        Examples: : Test Data for textbox Page
            | full name   | emailAddress      | currentAddress | permanentAddress |
            | vincent Eng | vincent@gmail.com | Marsiling      | CCK              |
            | Good Eng    | Good@gmail.com    | Marsiling      | toa payoh        |