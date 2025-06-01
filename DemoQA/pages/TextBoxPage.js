
class TextBoxPage {

    constructor(page) {
        this.page = page;
        this.url = "https://demoqa.com/text-box";
        this.fullNameInputField = page.locator("//input[@id='userName']");
        this.emailInputField = page.locator("//input[@id='userEmail']");
        this.currentAddressField = page.locator("//textarea[@id='currentAddress']");
        this.permanentAddressField = page.locator("//textarea[@id='permanentAddress']");
        this.submitButton = page.locator("//button[@id='submit']");
        this.displayFullName = page.locator("//p[@id='name']");
        this.displayEmailAddress = page.locator("//p[@id='email']");
        this.displayCurrentAddress = page.locator("//p[@id='currentAddress']");
        this.displayPermanentAddress = page.locator("//p[@id='permanentAddress']");
    }

    async visitTextBoxPage() {
        this.page.goto(this.url, { waitUntil: 'domcontentloaded' });
    }

    async fillUpAllInputFields(fullName, email, currentAddress, permanentAddress) {
        await this.fullNameInputField.fill(fullName);
        await this.emailInputField.fill(email);
        await this.currentAddressField.fill(currentAddress);
        await this.permanentAddressField.fill(permanentAddress);
        return;
    }



};


module.exports = { TextBoxPage };