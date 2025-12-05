const {test, expect} = require('@playwright/test')

test('SoftAssertions', async({page})=>{

    await page.goto('https://www.demoblaze.com/')

    //Hard Assertions
    // await expect(page).toHaveTitle('STORE123');
    // await expect(page).toHaveURL('https://www.demoblaze.com/');
    // await expect(page.locator("//a[@id='nava']")).toBeVisible()

    //softAssertions
    await expect.soft(page).toHaveTitle('STORE123');
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/');
    await expect.soft(page.locator("//a[@id='nava']")).toBeVisible()

    

})