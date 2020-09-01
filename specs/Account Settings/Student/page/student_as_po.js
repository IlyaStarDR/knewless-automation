class AccountSettingsStudentObject {
    get labelACcountSettings() { return $('//div[contains(text(), "Account Settings")]')}
    get firstName() {return $('//input[@placeholder="First Name"]')}
    get lastName() {return $('//input[@placeholder="Last Name"]')}
    get yearOfBirth() {return $$('div[role="listbox"]')[0]}
    get yearOfExperience() {return $$('div[role="listbox"]')[1]}
    get educationLevel() {return $$('div[role="listbox"]')[2]}
    get levelWithin() {return $$('div[role="listbox"]')[3]}
    get biography() {return $('//textarea[@placeholder="Tell about yourself"]')}
    get tag() {return $('//input[@placeholder="Add new"]')}
    get occupationDeveloper() {return $('//input[@value="Developer"]')}
    get occupationITProffesional() {return $('//input[@value="IT Professional"]')}
    get occupationCreative() {return $('//input[@value="Creative"]')}
    get occupationOther() {return $('//input[@value="Other"]')}
    get location() {return $$('input[aria-autocomplete="list"]')[1]}
    get employmentStatus() {return $$('div[role="listbox"]')[5]}
    get industry() {return $$('div[role="listbox"]')[6]}
    get role() {return $$('div[role="listbox"]')[7]}
    get jobTitle() {return $('//input[@placeholder="Job title"]')}
    get companyName() {return $('//input[@placeholder="Company name"]')}
    get personalWebsite() {return $('//input[@placeholder="Personal website"]')}
    get buttonCancel() { return $('//button[contains(text(), "Cancel")]')}
    get buttonSave() { return $('//button[contains(text(), "Save")]')}
    get image() { return $('//input[@name="image"]')}
}

module.exports = AccountSettingsStudentObject;