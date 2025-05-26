import { Given, When, Then } from '../fixtures/page.js';
import { expect } from "@playwright/test";

Given("I navigate to Alert Page", async ({ page, alertPage }) => {
    await alertPage.visitAlertPage();
});

When("I click on the Alert Button in the Alert Page", async ({ page, alertPage, variableStorage }) => {

    const getDialogMessage = new Promise((resolve) => {
        page.on("dialog", async dialog => {
            expect(dialog.type()).toBe("alert");
            resolve(dialog.message());
            await dialog.accept();
        });
    });

    await alertPage.alertButton.click();
    variableStorage.dialogMessage = await getDialogMessage;

});

Then("I am able to see Alert Dialog Box in the Alert Page", async ({ page, alertPage, variableStorage }) => {
    await expect(variableStorage.dialogMessage).toBe("You clicked a button");
});

When("I click on the Timer Alert Button in the Alert Page", async ({ page, alertPage, variableStorage }) => {

    const getDialogMessage = new Promise((resolve) => {
        page.on("dialog", async dialog => {
            expect(dialog.type()).toBe("alert");
            resolve(dialog.message());
            await dialog.accept();
        });
    });

    await alertPage.timerAlertButton.click();
    variableStorage.dialogMessage = await getDialogMessage;
});

Then("I am able to see Alert Dialog Box after {int} seconds in the Alert Page", async ({ page, alertPage, variableStorage }, time) => {
    await page.waitForTimeout((time * 1000));
    await expect(variableStorage.dialogMessage).toBe("This alert appeared after 5 seconds");

});

When("I click on the confirm box Button and dialog box confirm in the Alert Page", async ({ page, alertPage }) => {
    const getDialogMessage = new Promise((resolve) => {
        page.on("dialog", async dialog => {
            expect(dialog.type()).toBe("confirm");
            await dialog.accept();
            resolve();
        });
    });

    await alertPage.confirmButton.click();
});

When("I click on the confirm box Button and dialog box cancel in the Alert Page", async ({ page, alertPage }) => {
    const getDialogMessage = new Promise((resolve) => {
        page.on("dialog", async dialog => {
            expect(dialog.type()).toBe("confirm");
            await dialog.dismiss();
            resolve();
        });
    });

    await alertPage.confirmButton.click();
});

Then("I am able to see the confirm results display in the Alert Page", async ({ page, alertPage }) => {
    await expect(alertPage.confirmResult).toHaveText("You selected Ok")
});


Then("I am able to see the cancel results display in the Alert Page", async ({ page, alertPage }) => {
    await expect(alertPage.confirmResult).toHaveText("You selected Cancel")

});

When("I click on the prompt Button and type {string} in the dialog box in the Alert Page", async ({ page, alertPage }, text) => {
    const getDialogMessage = new Promise((resolve) => {
        page.on("dialog", async dialog => {
            expect(dialog.type()).toBe("prompt");
            await dialog.accept(text);
            resolve();
        });
    });

    await alertPage.promptButton.click();
});

Then("I am able to see prompt results display {string} in the Alert Page", async ({ page, alertPage }, text) => {
    await expect(alertPage.promptResult).toHaveText(text);

});