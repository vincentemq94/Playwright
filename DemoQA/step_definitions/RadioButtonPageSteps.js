import { expect } from '@playwright/test';
import { Given, When, Then } from '../fixtures/page.js';

Given(`I am on Radio Button Page`, async ({ radioButtonPage }) => {
    await radioButtonPage.visitRadioButtonPage();
});

When(`I click on {string} radio button on Raido Button Page`, async ({ radioButtonPage }, buttonName) => {
    const radioButtonElement = await radioButtonPage.getRadioButtonElement(buttonName);
    await radioButtonElement.click();
});

Then(`I should see the display message {string} on Raido Button Page`, async ({ radioButtonPage }, expectedMessage) => {
    await expect(radioButtonPage.resultsText).toHaveText(expectedMessage);
});

Then(`The display message should not be visible on the Radio Button Page`, async ({ radioButtonPage }) => {
    await expect(radioButtonPage.resultsText).toBeHidden();
}); 