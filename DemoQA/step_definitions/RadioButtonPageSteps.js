import { expect } from '@playwright/test';
import { Given, When, Then } from '../fixtures/page.js';

Given("I navigate to Radio Button Page", async ({ radioButtonPage }) => {
    await radioButtonPage.visitRadioButtonPage();
});


When("I click on {string} radio button in Raido Button Page", async ({ radioButtonPage }, buttonName) => {
    let radioButton = await radioButtonPage.returnRadioWebElement(buttonName);
    await radioButton.click();

});

Then("I am able to see {string} in the result section in Raido Button Page", async ({ radioButtonPage }, buttonName) => {
    await expect(radioButtonPage.resultsText).toHaveText(buttonName);
});

Then("I am unable to see the result section in Raido Button Page", async ({ radioButtonPage }) => {
    await expect(radioButtonPage.resultsText).toBeHidden();
}); 