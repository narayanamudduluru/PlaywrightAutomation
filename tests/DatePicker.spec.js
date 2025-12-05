import {test, expect} from '@playwright/test';
//const {test,expect} = require('@playwright/test');

test('Date Picker', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(3000);
    await page.mouse.wheel(0,1000);
    //await page.fill("//input[@id='datepicker']",'03/15/2024');

    //specific date picker
    const year = "2026"
    const month = "March"
    const date = "20"

    await page.locator("//input[@id='datepicker']").click()

    while(true)
    {
        const currentyear =  await page.locator('.ui-datepicker-year').textContent()
        const currentmonth = await page.locator('.ui-datepicker-month').textContent()
       

        if(currentyear == year && currentmonth == month)
        {
            break;
        }
        //await page.locator("//a[@title='Prev']").click() //prev
        await page.locator("//a[@title='Next']").click() //Next
    }

        //date selection with looping
       /* const dates = await page.$$("//a[@class='ui-state-default']")

        for(const dt of dates)
        {
            if(await dt.textContent() == date)
            {
                await dt.click()
                break;
            }
        }*/

        //Date selction without looping
        await page.locator(`//a[@class='ui-state-default'][text()='${date}']`).click()



    await page.waitForTimeout(5000);

})