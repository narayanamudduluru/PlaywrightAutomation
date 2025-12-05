const {test, expect} = require('@playwright/test')

test('MultiselectDropDown', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Select multiple Options from the dropDown
   // await page.selectOption('#colors',['Blue','Red', 'Yellow'])

    //Assertions
    //1)Check number of Options in drodown
   // const options = await page.locator('#colors option')
   // await expect(options).toHaveCount(7);

    //2)TO check No of options in using JS Array.
    //const options = await page.$$('#colors option')//$$ will return the element in the form of Array.
    //console.log("Number options:" + options.length)//7
    //await expect(options.length).toBe(7)

    //3)Check presence of the element value in the dropdown.
   const textcontent = await page.locator('#colors').textContent()
   //await expect(textcontent.includes('Red')).toBeTruthy();//+validation
   await expect(textcontent.includes('Black')).toBeFalsy();//- validation

    await page.waitForTimeout(5000);

})