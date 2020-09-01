const LoginActions = require('../../Login/actions/login_pa');
const LandingActions = require('../../Landing/actions/landing_pa');
const credentials = require('../../../testData.json');
const assert = require('assert');
const MainActions = require('../../Main/actions/main_pa');
const AccountSettingsStudentActions = require('./actions/student_as_pa');

const pageLoginSteps = new LoginActions();
const landingPageSteps = new LandingActions();
const mainPageSteps = new MainActions();
const accountSettingStudentSteps = new AccountSettingsStudentActions();

describe.only('student account settings page tests', () =>{
    
    beforeEach(() =>{
        browser.maximizeWindow();
        browser.url(credentials.appURL);
        landingPageSteps.clicklogInButton();
    });

    afterEach(() =>{
        browser.reloadSession();
    });

    xit('test', () =>{
        pageLoginSteps.logIn(credentials.accountSettingsStudentEmail, credentials.accountSettingsStudentPassword);
        assert.equal(mainPageSteps.isProfileBoxDisplayed(), true);
        mainPageSteps.clickOnProfileMenu();
        mainPageSteps.clickOnAccountSettings();
        assert.equal(mainPageSteps.isProfileBoxDisplayed(), true);
        // accountSettingStudentSteps.fillFirstName('Stewie');
        // accountSettingStudentSteps.fillLastName('Griffin');
        // accountSettingStudentSteps.selectYearOfBirth('1999');
        // accountSettingStudentSteps.selectYearOfExperience('1');
        // accountSettingStudentSteps.selectEducationLevel('High School');
        // accountSettingStudentSteps.selectLevelWithin('Beginner');
        // accountSettingStudentSteps.fillBiography('Stewart Gilligan Griffin is a fictional character from the animated television series Family Guy. He is voiced by series creator Seth MacFarlane and first appeared on television, along with the rest of the Griffin family, in a 15-minute short on December 20, 1998. ');
        // accountSettingStudentSteps.enterInterests('Java');
        // accountSettingStudentSteps.checkOther();
        // accountSettingStudentSteps.checkDeveloper();
        // accountSettingStudentSteps.selectLocation('United States');
        // accountSettingStudentSteps.selectEmploymentStatus('Employee');
        // accountSettingStudentSteps.selectIndustry('Education');
        // accountSettingStudentSteps.selectRole('IT Support');
        // accountSettingStudentSteps.fillJobTitle('Automation QA Java');
        // accountSettingStudentSteps.fillCompanyName('EPAM');
        // accountSettingStudentSteps.fillPersonalWebsite('https://www.facebook.com/profile.php?id=100040191378056');
        // accountSettingAuthorSteps.updateImage('../assets/tactical-cat.jpg');
        //assert.equal(pageSteps.redirectedTo(credentials.loginRoute),true);

        accountSettingStudentSteps.fillFirstName('');
        browser.pause(5000);
        accountSettingStudentSteps.fillLastName('');
        browser.pause(5000);
        accountSettingStudentSteps.selectYearOfBirth('2000');
        browser.pause(5000);
        accountSettingStudentSteps.selectYearOfExperience('5');
        browser.pause(5000);
        accountSettingStudentSteps.selectEducationLevel('Middle School');
        browser.pause(5000);
        accountSettingStudentSteps.selectLevelWithin('Advanced');
        browser.pause(5000);
        accountSettingStudentSteps.fillBiography('');
        browser.pause(5000);
        accountSettingStudentSteps.enterInterests('Java');
        browser.pause(5000);
        // accountSettingStudentSteps.checkOther();
        // accountSettingStudentSteps.checkDeveloper();
        accountSettingStudentSteps.selectLocation('Ukraine');
        browser.pause(5000);
        accountSettingStudentSteps.selectEmploymentStatus('Employee');
        browser.pause(5000);
        accountSettingStudentSteps.selectIndustry('Government');
        browser.pause(5000);
        accountSettingStudentSteps.selectRole('QA');
        browser.pause(5000);
        accountSettingStudentSteps.fillJobTitle('');
        browser.pause(5000);
        accountSettingStudentSteps.fillCompanyName('');
        browser.pause(5000);
        accountSettingStudentSteps.fillPersonalWebsite('');
        browser.pause(20000);

        // accountSettingStudentSteps.clickSave();
        assert.equal(mainPageSteps.getNotificationMessage(), 'Success. Your profile has been updated.');
    });
});