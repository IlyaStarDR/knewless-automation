const AccountSettingsAuthorObject = require('../page/author_as_po');
const page = new AccountSettingsAuthorObject();
// const path = require('path');

class AccountSettingsAuthorActions {

    fillFirstName(firstNameValue){
        page.firstName.waitForDisplayed(2000);
        // page.firstName.clearValue();
        page.firstName.setValue(firstNameValue);
    };

    fillLastName(lastNameValue){
        page.lastName.waitForDisplayed(2000);
        // page.lastName.clearValue();
        page.lastName.setValue(lastNameValue);
    };

    fillCompanyName(companyNameValue){
        page.companyName.waitForDisplayed(2000);
        // page.companyName.clearValue();
        page.companyName.setValue(companyNameValue);
    };

    fillJobTitle(jobTitleValue){
        page.jobTitle.waitForDisplayed(2000);
        // page.jobTitle.clearValue();
        page.jobTitle.setValue(jobTitleValue);
    };

    fillPersonalWebsite(personalWebsiteValue){
        page.personalWebsite.waitForDisplayed(2000);
        // page.personalWebsite.clearValue();
        page.personalWebsite.setValue(personalWebsiteValue);
    };

    fillTwitter(twitterValue){
        page.twitter.waitForDisplayed(2000);
        // page.twitter.clearValue();
        page.twitter.setValue(twitterValue);
    };

    selectLocation(country){
        page.location.waitForDisplayed(2000);
        // page.location.clearValue();
        page.location.setValue(country);
    };

    fillBiography(biographyValue){
        page.biography.waitForDisplayed(2000);
        // page.biography.clearValue();
        page.biography.setValue(biographyValue);
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

    getLAbel() {
        page.labelACcountSettings.waitForDisplayed(2000);
        return page.labelACcountSettings.getText();
    }

    clearAllInputs() {
        page.firstName.clearValue();
        page.lastName.clearValue();
        page.companyName.clearValue();
        page.jobTitle.clearValue();
        page.personalWebsite.clearValue();
        page.twitter.clearValue();
        page.location.clearValue();
        page.biography.clearValue();
    }
};

module.exports = AccountSettingsAuthorActions;