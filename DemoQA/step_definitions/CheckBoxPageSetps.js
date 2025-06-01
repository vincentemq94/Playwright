import { expect } from '@playwright/test';
import { Given, When, Then } from '../fixtures/page.js';

Given("I am on Check Box Page", async ({ page, checkBoxPage }) => {
    await checkBoxPage.visitCheckboxPage();
});

Given(`I expand the checkbox list by clicking the Expand All button on the Checkbox Page`, async ({ page, checkBoxPage }) => {
    await checkBoxPage.expandAll.click();
    await page.waitForTimeout(1000);

});

When(`I select multiple checkboxes on the Checkbox Page`, async ({ page, checkBoxPage }, dataTable) => {
    const rows = dataTable.hashes();
    for (const row of rows) {
        const checkboxName = row["Check Box Name"].trim();
        await checkBoxPage.selectCheckBox(checkboxName);
    }
});

When(`I select the {string} checkbox on the Checkbox Page`, async ({ page, checkBoxPage }, checkBoxName) => {
    await checkBoxPage.selectCheckBox(checkBoxName.trim());
});

When(`I expand the {string} checkbox list on the Checkbox Page`, async ({ page, checkBoxPage }, checkBoxName) => {
    await checkBoxPage.expandSelectedCheckbox(checkBoxName.trim());
});


Then(`The display message should show {string} on the Checkbox Page`, async ({ page, checkBoxPage }, checkBoxNames) => {
    const checkBoxNameList = checkBoxNames.split(" ");
    for (let checkBoxName of checkBoxNameList) {
        checkBoxName = checkBoxName.trim();
        await expect(page.locator("//div[@id='result']/span[text()='" + checkBoxName + "']")).toBeVisible();
    }
});

Then(`The following check boxes should be visible on the Checkbox Page`, async ({ page }, datatTable) => {
    const rows = datatTable.hashes();
    for (const row of rows) {
        const checkBoxName = row["Check Box Name"].trim();
        await expect(page.locator("//span[@class='rct-title' and text()='" + checkBoxName + "']")).toBeVisible();
    }
});

When(`I click the collapse all button the checkbox list on the Checkbox Page`, async ({ checkBoxPage }) => {
    await checkBoxPage.collapseAll.click();
});

Then(`The following check boxes should no longer be visible on the Checkbox Page`, async ({ page }, datatTable) => {
    const rows = datatTable.hashes();
    for (const row of rows) {
        const checkBoxName = row["Check Box Name"].trim();
        await expect(page.locator("//span[@class='rct-title' and text()='" + checkBoxName + "']")).toBeHidden();
    }
});
