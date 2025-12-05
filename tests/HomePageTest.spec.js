const {test,expect} = require('@playwright/test');

test('Home page', async ({page})=>{

    await page.goto('https://www.demoblaze.com/');

    let pageTitle = await page.title();
    await expect(page).toHaveTitle('STORE');
    console.log('Page title is:', pageTitle);
   

    const PageURL = await page.url();
    await expect(page).toHaveURL('https://www.demoblaze.com/');
    console.log('PageURL is:', PageURL);
    

   await page.close();

})