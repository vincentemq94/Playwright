import { Given, When, Then } from "../fixtures/page.js";
import { expect } from "@playwright/test"

Given(`I am on Modal Dialog Box Page`, async ({ page, modalDialogBoxPage }) => {
    await modalDialogBoxPage.visitModalDialogBoxPage();
});

When(`I click on the {string} button on the Modal Dialog Page`, async ({ page, modalDialogBoxPage }, modalButton) => {
    const modalButtonElement = await modalDialogBoxPage.getModalButton(modalButton);
    await modalButtonElement.click();
});

Then(`I should see the {string} pop up on the Modal Dialog Box Page`, async ({ page, modalDialogBoxPage }, dialogBox) => {
    const dialoBoxElement = await modalDialogBoxPage.getModalDialogTitle(dialogBox);
    expect(dialoBoxElement).toBeVisible();
});

Then(`I should see the modal dialog pop up on Modal Dialog Box Page`, async ({ page, modalDialogBoxPage }) => {
    expect(modalDialogBoxPage.modalDialogBox).toBeVisible();
});

When(`The dialog box should contain {string} as body content on the Modal Dialog Box Page`, async ({ page, modalDialogBoxPage }, content) => {
    expect(modalDialogBoxPage.modalContent).toContainText(content);
})

When(`I click close button on {string} on the Modal Dialog Box Page`, async ({ page, modalDialogBoxPage }, modalCloseButton) => {
    const closeButton = await modalDialogBoxPage.getCloseModalButton(modalCloseButton);
    await closeButton.click();
})

When(`The dialog box is no longer be visible`, async ({ page, modalDialogBoxPage }) => {
    expect(modalDialogBoxPage.modalDialogBox).toBeHidden();
})