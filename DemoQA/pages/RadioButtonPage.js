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
        this.page.goto(this.url, { waitUntil: 'domcontentloaded' });
    }

    async getRadioButtonElement(buttonName) {
        const radioButtonMap = {
            "yes": this.yesRadioButton,
            "impressive": this.impressiveRadioButton,
            "no": this.noRadioButton
        }
        const radioButtonElement = radioButtonMap[buttonName.toLowerCase().trim()];
        if (radioButtonElement == undefined) {
            throw new Error("There is no such button : " + buttonName);
        }
        return radioButtonElement;
    }

}

module.exports = { RadioButtonPage };