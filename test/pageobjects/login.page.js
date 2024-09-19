const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get hanphone () {
        return $('[id="mobilePhone"]');
    }

    get email () {
        return $('[id="email"]');
    }

    get firstName () {
        return $('[id="firstName"]');
    }

    get lastName () {
        return $('[id="lastName"]');
    }

    get btnDaftar () {
        return $('[data-button-name="register-new"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async register (hanphone,email,firstName,lastName) {
        await this.hanphone.setValue(hanphone)
        await this.email.setValue(email)
        await this.firstName.setValue(firstName);
        await this.lastName.setValue(lastName)
        await this.btnDaftar.click()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
