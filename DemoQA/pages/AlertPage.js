class AlertPage {

    constructor(page) {
        this.page = page;
        this.url = "https://demoqa.com/alerts";
        this.alertButton = page.locator("//button[@id='alertButton']");
        this.timerAlertButton = page.locator("//button[@id='timerAlertButton']");
        this.confirmButton = page.locator("//button[@id='confirmButton']");
        this.promptButton = page.locator("//button[@id='promtButton']");
        this.confirmResult = page.locator("//span[@id='confirmResult']");
        this.promptResult = page.locator("//span[@id='promptResult']");

    }


    visitAlertPage() {
        this.page.goto(this.url, { waitUntil: 'domcontentloaded' });
    }

}

module.exports = { AlertPage };

