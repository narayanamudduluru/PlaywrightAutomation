const {test, expect} = require('@playwright/test');

test('Hidden Dropdown' , async({page})=>{
 
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.locator("//input[@name='username']").fill('Admin');
    await page.locator("//input[@name='password']").fill('admin123');
    await page.locator("//button[@type='submit']").click();

    await page.getByRole('link', {name: 'PIM'}).click();

    //Clicking on Dropdown.
    await page.locator("(//i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow'])[3]").click()

    await page.waitForTimeout(3000)

    //Select an  option from the dropdown.
    const options= await page.$$("//div[@role='listbox']//div//span")

    for(let option of options)
    {
       const Jobtitles = await option.textContent();
       //console.log(Jobtitles);
       if(Jobtitles.includes('QA Engineer'))
       {
            await option.click();
            break;

       }
     
    }

    await page.waitForTimeout(5000);


})