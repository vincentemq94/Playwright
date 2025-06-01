import { Given, When, Then } from '../fixtures/page.js';
import { expect } from "@playwright/test";

Given("I am on Alert Page", async ({ page, alertPage }) => {
    await alertPage.visitAlertPage();
});

When(`I click on the {string} Button and {string} on the Alert Page`, async ({ page, alertPage, variableStorage }, buttonType, action) => {
    const dialogInfo = alertPage.handleDialogAndReturnDialogInfo(action);
    await page.waitForTimeout(1000);
    const buttonElement = await alertPage.getButtonElement(buttonType);
    await buttonElement.click();
    variableStorage.dialogInfo = await dialogInfo;
});

Then(`The popup type should be {string} on the Alert Page`, async ({ page, alertPage, variableStorage }, type) => {
    expect(variableStorage.dialogInfo.type).toBe(type);
});

Then(`I should see alert popup displays {string} message on the Alert Page`, async ({ page, alertPage, variableStorage }, expectedMessage) => {
    expect(variableStorage.dialogInfo.message).toBe(expectedMessage);
});

Then(`I should see alert popup displays {string} message after {int} seconds on the Alert Page`, async ({ page, alertPage, variableStorage }, expectedMessage, time) => {
    await page.waitForTimeout((time * 1000));
    expect(variableStorage.dialogInfo.message).toBe(expectedMessage);
});

Then(`I should see confirm output displays {string} message on the Alert Page`, async ({ page, alertPage }, expectedMessage) => {
    expect(alertPage.confirmResult).toHaveText(expectedMessage);
});

When(`I click on the {string} Button and type {string} in the dialog box on the Alert Page`, async ({ page, alertPage, variableStorage }, buttonType, textMessage) => {
    const dialogInfo = alertPage.handleDialogAndReturnDialogInfo("accept", textMessage)
    await page.waitForTimeout(1000);
    const buttonElement = await alertPage.getButtonElement(buttonType);
    await buttonElement.click();
    variableStorage.dialogInfo = await dialogInfo;
});

Then(`I should see prompt output displays {string} on the Alert Page`, async ({ page, alertPage }, text) => {
    await expect(alertPage.promptResult).toHaveText(text);
});