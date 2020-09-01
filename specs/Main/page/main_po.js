class MainPage{
    get profileBox() { return $('//div[@class="styles_profileWrp__2Yjv0"]')}
    get profileMenu() { return $('//img[@alt="Avatar logo"]')}
    get accountSettings() { return $('//a[contains(text(), "Account Settings")]')}
    get notification() { return $('.top-center div') }
}

module.exports = MainPage;