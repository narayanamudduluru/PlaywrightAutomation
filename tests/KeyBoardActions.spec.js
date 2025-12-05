import {test,expect} from '@playwright/test';
test('keyboardActions', async({page})=>{

    await page.goto("https://gotranscript.com/text-compare")
    await page.locator("//textarea[@name='text1']").fill('Welcome to Automation!')

    //Key Board Actions
    //Ctrl + A select all
    await page.keyboard.press('Control+a')
    await page.waitForTimeout(3000)

    //Ctrl + C Copy 
    await page.keyboard.press('Control+c')
    await page.waitForTimeout(3000)

    //Tab
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')
    await page.waitForTimeout(3000)
    
    //Ctrl + V paste 
    await page.keyboard.press('Control+v')


    await page.waitForTimeout(5000)

})