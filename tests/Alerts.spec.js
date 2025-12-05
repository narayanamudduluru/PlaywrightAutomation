import { test, expect } from '@playwright/test';

test.skip('Handling Alerts with OK!', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.waitForTimeout(3000)
    //Enabling Dialog window handler before action on alerts.
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert')//type of Alert we are handling
        expect(dialog.message()).toContain('I am an alert box!')//To verify what is containg inside the Alert.
        await page.waitForTimeout(3000)
        await dialog.accept();
    })

    await page.getByRole('button', {name:'Simple Alert'}).click();
    await page.waitForTimeout(5000);

});

    test.skip('Handling Alerts with Confirmation dialog!', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.waitForTimeout(3000)
    //Enabling Dialog window handler before action on alerts.
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm')//type of Alert we are handling
        expect(dialog.message()).toContain('Press a button!')//To verify what is containg inside the Alert.
        await page.waitForTimeout(3000)
        await dialog.accept();//close by using ok button.
        //await dialog.dismiss();//closing by using cancel button.

    })

    await page.getByRole('button', {name:'Confirmation Alert'}).click();
    await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed OK!");
    await page.waitForTimeout(5000);

});

    test('Handling Alerts with propmt dialog!', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.waitForTimeout(3000)
    //Enabling Dialog window handler before action on alerts.
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt')//type of Alert we are handling
        expect(dialog.message()).toContain('Please enter your name:')//To verify what is containg inside the Alert.
        await page.waitForTimeout(3000)
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('John');//close by using ok button.
        await page.waitForTimeout(3000)
        //await dialog.dismiss();//closing by using cancel button.

    })

    await page.getByRole('button', {name:'Prompt Alert'}).click();
    await expect(page.locator("//p[@id='demo']")).toHaveText("Hello John! How are you today?");
    await page.waitForTimeout(5000);

});
    