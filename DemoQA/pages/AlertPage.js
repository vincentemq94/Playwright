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

    async handleDialogAndReturnDialogInfo(action = "accept", promptText = undefined) {
        return new Promise((resolve) => {
            const handleAction = (action === "accept" || action === "confirm") ? "accept" : "dimiss";

            this.page.once("dialog", async (dialog) => {
                const dialogInfo = {
                    type: dialog.type(),
                    message: dialog.message(),
                    defaultValue: dialog.defaultValue(),
                    handleWith: handleAction,
                };

                if (handleAction == "accept") {
                    await dialog.accept(promptText);
                }
                else {
                    await dialog.dismiss();
                }

                resolve(dialogInfo);
            });
        });
    }

    async visitAlertPage() {
        this.page.goto(this.url, { waitUntil: 'domcontentloaded' });
    }


    async setDialogHandler(action, promptText = undefined) {
        this.dialogHandlerConfig = { action, promptText };
    }

    async getLastDialog() {
        return this.dialogs[this.dialogs.length - 1];
    }

    async getButtonElement(buttonType) {
        const buttonMap = {
            "alert": this.alertButton,
            "timer alert": this.timerAlertButton,
            "confirm box": this.confirmButton,
            "prompt": this.promptButton,
        };
        return buttonMap[buttonType.toLowerCase().trim()];
    }

}

module.exports = { AlertPage };

