@practiceForm
Feature: Practice form submission functionality

    Background:
        Given I navigate to the Practice Form Page

    Scenario Outline: User can successfully submit the form with required fields only
        When I fill in the required fields in the Practice Form Page
            | firstName   | lastName   | gender   | mobileNumber   | DOB   |
            | <firstName> | <lastName> | <gender> | <mobileNumber> | <DOB> |
        And I click on the submit button on the Practice Form Page
        Then I should see a popup box with the submitted required details in Practice Form Page
            | firstName   | lastName   | gender   | mobileNumber   | DOB   |
            | <firstName> | <lastName> | <gender> | <mobileNumber> | <DOB> |
        Examples:
            | firstName | lastName | gender | mobileNumber | DOB        |
            | Vincent   | Eng      | Male   | 6512345123   | 14-02-1990 |
            | Jason     | koh      | Male   | 6512345678   | 28-02-2003 |
            | Jasmie    | Tan      | Female | 6587654321   | 27-02-1999 |

    Scenario: User cannot submit the form when required fields are empty
        When I click on the submit button
        Then I should see the required fields border are highlight in red in the Practice Form Page

    Scenario Outline: User can successfully submit the form with all fields completed
        When I fill in all the fields in the Practice Form Page
            | firstName   | lastName   | emailAddress   | gender   | mobileNumber   | DOB   | subjects   | hobbies   | picture   | currentAddress   | state   | city   |
            | <firstName> | <lastName> | <emailAddress> | <gender> | <mobileNumber> | <DOB> | <subjects> | <hobbies> | <picture> | <currentAddress> | <state> | <city> |
        And I click on the submit button
        Then I should see a popup box with the all submitted details in Practice Form Page
            | firstName   | lastName   | emailAddress   | gender   | mobileNumber   | DOB   | subjects   | hobbies   | picture   | currentAddress   | state   | city   |
            | <firstName> | <lastName> | <emailAddress> | <gender> | <mobileNumber> | <DOB> | <subjects> | <hobbies> | <picture> | <currentAddress> | <state> | <city> |
        Examples:
            | firstName | lastName | emailAddress            | gender | mobileNumber | DOB        | subjects                           | hobbies       | picture         | currentAddress             | state | city  |
            | Vincent   | Eng      | vincen123@gmail.com     | Male   | 6592387531   | 15-02-2019 | Maths, Chemistry, Computer Science | Sports, Music | sampleFile.jpeg | block 123 marsiling #01-21 | NCR   | Delhi |
            | james     | koh      | James123Koh@hotmail.com | Male   | 9231232413   | 15-02-2001 | Maths, English                     | Reading       | sampleFile.jpeg | block 123 Orchard #01-21   | NCR   | Noida |

    @negativeCase
    Scenario Outline: User cannot submit the Practice Form with an invalid email address
        When I fill in the required fields in the Practice Form Page
            | firstName   | lastName   | gender   | mobileNumber   | DOB   |
            | <firstName> | <lastName> | <gender> | <mobileNumber> | <DOB> |
        And I enter email address "<email address>" in the Practice Form Page
        And I click on the submit button on the Practice Form Page
        Then I should see the "email address" field border are highlight in red in the Practice Form Page
        Examples:
            | firstName | lastName | email address               | gender | mobileNumber | DOB        |
            | Vincent   | Eng      | vincenteng.com              | Male   | 6512345123   | 14-02-1990 |
            | Jason     | koh      | Jason_Koh@                  | Male   | 6512345678   | 28-02-2003 |
            | Jasmie    | Tan      | Jasmine123Tan#12@@seasd.com | Female | 6587654321   | 27-02-1999 |


    @negativeCase
    Scenario Outline: User cannot submit the Practice Form with an invalid mobile number
        When I fill in the required fields in the Practice Form Page
            | firstName   | lastName   | gender   | mobileNumber   | DOB   |
            | <firstName> | <lastName> | <gender> | <mobileNumber> | <DOB> |
        And I click on the submit button on the Practice Form Page
        Then I should see the "mobileNumber" field border are highlight in red in the Practice Form Page
        Examples:
            | firstName | lastName | gender | mobileNumber | DOB        |
            | Vincent   | Eng      | Male   | 651234512    | 14-02-1990 |
            | Jason     | koh      | Male   | 65123@4567   | 28-02-2003 |
            | Jasmie    | Tan      | Female | 123asd4567   | 27-02-1999 |

    @negativeCase
    Scenario Outline: User cannot submit the Practice Form when one required field is empty
        When I fill in the required fields in the Practice Form Page
            | firstName   | lastName   | gender   | mobileNumber   | DOB   |
            | <firstName> | <lastName> | <gender> | <mobileNumber> | <DOB> |
        And I click on the submit button on the Practice Form Page
        Then I should see the "<field>" field border are highlight in red in the Practice Form Page
        Examples:
            | firstName | lastName | gender | mobileNumber | DOB        | field        |
            |           | Kim      | Male   | 6512345123   | 14-02-1990 | firstName    |
            | Vincent   |          | Male   | 6512345123   | 28-02-2003 | lastName     |
            | Jason     | koh      |        | 6512345678   | 27-02-1999 | gender       |
            | Jasmie    | Tan      | Female |              | 27-02-1959 | mobileNumber |