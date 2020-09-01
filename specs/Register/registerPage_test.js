const assert = require('assert');
const RegisterActions = require('../Register/actions/register_pa');
const LandingActions = require('../Landing/actions/landing_pa');
const credentials = require('../../testData.json');
const RegisterPage = require('../Register/page/register_po');
const pageSteps = new RegisterActions();
const landingPageSteps = new LandingActions();
const page = new RegisterPage();



describe.only('register page tests', () =>{
    
    beforeEach(() =>{
    browser.maximizeWindow();
    browser.url(credentials.appURL);
    landingPageSteps.signUp();

     });

    afterEach(() =>{
    browser.reloadSession();
    });
    xit('should be able to register  with valid credentials', () =>{
        pageSteps.emailGenerator();
        browser.switchWindow('Knewless');
        pageSteps.enterGeneratedEmail();
        pageSteps.enterPassword(credentials.registerPassword);
        pageSteps.enterRepeatPassword(credentials.registerPassword);
        pageSteps.signUp();
        pageSteps.waitForConfirmMessage();
        browser.switchWindow('10 Минутная Почта');
        pageSteps.openConfirmLetter();
        assert.equal(page.rolePopup.isDisplayed(), true);
    });


    xit('should not be able to register with invalid Email', () =>{
        pageSteps.enterEmail(credentials.invalidEmail);
        pageSteps.waitForErrorInvalidMessage ();
        assert.equal(page.errorInvalidMessage.getText(), "Email length must be 5-71(with @) symbols (only digits, Latin letters and special characters allowed).");
    });

    xit('should not be able to register with invalid password', () =>{
        pageSteps.enterEmail(Math.floor(Math.random() *99999) + credentials.email);
        pageSteps.enterPassword(credentials.invalidPassword);
        pageSteps.enterRepeatPassword(credentials.invalidPassword);
        pageSteps.waitForErrorInvalidMessage ();
        assert.equal(page.errorInvalidMessage.getText(), ("Password length must be 8-32 symbols (only digits, Latin letters and special characters allowed)."));
    });

   

    xit('should not be able to register with exit email', () =>{
        pageSteps.enterEmail(credentials.email);
        pageSteps.enterPassword(credentials.registerPassword);
        pageSteps.enterRepeatPassword(credentials.registerPassword);
        pageSteps.signUp();
        pageSteps.waitForErrorExistEmail();
        assert.equal(page.errorExistEmail.getText(), "User with email 'clarkkent@mail.com' is already registered.");
    });
});
