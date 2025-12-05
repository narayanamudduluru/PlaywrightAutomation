const {test, expect} = require('@playwright/test')

test('Auto Suggest DroDown', async({page})=>{
    await page.goto('https://www.makemytrip.com/')
    await page.waitForTimeout(10000)
    await page.locator('#fromCity').click()
    await page.locator("//input[@placeholder='From']").fill('Hyderabad')
    await page.waitForSelector("//li[@aria-selected='false']//parent::span//span")

    const fromcityOptions = await page.$$("//li[@aria-selected='false']//parent::span//span")
    
    for(let option of fromcityOptions)
    {
        const value = await option.textContent()
        //console.log(value);
        if(value.includes('Bidar Airport'))
        {
            await option.click()
            break;
        }
    }

    await page.waitForTimeout(5000)
})