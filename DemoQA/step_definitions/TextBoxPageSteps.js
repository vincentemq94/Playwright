import { Given, When, Then } from '../fixtures/page.js';
import { expect } from "@playwright/test";


Given(`I am on Text Box Page`, async ({ textBoxPage }) => {
    await textBoxPage.visitTextBoxPage();
});

When(`I fill in all the input fields on the Text Box Page`, async ({ textBoxPage }, dataTable) => {
    const row = dataTable.hashes()[0];
    await textBoxPage.fullNameInputField.fill(row.fullName);
    await textBoxPage.emailInputField.fill(row.emailAddress);
    await textBoxPage.currentAddressField.fill(row.currentAddress);
    await textBoxPage.permanentAddressField.fill(row.permanentAddress);
});

When(`I click on the submit button on the Text Box Page`, async ({ textBoxPage }) => {
    await textBoxPage.submitButton.click();
});

Then(`I should see the submitted details on the Text Box Page`, async ({ textBoxPage }, dataTable) => {
    const row = dataTable.hashes()[0];
    if (row.fullName) {
        expect(textBoxPage.displayFullName).toHaveText(`Name:${row.fullName}`);
    }
    if (row.emailAddress) {
        expect(textBoxPage.displayEmailAddress).toHaveText(`Email:${row.emailAddress}`);
    }
    if (row.currentAddress) {
        expect(textBoxPage.displayCurrentAddress).toHaveText(`Current Address :${row.currentAddress}`);
    }
    if (row.permanentAddress) {
        expect(textBoxPage.displayPermanentAddress).toHaveText(`Permananet Address :${row.permanentAddress}`);
    }
});

Then(`I should not see the submitted details on the Text Box Page`, async ({ textBoxPage }, dataTable) => {
    expect(textBoxPage.displayFullName).toBeHidden();
    expect(textBoxPage.displayEmailAddress).toBeHidden();
    expect(textBoxPage.displayCurrentAddress).toBeHidden();
    expect(textBoxPage.displayPermanentAddress).toBeHidden();
});


