const {test, expect}= require('@playwright/test')

test('RadioButton', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator("//input[@id='male']").check()//male
    //await page.check("//input[@id='male']")

    await expect(await page.locator("//input[@id='male']")).toBeChecked();//it will check button got checked or not 
    await expect(await page.locator("//input[@id='male']").isChecked()).toBeTruthy();//returns boolean value.


    await expect(await page.locator("//input[@id='female']").isChecked()).toBeFalsy();//returns boolean value.

    await page.waitForTimeout(5000);

})