class AccountSettingsAuthorObject {
    get labelACcountSettings() { return $('//div[contains(text(), "Account Settings")]')}
    get firstName() {return $('input[placeholder="First Name"]')}
    get lastName() {return $('input[placeholder="Last Name"]')}
    get companyName() {return $('//input[@placeholder="Company name"]')}
    get jobTitle() {return $('//input[@placeholder="Job title"]')}
    get personalWebsite() {return $('//input[@placeholder="Personal website"]')}
    get twitter() {return $('//input[@placeholder="@nickname"]')}
    get location() {return $('input[aria-autocomplete="list"]')}
    get biography() {return $('//textarea[@placeholder="Tell about yourself"]')}
    get buttonCancel() { return $('//button[contains(text(), "Cancel")]')}
    get buttonSave() { return $('//button[contains(text(), "Save")]')}
    get image() { return $('//input[@name="image"]')}
}

module.exports = AccountSettingsAuthorObject;