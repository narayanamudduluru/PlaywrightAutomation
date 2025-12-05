import{test,expect} from '@playwright/test';

//npx playwright test Tracing.spec.js --project chromium --headed

test('tests', async({page})=>{

    await page.goto("https://www.demoblaze.com/")
    await page.click('id=login2')
    await page.fill('#loginusername','Lakshminarayana')
    await page.fill("input[id='loginpassword']", 'Mln@1912')
    await page.click("//button[normalize-space()='Log in']")
    await expect(page.locator('#logout2')).toBeVisible()

})