@CheckBox
Feature: Checkbox Page Functionality

    Background:
        Given I am on Check Box Page

    Scenario: User expands the checkbox list, selects a checkbox, and verifies the corresponding displayed message
        When I expand the checkbox list by clicking the Expand All button on the Checkbox Page
        And I select the "<Check Box Name>" checkbox on the Checkbox Page
        Then The display message should show "<Results>" on the Checkbox Page
        Examples:
            | Check Box Name | Results                                                                                                                                 |
            | Home           | home desktop notes commands documents workspace react angular veu office public private classified general downloads wordFile excelFile |
            | Angular        | angular                                                                                                                                 |
            | Classified     | classified                                                                                                                              |
            | WorkSpace      | workspace react angular veu                                                                                                             |
            | Downloads      | downloads wordFile excelFile                                                                                                            |

    Scenario: User expands and collapses all check box lists and verifies the visibility of the coorespsonding inner check boxes
        When I expand the checkbox list by clicking the Expand All button on the Checkbox Page
        Then The following check boxes should be visible on the Checkbox Page
            | Check Box Name |
            | Veu            |
            | Public         |
            | Excel File.doc |
        When I click the collapse all button the checkbox list on the Checkbox Page
        Then The following check boxes should no longer be visible on the Checkbox Page
            | Check Box Name |
            | Veu            |
            | Public         |
            | Excel File.doc |

    Scenario: User select the inner checkbox and verifies the display message is showing accordingly
        Given I expand the checkbox list by clicking the Expand All button on the Checkbox Page
        When I select multiple checkboxes on the Checkbox Page
            | Check Box Name |
            | React          |
            | Private        |
            | Word File.doc  |
        Then The display message should show "react private wordFile" on the Checkbox Page

    Scenario: User expands checkboxes individually and verifies corresponding folders are displayed
        When I expand the "Home" checkbox list on the Checkbox Page
        Then The following check boxes should be visible on the Checkbox Page
            | Check Box Name |
            | Desktop        |
            | Documents      |
            | Downloads      |
        When I expand the "Desktop" checkbox list on the Checkbox Page
        Then The following check boxes should be visible on the Checkbox Page
            | Check Box Name |
            | Notes          |
            | Commands       |
        When I expand the "Documents" checkbox list on the Checkbox Page
        Then The following check boxes should be visible on the Checkbox Page
            | Check Box Name |
            | WorkSpace      |
            | Office         |
        When I expand the "Downloads" checkbox list on the Checkbox Page
        Then The following check boxes should be visible on the Checkbox Page
            | Check Box Name |
            | Word File.doc  |
            | Excel File.doc |