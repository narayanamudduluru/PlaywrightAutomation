const {test, expect}=require ('@playwright/test');
//import { test, expect } from '@playwright/test';

test('AssertionsTest', async({page})=>{

    //opening the APP
    await page.goto('https://demo.nopcommerce.com/register')

    //expect(page).toHaveURL()
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    //expect(page).toHaveTitle()
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //expect(Locator).tobeVisible()  Element is visible or not.
    const logoElement = await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()

    //expect(locator).toBeEnabled()	Element is enabled
    let SearchStoreBox = await page.locator('#small-searchterms')
    await expect(SearchStoreBox).toBeEnabled();

    //expect(locator).toBeChecked()	Checkbox is checked for radio button
   let  maleRadioButton = await page.locator('#gender-male')
   await maleRadioButton.click()
   await expect(maleRadioButton).toBeChecked()

    //check box.
   const NewsLetterCheckBox = await page.locator('#Newsletter')
   await expect(NewsLetterCheckBox).toBeChecked()

    //expect(locator).toHaveAttribute()	Element has a DOM attribute
    const RegisterButton = await page.locator('#register-button')
    await expect(RegisterButton).toHaveAttribute('name', 'register-button')

    //expect(locator).toHaveText()	Element matches text
    const RegisterText = await page.locator('.page-title h1')
    await expect(RegisterText).toHaveText('Register')

    //expect(locator).toContainText()	Element contains text
    const Partialtext = await page.locator('.page-title h1')
    await expect(RegisterText).toContainText('Reg')

    const PersonalDetails = await page.locator("//strong[normalize-space()='Your Personal Details']")
    await expect(PersonalDetails).toContainText('Your Personal')

    //expect(locator).toHaveValue()	Input has a value
    const emailInput = await page.locator('#Email')
    await emailInput.fill("Test@134.com");
    await expect(emailInput).toHaveValue('Test@134.com');

    //expect(locator).toHaveCount()	List has exact number of children


})


