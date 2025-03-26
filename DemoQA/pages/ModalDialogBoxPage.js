class ModalDialogBoxPage {
    constructor(page) {
        this.page = page;
        this.url = "https://demoqa.com/modal-dialogs";
        this.showSmallModaButton = page.locator("//button[@id='showSmallModal']");
        this.showLargeModalButton = page.locator("//button[@id='showLargeModal']");
        this.smallDialogPopup = page.locator("//div[@id='example-modal-sizes-title-sm']");
        this.largeDialogPopup = page.locator("//div[@id='example-modal-sizes-title-lg']");
        this.closeSmallModalButton = page.locator("//button[@id='closeSmallModal']");
        this.closeLargeModalButton = page.locator("//button[@id='closeLargeModal']");
    }

    async visitModalDialogBoxPage() {
        await this.page.goto(this.url, { waitUntil: 'domcontentloaded' });
    }

}

module.exports = { ModalDialogBoxPage };