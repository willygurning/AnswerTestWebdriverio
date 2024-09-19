const Page = require('../pageobjects/page');
const loginPage = require('../pageobjects/login.page');

describe('Cermati Register Test', ()=>{
    it('Successfully Register Account', async ()=>{
        
        await loginPage.open()
        await loginPage.register('08234323432','willy31231@gmail.com','willy','gurning')
        await browser.pause(7000) // pause for complete the captcha manually
        await $('[data-button-name="register-new"]').click()
        await browser.pause(3000)
        await expect(browser).toHaveUrl('https://www.cermati.com/app/verify-otp?isWhatsAppFirst=true&target=/')
        

    })

})