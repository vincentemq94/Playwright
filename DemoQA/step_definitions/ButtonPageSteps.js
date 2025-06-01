import { Given, When, Then } from "../fixtures/page";
import { expect } from "@playwright/test";

Given(`I am on the Button Page`, async ({ buttonPage }) => {
    await buttonPage.visitButtonPage();
});

When(`I double click on the Double Click Me button on the Button Page`, async ({ buttonPage }) => {
    await buttonPage.doubleClickButton.dblclick();
});

When(`I right click on the Right Click Me button on the Button Page`, async ({ buttonPage }) => {
    await buttonPage.rightClickButton.click({ button: "right" });
});

When(`I click on the Click Me button on the Button Page`, async ({ buttonPage }) => {
    await buttonPage.clickMeButton.click();
});

Then(`I should see the message {string} on the Button Page`, async ({ buttonPage }, message) => {
    const messageField = await buttonPage.getDynamicMessage(message);
    expect(messageField).toHaveText(message);
});


