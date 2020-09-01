const RegisterPage = require('../page/register_po');
const credentials = require('../../../testData.json');
const page = new RegisterPage();


class RegisterActions{
     
    emailGenerator(){
        browser.newWindow(credentials.emailURL);
        page.newEmail.click();
        page.buttonCopy.click();
        //browser.pause(3000)
    }

    enterGeneratedEmail(value){
        page.emailInput.waitForDisplayed(2000);
        page.emailInput.clearValue();
        page.emailInput.click();
        browser.keys(['Control', 'v']);
        // page.emailInput.setValue(a);
    };


    enterPassword(value){
        page.passwordInput.waitForDisplayed(2000);
        page.passwordInput.clearValue();
        page.passwordInput.setValue(value);
    };
    enterRepeatPassword(value){
       
        page.repeatPasswordInput.waitForDisplayed(2000);
        page.repeatPasswordInput.clearValue();
        page.repeatPasswordInput.setValue(value);
    };


    signUp(){
        //page.signUpButton();
        this.waitSignUpButtonEnabled();
        page.signUpButton.click();
    }

    waitSignUpButtonEnabled(){
        page.signUpButton.waitForEnabled({ timeout: 2000 });
    }
   
    waitForConfirmMessage(){
        page.confirmMessage.waitForDisplayed(2000);
    }

    openConfirmLetter(){
        page.confirmLetter.waitForDisplayed(70000);
        page.confirmLetter.scrollIntoView();
        page.confirmLetter.click();
        page.confirmLink.click();
        browser.pause(10000);
    }

    waitRolePopup(){
        page.rolePopup.waitForDisplayed(60000);
    }
    isDisplayedRolePopup(){
        
        page.rolePopup.isDisplayed();
    }





    // logInAsRegisteredUser(email){
    //     this.waitForLogInButton();
    //     this.enterEmail(email);
    //     this.enterPassword(credentials.password);
    //     this.LogIn();
    // }


    waitForErrorNotification() {
        page.invalidCredsAlert.waitForDisplayed(2000);
    }

    waitForErrorInvalidMessage() {
        page.errorInvalidMessage.waitForDisplayed(2000);
    }


    waitForErrorExistEmail() {
        page.errorExistEmail.waitForDisplayed(2000);
    }

   


    redirectedTo(route){
        browser.pause(2000);
        const url = new URL(browser.getUrl());
        const actualUrl = url.host.toString() + url.pathname.toString();
        return actualUrl.includes(route);
    }



};

module.exports = RegisterActions;