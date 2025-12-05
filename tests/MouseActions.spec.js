import {test , expect} from '@playwright/test';

test('mouse actions', async({page})=>{

    //1)Mouse Hover Actions
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(3000)

    const pointme = await page.locator("//button[normalize-space()='Point Me']")
    const Laptops = await page.locator("//a[normalize-space()='Laptops']")

    await pointme.hover();
    await Laptops.hover();

    await page.waitForTimeout(3000)

    //2Mouse Double Click Action
    //await page.goto("https://testautomationpractice.blogspot.com/")

    const copybtn = await page.locator("//button[normalize-space()='Copy Text']")

    //double click
    await copybtn.dblclick();

    const field2 = await page.locator('#field2')
    await expect(field2).toHaveValue('Hello World!')

    await page.waitForTimeout(3000)

    //3)Drag and Drop
    //await page.goto("https://testautomationpractice.blogspot.com/")

        const sourcebox = await page.locator('#draggable')
        const destinationbox = await page.locator('#droppable')

        //Approch1
        await sourcebox.hover()
        await page.mouse.down()

        await destinationbox.hover()
        await page.mouse.up()

        //Approch2
       // await sourcebox.dragTo(destinationbox);


    await page.waitForTimeout(5000)
})