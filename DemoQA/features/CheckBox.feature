Feature: Test checkbox features

    Scenario: Test able to expand drop down list and click on Home checkbox
        Given I navigate to Demo QA checkbox page
        Given I expand all the drop down list using expand all button in checkBoxPage
        When I click on the "Home" checkbox in checkBoxPage
        Then I check on the result list having "Home" in the list in checkBoxPage
    
    Scenario: Test able to expand and collapse drop down list
        Given I navigate to Demo QA checkbox page
        And I expand all the drop down list using expand all button in checkBoxPage
        And I am able to see "Veu" checkbox in checkBoxPage
        And I am able to see "Public" checkbox in checkBoxPage
        And I am able to see "Excel File.doc" checkbox in checkBoxPage
        And I collapse the drop down list in checkBoxPage
        Then I am unable to see "Veu | Public | Excel File.doc" checkbox in checkBoxPage

    Scenario: Test able to expand drop down list and click on Desktop and Downloads checkbox
        Given I navigate to Demo QA checkbox page
        And I expand all the drop down list using expand all button in checkBoxPage
        When I click on the "WorkSpace" checkbox in checkBoxPage
        And I click on the "Downloads" checkbox in checkBoxPage
        Then I check on the result list having "WorkSpace | Downloads" in the list in checkBoxPage

    Scenario: Test able to click on inner checkboxes
        Given I navigate to Demo QA checkbox page
        And I expand all the drop down list using expand all button in checkBoxPage
        When I click on the "React" checkbox in checkBoxPage
        And I click on the "Private" checkbox in checkBoxPage
        And I click on the "Word File.doc" checkbox in checkBoxPage
        Then I check on the result list having "React | Private | Word File.doc" in the list in checkBoxPage

    Scenario: Test able to expand drop down list individually
        Given I navigate to Demo QA checkbox page
        When I expand "Home" drop down list in checkBoxPage
        And I expand "Desktop" drop down list in checkBoxPage
        And I expand "Documents" drop down list in checkBoxPage
        And I expand "Office" drop down list in checkBoxPage
        And I expand "Downloads" drop down list in checkBoxPage
        Then I am able to see "Desktop | Documents | Office | Downloads" checkbox in checkBoxPage


# Scenario: Test click all the checkbox
#     Given I navigate to Demo QA checkbox page
#     When I click on all checkboxes
