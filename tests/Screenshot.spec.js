//import{test, expect} from '@playwright/test';
const{test,expect} = require ('@playwright/test')

test('page screenshot', async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.screenshot({path: 'tests/Screenshots/'+Date.now()+'Homepage.png'})

});

    test('full page screenshot', async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.screenshot({path: 'tests/Screenshots/'+Date.now()+'Fullpage.png', fullPage:true})

});
    test.only('perticular Locator screenshot', async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("(//div[@class='form-group'])[3]").screenshot({path: 'tests/Screenshots/'+Date.now()+'LocatorPage.png'})

});

//if we want to Take SS automatically for each evry test case ran, we shuld provide Screenshot: 'on' in config page.