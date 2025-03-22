import { Given, When, Then } from '../fixtures/page.js';


Given("I navigate to Demo QA text box Page", async ({ textBoxPage }) => {
    await textBoxPage.visitTextBoxPage();
});

Given("I fill up full name input with {string}", async ({ textBoxPage }, fullName) => {
    await textBoxPage.fullNameInputField.fill(fullName);
});

Given("I fill up email address input with {string}", async ({ textBoxPage }, emailAddress) => {
    await textBoxPage.emailInputField.fill(emailAddress);
});

Given("I fill up full current address with {string}", async ({ textBoxPage }, currentAddress) => {
    await textBoxPage.currentAddressField.fill(currentAddress);
});

Given("I fill up permanent Address input with {string}", async ({ textBoxPage }, permanentAddress) => {
    await textBoxPage.permanentAddressField.fill(permanentAddress);
});

When("I click on the submit button", async ({ textBoxPage }) => {
    await textBoxPage.submitButton.click();
})



