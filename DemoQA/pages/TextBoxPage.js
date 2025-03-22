
class TextBoxPage {

    constructor(page) {
        this.page = page;
        this.url = "https://demoqa.com/text-box";
        this.fullNameInputField = page.locator("//input[@id='userName']");
        this.emailInputField = page.locator("//input[@id='userEmail']");
        this.currentAddressField = page.locator("//textarea[@id='currentAddress']");
        this.permanentAddressField = page.locator("//textarea[@id='permanentAddress']");
        this.submitButton = page.locator("//button[@id='submit']");
    }

    async visitTextBoxPage() {
        return await this.page.goto(this.url, 'commit');
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