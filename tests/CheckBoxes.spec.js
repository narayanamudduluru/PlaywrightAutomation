const {test, expect}=require('@playwright/test');

test('Checkboxes',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Single checkbox validation.
    await page.locator("//input[@id='sunday']").check();
    await expect( await page.locator("//input[@id='sunday']")).toBeChecked();//we r checking here as checkbox is selected.
    await expect( await page.locator("//input[@id='sunday']").isChecked()).toBeTruthy();//if it is checked 
    //Nagative Scenario
    await expect( await page.locator("//input[@id='monday']").isChecked()).toBeFalsy();//if it is not checked 

    //multi checkbox validation.
    const CheckboxeLocators = ["//input[@id='sunday']",
                                "//input[@id='wednesday']",
                                "//input[@id='saturday']"
                             ]

    for(const locator of CheckboxeLocators )//select multiple checkboxes.
    {
        await page.locator(locator).check();

    }
     await page.waitForTimeout(5000);
     
    for(const locator of CheckboxeLocators )//Unselect multiple checkboxes.
    {
        if(await page.locator(locator).isChecked())
        {
             await page.locator(locator).uncheck();
        }

    }

    await page.waitForTimeout(5000);
})