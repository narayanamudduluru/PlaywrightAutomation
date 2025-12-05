const {test, expect} = require('@playwright/test');

test('upload single file', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(3000)
    //await page.waitForSelector("//input[@id='singleFileInput']")
    await page.mouse.wheel(0,1200)

    //Upload single file using setInputFiles.
    await page.locator("//input[@id='singleFileInput']").setInputFiles("tests/UploadFiles/LakshmiNarayana_EXP.pdf") 
    await page.waitForTimeout(3000)
    await page.locator("//button[normalize-space()='Upload Single File']").click()
    await page.waitForTimeout(3000)

    //UploadMultiple Files using setInputFiles[]
    await page.locator("#multipleFilesInput").setInputFiles(['tests/UploadFiles/LakshmiNarayana_EXP.pdf', 'tests/UploadFiles/LakshmiNarayana_New.pdf'])
    await page.waitForTimeout(3000)

    await page.locator("//button[normalize-space()='Upload Multiple Files']").click();
    await page.waitForTimeout(5000)

    //Validation of uploaded files.
    expect(await page.locator("//p[@id='multipleFilesStatus']")).toContainText("Size: 268632 bytes")
    //expect(await page.locator("//p[@id='multipleFilesStatus']")).toContainText("LakshmiNarayana_New.pdf")
    await page.waitForTimeout(5000)

    //removing Files
    await page.locator('#multipleFilesInput').setInputFiles([]);
    await page.waitForTimeout(3000)

     
})
