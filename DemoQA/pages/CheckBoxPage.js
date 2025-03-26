
class CheckBoxPage {

    constructor(page) {
        this.page = page;
        this.url = "https://demoqa.com/checkbox";
        this.expandAll = page.locator("//button[@class='rct-option rct-option-expand-all']");
        this.collapseAll = page.locator("//button[@class='rct-option rct-option-collapse-all']");
        this.homeExpand = page.locator("//span[text()='Home']/parent::label/preceding-sibling::button");
        this.destopExpand = page.locator("//span[text()='Desktop']/parent::label/preceding-sibling::button");
        this.documentExpand = page.locator("//span[text()='Documents']/parent::label/preceding-sibling::button");
        this.workspaceExpand = page.locator("//span[text()='WorkSpace']/parent::label/preceding-sibling::button");
        this.officeExpand = page.locator("//span[text()='Office']/parent::label/preceding-sibling::button");
        this.downloadsExpand = page.locator("//span[text()='Downloads']/parent::label/preceding-sibling::button");

    }

    async visitCheckboxPage() {
        this.page.goto(this.url, { waitUntil: 'domcontentloaded' });
    }

    async clickOnCheckbox(checkboxName) {
        await this.page.locator("//span[@class='rct-title' and text()='" + checkboxName + "']").click();
    }

    async expandSelectedCheckbox(checkboxName) {
        await this.page.locator("//span[text()='" + checkboxName + "']/parent::label/preceding-sibling::button").click();
    }

    async fillUpAllInputFields(fullName, email, currentAddress, permanentAddress) {
        await this.fullNameInputField.fill(fullName);
        await this.emailInputField.fill(email);
        await this.currentAddressField.fill(currentAddress);
        await this.permanentAddressField.fill(permanentAddress);
        return;
    }
};


module.exports = { CheckBoxPage };