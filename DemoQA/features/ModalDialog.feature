@ModalDialog
Feature: Display different types of modal dialog boxes

    Background:
        Given I am on Modal Dialog Box Page

    Scenario Outline:: User opens different modal dialogs and verifies the content
        When I click on the "<modalType>" button on the Modal Dialog Page
        Then I should see the modal dialog pop up on Modal Dialog Box Page
        And The dialog box should contain "<content>" as body content on the Modal Dialog Box Page
        When I click close button on "<modalDialogSize>" on the Modal Dialog Box Page
        Then The dialog box is no longer be visible
        Examples:
            | modalType   | content                          | modalDialogSize  |
            | small modal | This is a small modal            | small dialog box |
            | large modal | Lorem Ipsum is simply dummy text | large dialog box |
