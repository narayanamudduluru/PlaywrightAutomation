import {test,expect} from '@playwright/test';

test('frames', async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');

    //total Frames
    //const allframes = await page.frames()
    //console.log("number of frames :", allframes.length);

    //1)Handling frame Using name/url
    // const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    // frame1.fill("[name ='mytext1']", 'Hello');


    //2)Handling frame using frameLocator.
    // const inputBox = await page.frameLocator("frame[src='frame_1.html']").locator("[name ='mytext1']")
    // inputBox.fill('hello');

    //How to handle the Nested frames.
    const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    //frame3.fill("input[name='mytext3']",'hello narayana');

    //nested frame:
    const childframes = await frame3.childFrames()
    await childframes[0].locator("(//div[@class='AB7Lab Id5V1'])[1]").check()//selecting radio button
    await page.waitForTimeout(3000)

    await childframes[0].locator("(//div[@class='uHMk6b fsHoPb'])[1]").click()//selecting check box.
    await page.waitForTimeout(3000)

    await childframes[0].locator("//div[@class='e2CuFe eU809d']").click();
    await page.waitForTimeout(3000)
    await childframes[0].locator("(//span[normalize-space()='Yes'])[2]").click()


    await page.waitForTimeout(5000);

    //command: npx playwright test HandlingFrames.spec.js --project chromium --headed

})