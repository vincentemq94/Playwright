import { Given, When, Then } from "../fixtures/page.js";
import { expect } from "@playwright/test"

Given(`I navigate to Modal Dialog Box Page`, async ({ page, modalDialogBoxPage }) => {
    await modalDialogBoxPage.visitModalDialogBoxPage();
});

When(`I click on the small modal dialog box in Modal Dialog Page`, async ({ page, modalDialogBoxPage }) => {
    await modalDialogBoxPage.showSmallModaButton.click();
});

Then(`I am able to see the small dialog box pop up in Modal Dialog Box Page`, async ({ page, modalDialogBoxPage }) => {
    await expect(modalDialogBoxPage.smallDialogPopup).toBeVisible();
    await modalDialogBoxPage.closeSmallModalButton.click();
});


When(`I click on the large modal dialog box in Modal Dialog Page`, async ({ page, modalDialogBoxPage }) => {
    await modalDialogBoxPage.showLargeModalButton.click();
});

Then(`I am able to see the large dialog box pop up in Modal Dialog Box Page`, async ({ page, modalDialogBoxPage }) => {
    await expect(modalDialogBoxPage.largeDialogPopup).toBeVisible();
    await modalDialogBoxPage.closeLargeModalButton.click();
});