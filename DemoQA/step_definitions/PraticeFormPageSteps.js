import { Given, When, Then } from "../fixtures/page.js";
import { expect } from "@playwright/test";


Given("I navigate to the Practice Form Page", async ({ practiceFormPage }) => {
    await practiceFormPage.visitPracticeFormPage();
});
When(`I fill in the required fields in the Practice Form Page`, async ({ page, practiceFormPage }, dataTable) => {
    const row = dataTable.hashes()[0];
    await practiceFormPage.firstNameInputField.fill(row.firstName);
    await practiceFormPage.lastNameInputField.fill(row.lastName);
    await practiceFormPage.selectGenderRadioButton(row.gender);
    await practiceFormPage.selectCalendarDate(row.DOB);
    await practiceFormPage.mobileNuimberInputField.fill(row.mobileNumber);
});

When(`I click on the submit button on the Practice Form Page`, async ({ page, practiceFormPage },) => {
    await practiceFormPage.submitButton.click();
});


Then(`I should see a popup box with the submitted required details in Practice Form Page`, async ({ page, practiceFormPage }, dataTable) => {
    await expect(practiceFormPage.modalBox).toBeVisible();
    const tableObject = await practiceFormPage.parsePopupTable();
    const dataRow = await dataTable.hashes()[0];
    const expectedFullName = dataRow.firstName + " " + dataRow.lastName;
    expect(tableObject.content1).toBe(expectedFullName);
    expect(tableObject.content3).toBe(dataRow.gender);
    expect(tableObject.content4).toBe(dataRow.mobileNumber);
    expect(tableObject.content5).toBe(await practiceFormPage.getFormatedDate(dataRow.DOB));
});



Then(`I should see a popup box with the all submitted details in Practice Form Page`, async ({ page, practiceFormPage }, dataTable) => {
    await expect(practiceFormPage.modalBox).toBeVisible();
    const tableObject = await practiceFormPage.parsePopupTable();

    const dataRow = await dataTable.hashes()[0];
    const expectedFullName = dataRow.firstName + " " + dataRow.lastName;
    expect(tableObject.content1).toBe(expectedFullName);
    expect(tableObject.content2).toBe(dataRow.emailAddress);
    expect(tableObject.content3).toBe(dataRow.gender);
    expect(tableObject.content4).toBe(dataRow.mobileNumber);
    expect(tableObject.content5).toBe(await practiceFormPage.getFormatedDate(dataRow.DOB));
    expect(tableObject.content6).toBe(dataRow.subjects);
    expect(tableObject.content7).toBe(dataRow.hobbies);
    expect(tableObject.content8).toBe(dataRow.picture);
    expect(tableObject.content9).toBe(dataRow.currentAddress);
    const expectedStateAndCity = dataRow.state + " " + dataRow.city;
    expect(tableObject.content10).toBe(expectedStateAndCity);
});


Then(`I should see the required fields border are highlight in red in the Practice Form Page`, async ({ page, practiceFormPage },) => {
    const backgroundImage = "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")";
    expect(await practiceFormPage.getElementProperty(practiceFormPage.firstNameInputField, "background image")).toBe(backgroundImage);
    expect(await practiceFormPage.getElementProperty(practiceFormPage.lastNameInputField, "background image")).toBe(backgroundImage);
    expect(await practiceFormPage.getElementProperty(await practiceFormPage.getRadioElement("male"), "color")).toBe("rgb(220, 53, 69)");
    expect(await practiceFormPage.getElementProperty(await practiceFormPage.getRadioElement("female"), "color")).toBe("rgb(220, 53, 69)");
    expect(await practiceFormPage.getElementProperty(await practiceFormPage.getRadioElement("other"), "color")).toBe("rgb(220, 53, 69)");
    expect(await practiceFormPage.getElementProperty(practiceFormPage.mobileNuimberInputField, "background image")).toBe(backgroundImage);
});


Then(`I should see the {string} field border are highlight in red in the Practice Form Page`, async ({ page, practiceFormPage }, field) => {

    const backgroundImage = "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")";
    const fieldMap = {
        firstName: practiceFormPage.firstNameInputField,
        lastName: practiceFormPage.lastNameInputField,
        mobileNumber: practiceFormPage.mobileNuimberInputField,
        emailAddress: practiceFormPage.emailAddressInputField
    };

    if (field == "gender") {
        expect(await practiceFormPage.getElementProperty(await practiceFormPage.getRadioElement("male"), "color")).toBe("rgb(220, 53, 69)");
        expect(await practiceFormPage.getElementProperty(await practiceFormPage.getRadioElement("female"), "color")).toBe("rgb(220, 53, 69)");
        expect(await practiceFormPage.getElementProperty(await practiceFormPage.getRadioElement("other"), "color")).toBe("rgb(220, 53, 69)");
    }
    else if (fieldMap[field]) {
        const fieldElement = fieldMap[field];
        expect(await practiceFormPage.getElementProperty(fieldElement, "background image")).toBe(backgroundImage);
    }

});


When(`I enter email address {string} in the Practice Form Page`, async ({ page, practiceFormPage }, emailAddress) => {
    await practiceFormPage.emailAddressInputField.fill(emailAddress);
});





When(`I fill in all the fields in the Practice Form Page`, async ({ page, practiceFormPage }, dataTable) => {
    const row = dataTable.hashes()[0];
    await practiceFormPage.firstNameInputField.fill(row.firstName);
    await practiceFormPage.lastNameInputField.fill(row.lastName);
    await practiceFormPage.selectGenderRadioButton(row.gender);
    await practiceFormPage.selectCalendarDate(row.DOB);
    await practiceFormPage.mobileNuimberInputField.fill(row.mobileNumber);
    await practiceFormPage.emailAddressInputField.fill(row.emailAddress);
    await practiceFormPage.enterMultipleValues(await practiceFormPage.subjectInputField, row.subjects);
    await practiceFormPage.selectHobby(row.hobbies);
    await practiceFormPage.uploadFile(row.picture);
    await practiceFormPage.currentAddressInputfield.fill(row.currentAddress);
    await practiceFormPage.selectState(row.state);
    await practiceFormPage.selectCity(row.city);

});




When(`I enter {string} as subject in the Practice Form Page`, async ({ page }) => {

});


When(`I select {string} as my date of birth in the Practice Form Page`, async ({ page, practiceFormPage }, DOB) => {
    await practiceFormPage.selectCalendarDate(DOB);
});