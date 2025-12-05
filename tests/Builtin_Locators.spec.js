const {test, expect} = require('@playwright/test')

/*
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByTest() to locate by test content.
page.getByLable() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input element  by placeholder.
page.getByAltText() to locate an element, usually image, by its alternative text.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on it's data-testId attribute 
*/

//page.getByAltText() to locate an element, usually image, by its alternative text.
test('Built-inLocators',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const logo = await page.getByAltText('company-branding')
    await expect(logo).toBeVisible()

//page.getByRole() to locate by explicit and implicit accessibility attributes.
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button', {type: 'submit'}).click()

//page.getByTest() to locate by test content.   
   const  name =await page.locator("//p[@class='oxd-userdropdown-name']").textContent()
    await expect(await page.getByText(name)).toBeVisible()
    console.log(name);

    const TimeText=await page.locator("//p[normalize-space()='Time at Work']").textContent()
        await expect(await page.getByText(TimeText)).toBeVisible()
        console.log(TimeText);

   // await page.waitForSelector("//span[normalize-space() = 'Admin']")
    await page.getByRole('link', { name: 'Admin' }).click();
    // await page.locator("//span[normalize-space() = 'Admin']").click()
    // await page.waitForSelector("(//input[@class='oxd-input oxd-input--active'])[2]")
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill('narayana')

    //const Uname = await page.locator("//label[normalize-space()='Username']")
    //await expect(await page.getByLabel(Uname)).toBeVisible()
    //console.log(Uname);


})
