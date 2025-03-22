import { expect } from '@playwright/test';
import { Given, When, Then } from '../fixtures/page.js';

Given("I navigate to Demo QA checkbox page", async ({ page, checkBoxPage }) => {
    await checkBoxPage.visitCheckboxPage();
});

Given("I expand all the drop down list using expand all button in checkBoxPage", async ({ page, checkBoxPage }) => {
    await checkBoxPage.expandAll.click();
    await page.waitForTimeout(1000);

});

When("I click on the {string} checkbox in checkBoxPage", async ({ page, checkBoxPage }, checkBoxName) => {
    await checkBoxPage.clickOnCheckbox(checkBoxName.trim());
});

Then("I check on the result list having {string} in the list in checkBoxPage", async ({ page }, checkBoxNames) => {

    let checkBoxNameList = checkBoxNames.split("|");
    for (let checkBoxName of checkBoxNameList) {

        // Process wordFile and excelFile as the dispaly is different 
        if (checkBoxName.trim() == 'Word File.doc') {
            checkBoxName = "wordFile";
        }
        else if (checkBoxName.trim() == "Excel Fie.doc") {
            checkBoxName = "excelFile";;
        }
        else {
            checkBoxName = checkBoxName.toLowerCase()
        }
        await expect(page.locator("//div[@id='result']/span[text()='" + checkBoxName.trim() + "']")).toBeVisible();
    }
});


Then("I am able to see {string} checkbox in checkBoxPage", async ({ page }, checkBoxNames) => {
    let checkBoxNameList = checkBoxNames.split("|");
    for (let checkBoxName of checkBoxNameList) {
        await expect(page.locator("//span[@class='rct-title' and text()='" + checkBoxName.trim() + "']")).toBeVisible();
    }
})

Then("I am unable to see {string} checkbox in checkBoxPage", async ({ page }, checkBoxNames) => {
    let checkBoxNameList = checkBoxNames.split("|");
    for (let checkBoxName of checkBoxNameList) {
        await expect(page.locator("//span[@class='rct-title' and text()='" + checkBoxName.trim() + "']")).toBeHidden();
    }
})

When("I collapse the drop down list in checkBoxPage", async ({ checkBoxPage }) => {
    await checkBoxPage.collapseAll.click();
})


Given("I expand {string} drop down list in checkBoxPage", async ({ checkBoxPage }, checkboxName) => {
    await checkBoxPage.expandSelectedCheckbox(checkboxName.trim());
})
