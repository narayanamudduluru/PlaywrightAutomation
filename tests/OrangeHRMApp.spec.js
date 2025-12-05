import { test, expect } from '@playwright/test';

test('OHRM', async({page})=>{
  await page.locator('body').click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.locator("//button[@role='none']").click();
  await page.getByRole('textbox').first().click();
  await page.getByRole('textbox').first().fill('Lakshminarayana');
  await page.locator('form i').first().click();
  await page.getByRole('option', { name: 'Admin' }).click();
 // await page.getByRole('textbox', { name: 'Type for hints...' }).click();
 // await page.getByRole('textbox', { name: 'Type for hints...' }).fill('Lakshminarayana');
  await page.locator('form i').nth(1).click();
  await page.getByRole('option', { name: 'Disabled' }).click();
  await page.locator("(//i[@with-container='false'])[3]").click()
  await page.locator("//ul[@role='menu']//li[2]//a").click()

  await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill('narayana');


});