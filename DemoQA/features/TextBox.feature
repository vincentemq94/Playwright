@TextBox
Feature: Text box submission functionality

    Background:
        Given I am on Text Box Page

    Scenario Outline: "User can submit the form with valid inputs"
        And I fill in all the input fields on the Text Box Page
            | fullName   | emailAddress   | currentAddress   | permanentAddress   |
            | <fullName> | <emailAddress> | <currentAddress> | <permanentAddress> |
        When I click on the submit button on the Text Box Page
        Then I should see the submitted details on the Text Box Page
            | fullName   | emailAddress   | currentAddress   | permanentAddress   |
            | <fullName> | <emailAddress> | <currentAddress> | <permanentAddress> |
        Examples:
            | fullName    | emailAddress        | currentAddress | permanentAddress |
            | vincent Eng | vincent@gmail.com   | Marsiling      | CCK              |
            | James Tan   | James_Tan@gmail.com | Jurong East    | toa payoh        |


    Scenario Outline: "User can submit the form with only one input field filled"
        And I fill in all the input fields on the Text Box Page
            | fullName   | emailAddress   | currentAddress   | permanentAddress   |
            | <fullName> | <emailAddress> | <currentAddress> | <permanentAddress> |
        When I click on the submit button on the Text Box Page
        Then I should see the submitted details on the Text Box Page
            | fullName   | emailAddress   | currentAddress   | permanentAddress   |
            | <fullName> | <emailAddress> | <currentAddress> | <permanentAddress> |
        Examples:
            | fullName    | emailAddress   | currentAddress | permanentAddress |
            | vincent Eng |                |                |                  |
            |             | Jane@gmail.com |                |                  |
            |             |                | Yishun         |                  |
            |             |                |                | Red Hill         |

    @negativeCase
    Scenario Outline: "User cannot submit the form with an invalid email address"
        And I fill in all the input fields on the Text Box Page
            | fullName   | emailAddress   | currentAddress   | permanentAddress   |
            | <fullName> | <emailAddress> | <currentAddress> | <permanentAddress> |
        When I click on the submit button on the Text Box Page
        Then I should not see the submitted details on the Text Box Page
        Examples:
            | fullName    | emailAddress       | currentAddress | permanentAddress |
            | vincent Eng | vincent@gm$ail.com | Marsiling      | CCK              |
            | James Tan   | James_Tangmail.com | Jurong East    | toa payoh        |