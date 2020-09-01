const MainPage = require('../page/main_po');
const page = new MainPage();

class MainActions{
    isProfileBoxDisplayed(){
        page.profileBox.waitForDisplayed(2000);
        return page.profileBox.isDisplayed();
    }

    clickOnProfileMenu(){
        page.profileMenu.waitForDisplayed(2000);
        page.profileMenu.click();
    }

    clickOnAccountSettings() {
        page.accountSettings.waitForDisplayed(2000);
        page.accountSettings.click();
    }

    getNotificationMessage() {
        page.notification.waitForDisplayed(2000);
        return page.notification.getText();
    }
}

module.exports = MainActions;