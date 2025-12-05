const {test, expect} = require('@playwright/test');

test('DropDowns', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

   //await page.locator('#country').selectOption({label: 'India'}); //using lable
    //await page.locator('#country').selectOption('India');//using visible text.
    //await page.locator('#country').selectOption({value: 'uk'})//by using value.
    //await page.locator('#country').selectOption({index: 1})//by using Index of the element
    await page.selectOption("#country",'India')//By using direct element locator and Visible text at a time.

    //Assertions:
    //1)check no of options in dropdown
    //const TotalOptions = await page.locator("#country option");
   // await expect(TotalOptions).toHaveCount(10);

   //2)check no of options in dropdown
   //const options= await page.$$("#country option")
   //console.log("No of options : ", options.length)
    //await expect(options.length).toBe(10);

    //3) To check pressence of value in the dropdown.
    //by calling direct Approach
   //const content = await page.locator("#country").textContent()
    //await expect(content.includes('India')).toBeTruthy();

    //4)pressence of value in the dropdown.
    /*const options= await page.$$("#country option")

    for(const option of options)
    {
        console.log(await option.textContent())

    }*/
   //Approach2

//    const options = await page.$$("//select[@id='country']//option")

//     for(const option of options)
//     {
//         let Value = await option.textContent();
        
//         if(Value.includes('france'))
//         {
//            await page.selectOption('#country', Value);
//             break;
//         }
        
//     }

    await page.waitForTimeout(5000);
})