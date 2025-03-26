import { Given, When, Then } from "../fixtures/page";
import { expect } from "@playwright/test";

Given("I navigate to Button Page", async ({ buttonPage }) => {
    await buttonPage.visitButtonPage();
});

When("I click on double click on the Double Click Me button in Button Page", async ({ buttonPage }) => {
    await buttonPage.doubleClickButton.dblclick();
});

Then("I am able to see the double click message in Button Page", async ({ buttonPage }) => {
    expect(buttonPage.doubleClickMessage).toHaveText("You have done a double click");
});

When("I click on double click on the Right Click Me button in the Button Page", async ({ buttonPage }) => {
    await buttonPage.rightClickButton.click({ button: "right" });

});

Then("I am able to see the right click message in Button Page", async ({ buttonPage }) => {
    expect(buttonPage.rightClickMessage).toHaveText("You have done a right click");

});

When("I click on click on the Click Me button in the Button Page", async ({ buttonPage }) => {
    await buttonPage.clickMeButton.click();

});

Then("I am able to see the click message in Button Page", async ({ buttonPage }) => {
    expect(buttonPage.dynamicClickMessage).toHaveText("You have done a dynamic click");

});


