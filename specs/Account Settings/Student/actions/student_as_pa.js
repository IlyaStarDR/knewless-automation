const AccountSettingsStudentObject = require('../page/student_as_po');
const page = new AccountSettingsStudentObject();

class AccountSettingsStudentActions {

    fillFirstName(firstNameValue){
        page.firstName.waitForDisplayed(2000);
        page.firstName.clearValue();
        page.firstName.setValue(firstNameValue);
    };

    fillLastName(lastNameValue){
        page.lastName.waitForDisplayed(2000);
        page.lastName.clearValue();
        page.lastName.setValue(lastNameValue);
    };

    selectYearOfBirth(year){
        page.yearOfBirth.waitForDisplayed(2000);
        page.yearOfBirth.click();
        const elem = $('//div[@role="option"]/span[text()=' + year +']');
        elem.moveTo();
        elem.click();
    };

    selectYearOfExperience(year){
        page.yearOfExperience.waitForDisplayed(2000);
        page.yearOfExperience.click();
        const elem = $('//div[@role="option"]/span[text()=' + year +']');
        elem.moveTo();
        elem.click();
    };

    selectEducationLevel(level){
        page.educationLevel.waitForDisplayed(2000);
        page.educationLevel.click();
        const elem = $('//div[@role="option"]/span[text()="' + level + '"]');
        elem.moveTo();
        elem.click();
    };

    selectLevelWithin(level){
        page.levelWithin.waitForDisplayed(2000);
        page.levelWithin.click();
        const elem = $('//div[@role="option"]/span[text()="' + level + '"]');
        elem.moveTo();
        elem.click();
    };

    fillBiography(biographyValue){
        page.biography.waitForDisplayed(2000);
        page.biography.clearValue();
        page.biography.setValue(biographyValue);
    };

    enterInterests(tag) {
        page.tag.waitForDisplayed(2000);
        page.tag.clearValue();
        page.tag.setValue(tag);
        browser.keys('Enter');
    }

    checkDeveloper() {
        page.occupationDeveloper.waitForDisplayed(2000);
        page.occupationDeveloper.click();
    }

    checkITProfessional() {
        page.occupationITProffesional.waitForDisplayed(2000);
        page.occupationITProffesional.click();
    }

    checkCreative() {
        page.occupationCreative.waitForDisplayed(2000);
        page.occupationCreative.click();
    }

    checkOther() {
        page.occupationOther.waitForDisplayed(2000);
        page.occupationOther.click();
    }

    selectLocation(country){
        page.location.waitForDisplayed(2000);
        page.location.clearValue();
        page.location.setValue(country);
    };

    selectEmploymentStatus(status){
        page.employmentStatus.waitForDisplayed(2000);
        page.employmentStatus.click();
        const elem = $('//div[@role="option"]/span[text()="' + status + '"]');
        elem.moveTo();
        elem.click();
    };

    selectIndustry(industry){
        page.industry.waitForDisplayed(2000);
        page.industry.click();
        const elem = $('//div[@role="option"]/span[text()="' + industry + '"]');
        elem.moveTo();
        elem.click();
    };

    selectRole(role){
        page.industry.waitForDisplayed(2000);
        page.industry.click();
        const elem = $('//div[@role="option"]/span[text()="' + role + '"]');
        elem.moveTo();
        elem.click();
    };

    fillJobTitle(jobTitleValue){
        page.jobTitle.waitForDisplayed(2000);
        page.jobTitle.clearValue();
        page.jobTitle.setValue(jobTitleValue);
    };

    fillCompanyName(companyNameValue){
        page.companyName.waitForDisplayed(2000);
        page.companyName.clearValue();
        page.companyName.setValue(companyNameValue);
    };
    
    fillPersonalWebsite(personalWebsiteValue){
        page.personalWebsite.waitForDisplayed(2000);
        page.personalWebsite.clearValue();
        page.personalWebsite.setValue(personalWebsiteValue);
    }; 
    
    updateImage(dirname){
        // const filePath = path.join(__dirname, '../data/chrome.png');
        page.image.waitForDisplayed(2000);
        const remoteFilePath = browser.uploadFile(dirname);
        page.image.setValue(remoteFilePath);
    };

    clickCancel(){
        page.buttonCancel.waitForDisplayed(2000);
        page.buttonCancel.click();
    };

    clickSave(){
        page.buttonSave.waitForDisplayed(2000);
        page.buttonSave.click();
    };
};

module.exports = AccountSettingsStudentActions;