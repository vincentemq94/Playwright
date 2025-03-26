import { test as base, createBdd } from 'playwright-bdd';
import * as Pages from './pageCollection.js';

const { TextBoxPage, CheckBoxPage, RadioButtonPage, AlertPage } = Pages;

const createTestFunction = (PageClass) => async ({ page }, use) => {
    await use(new PageClass(page));
}

export const test = base.extend({
    textBoxPage: createTestFunction(TextBoxPage),
    checkBoxPage: createTestFunction(CheckBoxPage),
    radioButtonPage: createTestFunction(RadioButtonPage),
    alertPage: createTestFunction(AlertPage),

    variableStorage: async ({ }, use) => {
        const variableStorage = {};
        await use(variableStorage);
    }
});

export const { Given, When, Then, AfterScenario } = createBdd(test);

AfterScenario(async ({ page }) => {
    await page.waitForTimeout(3000);
});
