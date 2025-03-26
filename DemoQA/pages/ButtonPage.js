class ButtonPage {
    constructor(page) {
        this.page = page;
        this.url = "https://demoqa.com/buttons";
        this.doubleClickButton = page.locator("//button[@id='doubleClickBtn']");
        this.rightClickButton = page.locator("//button[@id='rightClickBtn']");
        this.clickMeButton = page.locator("//button[text()='Click Me']");
        this.doubleClickMessage = page.locator("//p[@id='doubleClickMessage']");
        this.rightClickMessage = page.locator("//p[@id='rightClickMessage']");
        this.dynamicClickMessage = page.locator("//p[@id='dynamicClickMessage']");
        
    }
    async visitButtonPage() {
        this.page.goto(this.url, { waitUntil: "domcontentloaded" });
    }

}

module.exports = { ButtonPage };