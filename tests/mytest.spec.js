import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('Lakshminarayana');
  await page.locator('#loginpassword').fill('Mln@1912');
  await page.getByRole('button', { name: 'Log in' }).click();

  //await page.locator("(//a[normalize-space()='Laptops'])[1]").click()
  await page.getByRole('link', { name: 'Laptops' }).click();
  //await page.locator("//a[normalize-space()='MacBook Pro']").click()
  await page.getByRole('link', { name: 'Sony vaio i5' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
});