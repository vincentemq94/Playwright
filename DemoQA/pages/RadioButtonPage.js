class RadioButtonPage {


    constructor(page) {
        this.page = page;
        this.url = "https://demoqa.com/radio-button";
        this.yesRadioButton = page.locator("//input[@id='yesRadio']/parent::div");
        this.impressiveRadioButton = page.locator("//input[@id='impressiveRadio']/parent::div");
        this.noRadioButton = page.locator("//input[@id='noRadio']/parent::div");
        this.resultsText = page.locator("//span[@class='text-success']");
    }

    async visitRadioButtonPage() {
        await this.page.goto(this.url);
    }

    async returnRadioWebElement(buttonName) {
        if (buttonName === "Yes") {
            return this.yesRadioButton;
        }
        else if (buttonName === "Impressive") {
            return this.impressiveRadioButton;
        }
        else if (buttonName === "No") {
            return this.noRadioButton;
        }
        else {
            throw new Error("There is no such button : " + buttonName);
        }
    }

}

module.exports = { RadioButtonPage };