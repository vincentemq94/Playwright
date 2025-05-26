const { get } = require("http");

class PracticeFormPage {

    constructor(page) {
        this.page = page;
        this.url = "https://demoqa.com/automation-practice-form";
        this.firstNameInputField = page.locator("//input[@id='firstName']");
        this.lastNameInputField = page.locator("//input[@id='lastName']");
        this.emailAddressInputField = page.locator("//div[@id='userEmail-wrapper']//input");
        this.mobileNuimberInputField = page.locator("//input[@id='userNumber']");
        this.DOBInput = page.locator("//input[@id='dateOfBirthInput']");
        this.subjectInputField = page.locator("//div[@id='subjectsWrapper']//div[contains(@class,'subjects-auto-complete__value-container')]");
        this.uploadPictureField = page.locator("//input[@id='uploadPicture']");
        this.currentAddressInputfield = page.locator("//textarea[@id='currentAddress']");
        this.stateInputField = page.locator("//div[@id='state']/div/div[2]/div");
        this.cityInputField = page.locator("//div[@id='city']/div/div[2]/div");
        this.submitButton = page.locator("//button[@id='submit']");
        this.modalBox = page.locator("//div[@class='modal-content']");
        this.popupTable = page.locator("//table[@class='table table-dark table-striped table-bordered table-hover']");
    }

    async visitPracticeFormPage() {
        await this.page.goto(this.url, { waitUntil: 'domcontentloaded' });
    }


    async selectGenderRadioButton(radioButton) {
        const radio = await this.getGenderRadioElement(radioButton);
        if (radio == null || radio == undefined) {
            return;
        }
        await radio.click();
    }

    async getGenderRadioElement(gender) {

        const genderMap = {
            male: 'gender-radio-1',
            female: 'gender-radio-2',
            other: 'gender-radio-3'
        };

        const radioId = genderMap[gender.toLowerCase()];
        if (radioId == undefined) {
            console.log(`Invalid gender value: ${gender}`);
            return undefined;
        }
        return this.page.locator(`//input[@id='${radioId}']/following-sibling::label`);
    }

    async enterMultipleValues(element, multipleValues) {
        const values = multipleValues.split(",");
        for (const value of values) {
            await element.click();
            await element.type(value.trim());
            await element.press('Enter');
        }
    }

    async selectHobby(hobbies) {

        const multipleHobbies = hobbies.split(",");
        for (const hobby of multipleHobbies) {
            let checkbox = await this.getHobbyElement(hobby.trim());
            if (hobby == null || hobby == undefined) {
                continue;
            }
            await checkbox.click();
        }
    }

    async getHobbyElement(hobby) {

        const hobbyMap = {
            sports: 'hobbies-checkbox-1',
            reading: 'hobbies-checkbox-2',
            music: 'hobbies-checkbox-3'
        };

        const hobbyId = hobbyMap[hobby.toLowerCase()];
        if (hobbyId == undefined) {
            console.log(`Hobby not supported value: ${hobby}`);
            return undefined;
        }
        return this.page.locator(`//input[@id='${hobbyId}']/following-sibling::label`);
    }


    async selectCalendarDate(DOB) {
        await this.DOBInput.click();
        const [day, month, year] = DOB.split("-");
        await this.page.locator("//select[@class='react-datepicker__year-select']").selectOption(year);
        await this.page.locator("//select[@class='react-datepicker__month-select']").selectOption(await this.getMonth(month));
        await this.page.locator("//div[@class='react-datepicker__week']/div[not(contains(@class,'-outside-month')) and text()='" + day + "']").click();
    }

    async getMonth(month) {
        if (month.length == 1) {
            month = "0" + month;
        }
        const calendarMonth = { "01": "January", "02": "February", "03": "March", "04": "April", "05": "May", "06": "June", "07": "July", "08": "August", "09": "September", "10": "October", "11": "November", "12": "December" };
        return calendarMonth[month];
    }

    async getFormatedDate(date) {
        let [day, month, year] = date.split("-");
        month = await this.getMonth(month);
        return `${day} ${month},${year}`;
    }


    async getElementProperty(element, property) {

        let propertyValue = null;
        if (property == "background image") {
            propertyValue = await element.evaluate((el => window.getComputedStyle(el).getPropertyValue("background-image")));
        }
        else if (property == "color") {
            propertyValue = await element.evaluate((el => window.getComputedStyle(el).getPropertyValue("color")));

        }

        return propertyValue;

    }

    async parsePopupTable() {
        const tableData = {};
        const rows = await this.popupTable.locator("tr");
        for (let i = 0; i < await rows.count(); i++) {
            const columns = await rows.nth(i).locator("td");
            for (let j = 1; j < await columns.count(); j++) {
                tableData[`content${i}`] = await columns.nth(j).textContent();
            }
        }
        return tableData;
    }

    async selectState(state) {
        await this.stateInputField.click();
        const stateElement = await this.page.locator("//div[contains(@id, 'react-select-3-option') and text()='" + state + "']");
        await stateElement.click();
    }

    async selectCity(city) {
        await this.cityInputField.click();
        const cityElement = await this.page.locator("//div[contains(@id, 'react-select-4-option') and text()= '" + city + "']");
        await cityElement.click();
    }
    async uploadFile(fileName) {
        await this.uploadPictureField.setInputFiles("DemoQA/Resources/" + fileName);
    }

}
module.exports = { PracticeFormPage };
