const assert = require('assert')

describe('Kasir Aja Register Test', () =>{
    it('should click register', async () => {
        // Buka browser dan url
        await browser.url('/')

         // klik register
        await $('//*[@id="root"]/div/div/div/div[2]/div/div[3]/a').click();

        // Masukan nama toko (css locator)
        await $('//*[@id="name"]').setValue('toko kustadun');
        // Masukan email (css locator)
        await $('//*[@id="email"]').setValue('kustadun@gmail.com');
        // Masukin password (css locator)
        await $('//*[@id="password"]').setValue('kustadunganteng');

        // Button klik daftar
        await $('//*[@id="root"]/div/div/div/div[2]/div/button').click();
    })
})

    it('register with invalid email', async () => {
        //Buka browser dan url
        await browser.url('/')
    
        await $('//*[@id="root"]/div/div/div/div[2]/div/div[3]/a').click();

        //masukin nama toko (css locator)
        await $('//*[@id="name"]').setValue('kustadunganteng');
        //masukin email (css locator)
        await $('//*[@id="email"]').setValue('kustadungans');
        //masukin password (css locator)
        await $('//*[@id="password"]').setValue('yakustadun');
        //button register
        await $('//*[@id="root"]/div/div/div/div[2]/div/button').click();

        //message
        const Message = await $('//*[@class="chakra-alert css-qwanz3"]')
        await expect(Message).toHaveTextContaining('"email" must be a valid email')
     
})

    it('empty password', async () => {
        //Buka browser dan url
        await browser.url('/')
    
        await $('//*[@id="root"]/div/div/div/div[2]/div/div[3]/a').click();

        //masukin nama toko (css locator)
        await $('//*[@id="name"]').setValue('koestadoen');
        //masukin email (css locator)
        await $('//*[@id="email"]').setValue('koestadoenkece@gmail.com');
        //masukin password (css locator)
        await $('//*[@id="password"]').setValue('');
        //button register
        await $('//*[@id="root"]/div/div/div/div[2]/div/button').click();

        //message
        const Message = await $('//*[@class="chakra-alert css-qwanz3"]')
        await expect(Message).toHaveTextContaining('"password" is not allowed to be empty')
    
})
