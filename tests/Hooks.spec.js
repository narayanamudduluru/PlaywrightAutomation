import{test, expect} from '@playwright/test';
//const{test,expect} = require('@playwright/test')

let page;

//Here we can also use beforeEach
test.beforeAll(async ({browser})=>{
    page = await browser.newPage();
    await page.goto("https://www.demoblaze.com/")
    //Login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('lakshminarayana')
    await page.locator('#loginpassword').fill('Mln@1912')
    await page.locator("//button[normalize-space()='Log in']").click()
    await page.waitForTimeout(3000)

})

//Here we can also use AfterEach
test.afterAll(async()=>{
    //Log out
    await page.locator("#logout2").click();

})

    //Home page validation
    test('home page test', async()=>{
        const products = await page.$$('.hrefch')
        expect(products).toHaveLength(9)

    });

    //add item to cart
    test('Add to cart test', async()=>{

        await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
        await page.locator("//a[normalize-space()='Add to cart']").click()

        page.on('dialog', async dialog=>{
            expect(dialog.message()).toContain('Product added.')
            await dialog.accept()
        })

});