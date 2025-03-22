import { test as base, createBdd } from 'playwright-bdd';
import * as Pages from './pageCollection.js';

const { TextBoxPage, CheckBoxPage, RadioButtonPage } = Pages;

const createTestFunction = (PageClass) => async ({ page }, use) => {
    await use(new PageClass(page));
}

export const test = base.extend({
    textBoxPage: createTestFunction(TextBoxPage),
    checkBoxPage: createTestFunction(CheckBoxPage),
    radioButtonPage: createTestFunction(RadioButtonPage),
});

export const { Given, When, Then, AfterScenario } = createBdd(test);

AfterScenario(async ({ page }) => {
    await page.waitForTimeout(3000);
});
