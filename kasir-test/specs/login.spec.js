const Page = require('../pages/page')
const LoginPage = require('../pages/login.page')
const DashboardPage = require('../pages/dashboard.page')

describe('Kasir Aja Login Test', () => {
    beforeEach(async () => {
        // Open browser
        Page.open('/')
    })

    it('should login failed with invalid user', async () => {
    // Panggil fungsi login
    await LoginPage.login('jonokustadun@gmail.com','11sdwasd');

    // Assertion error message
    await LoginPage.assertErrorMessage('Kredensial yang Anda berikan salah');
    })

    it('should login failed with invalid password', async () => {
    // Panggil fungsi login
    await LoginPage.login('irfanramadhan.contact@gmail.com','k1llu4');

    // Assertion error message
    await LoginPage.assertErrorMessage('Kredensial yang Anda berikan salah');
    })

    it('should login sucessfull', async () => {
    // Panggil fungsi login
     await LoginPage.login('irfanramadhan.contact@gmail.com','password');
       
    // Assertion error message
    await DashboardPage.assertDashboardUrl();
    })
})