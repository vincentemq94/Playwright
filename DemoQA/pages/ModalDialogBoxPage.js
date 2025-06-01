class ModalDialogBoxPage {
    constructor(page) {
        this.page = page;
        this.url = "https://demoqa.com/modal-dialogs";
        this.showSmallModaButton = page.locator("//button[@id='showSmallModal']");
        this.showLargeModalButton = page.locator("//button[@id='showLargeModal']");
        this.modalDialogBox = page.locator("//div[@role='dialog']");
        this.modalContent = page.locator("//div[@class='modal-body']") ;

        this.smallDialogTitle = page.locator("//div[@id='example-modal-sizes-title-sm']");
        this.largeDialogTitle = page.locator("//div[@id='example-modal-sizes-title-lg']");
        this.closeSmallModalButton = page.locator("//button[@id='closeSmallModal']");
        this.closeLargeModalButton = page.locator("//button[@id='closeLargeModal']");
    }

    async visitModalDialogBoxPage() {
        await this.page.goto(this.url, { waitUntil: 'domcontentloaded' });
    }

    async getModalButton(modalButton) {
        const modalButtonMap = {
            "small modal": this.showSmallModaButton,
            "large modal": this.showLargeModalButton
        }
        return modalButtonMap[modalButton.toLowerCase().trim()];
    }

    async getCloseModalButton(button) {
        const ModalDialogButton = {
            "small dialog box": this.closeSmallModalButton,
            "large dialog box": this.closeLargeModalButton,
        }
        return ModalDialogButton[button.toLowerCase().trim()];
    }


}

module.exports = { ModalDialogBoxPage };
