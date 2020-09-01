const LoginActions = require('../../Login/actions/login_pa');
const LandingActions = require('../../Landing/actions/landing_pa');
const credentials = require('../../../testData.json');
const assert = require('assert');
const MainActions = require('../../Main/actions/main_pa');
const AccountSettingsAuthorActions = require('./actions/author_as_pa');
const AccountSetiingsAuthorObject = require('./page/author_as_po');

const pageSteps = new LoginActions();
const landingPageSteps = new LandingActions();
const mainPageSteps = new MainActions();
const accountSettingAuthorSteps = new AccountSettingsAuthorActions();
const accountSettingAuthorObject = new AccountSetiingsAuthorObject();

describe.only('author account settings page tests', () =>{
    
    beforeEach(() =>{
        browser.maximizeWindow();
        browser.url(credentials.appURL);
        landingPageSteps.clicklogInButton();
    });

    afterEach(() =>{
        browser.reloadSession();
    });

    xit('should save users account settings with valid only mandatory fields', () =>{
        pageSteps.logIn(credentials.accountSettingsAuthorEmail, credentials.accountSettingsAuthorPassword);
        assert.equal(mainPageSteps.isProfileBoxDisplayed(), true);
        mainPageSteps.clickOnProfileMenu();
        mainPageSteps.clickOnAccountSettings();
        accountSettingAuthorSteps.clearAllInputs();
        accountSettingAuthorSteps.fillFirstName('Dimasss');
        accountSettingAuthorSteps.fillLastName('Dukdf');
        accountSettingAuthorSteps.selectLocation('Uganda');
        browser.pause(10000);
        accountSettingAuthorSteps.clickSave();
        assert.equal(mainPageSteps.getNotificationMessage(), 'Success. Your profile has been updated.');
    });

    it('should save users account settings with valid only ordinary fields', () =>{
        pageSteps.logIn(credentials.accountSettingsAuthorEmail, credentials.accountSettingsAuthorPassword);
        assert.equal(mainPageSteps.isProfileBoxDisplayed(), true);
        mainPageSteps.clickOnProfileMenu();
        mainPageSteps.clickOnAccountSettings();
        assert.equal(accountSettingAuthorSteps.getLAbel(), 'Account Settings', 'Author is not at Account Settings page');
        accountSettingAuthorSteps.clearAllInputs();
        accountSettingAuthorSteps.fillFirstName('');
        accountSettingAuthorSteps.fillLastName('');
        accountSettingAuthorSteps.fillCompanyName('BSA');
        accountSettingAuthorSteps.fillJobTitle('QA');
        accountSettingAuthorSteps.fillPersonalWebsite('');
        accountSettingAuthorSteps.fillTwitter('');
        accountSettingAuthorSteps.selectLocation('Ukraine');
        accountSettingAuthorSteps.fillBiography('');
        browser.pause(20000);
        assert.equal(accountSettingAuthorObject.buttonSave.getAttribute('class').split(' ')[1], 'disabled', 'button save is not disabled');
    });

    xit('should save users account settings with all valid fields', () =>{
        pageSteps.logIn(credentials.accountSettingsAuthorEmail, credentials.accountSettingsAuthorPassword);
        assert.equal(mainPageSteps.isProfileBoxDisplayed(), true);
        mainPageSteps.clickOnProfileMenu();
        mainPageSteps.clickOnAccountSettings();
        assert.equal(accountSettingAuthorSteps.getLAbel(), 'Account Settings', 'Labels differ');
        accountSettingAuthorSteps.clearAllInputs();
        accountSettingAuthorSteps.fillFirstName('Illia');
        accountSettingAuthorSteps.fillLastName('Starodubtcev');
        accountSettingAuthorSteps.fillCompanyName('EPAM');
        accountSettingAuthorSteps.fillJobTitle('Automation QA Java');
        accountSettingAuthorSteps.fillPersonalWebsite('https://www.facebook.com/profile.php?id=100040191378056');
        accountSettingAuthorSteps.fillTwitter('oli_ollo');
        accountSettingAuthorSteps.selectLocation('Ukraine');
        accountSettingAuthorSteps.fillBiography('Usual homosapiens');
        accountSettingAuthorSteps.clickSave();
    });
});