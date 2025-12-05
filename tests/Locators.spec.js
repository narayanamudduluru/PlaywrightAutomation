//const {test,expect } = require("@playwright/test");
import {test, expect} from '@playwright/test'

test('Locators', async({page})=>{

    await page.goto("https://www.demoblaze.com/")

    //Click on login button -property
    //await page.locator('id=login2').click()
    await page.click('id=login2')

    //provide username - CSS
   // await page.locator('#loginusername').fill("Lakshminarayana")
    await page.fill('#loginusername','Lakshminarayana')

    //provide Password -Xpath
    await page.fill("input[id='loginpassword']", 'Mln@1912')

    //Click on login button
    await page.click("//button[normalize-space()='Log in']")

    await page.waitForTimeout(5000)
    //verify Logout link presence
    const logoutlink = await page.locator("//a[@id='logout2']")

    await expect(logoutlink).toBeVisible();
    
})
