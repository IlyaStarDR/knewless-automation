const LandingPage = require('../page/landing_po')
const credentials = require('../../../testData.json');
const page = new LandingPage();

class LandingActions{
    
    clicklogInButton(){
        this.waitForLogInButton();
        page.loginBtn.click();
    }

    waitForLogInButton(){
        page.loginBtn.waitForDisplayed(2000);
    }
}

module.exports = LandingActions;