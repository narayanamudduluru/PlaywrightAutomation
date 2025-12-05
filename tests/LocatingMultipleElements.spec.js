const {test, expect} = require('@playwright/test');

test('LocateMultileElement', async({page})=>{

   await page.goto('https://www.demoblaze.com/index.html')

/*  const AllLinks = await page.$$('a');

  for(const link of AllLinks)
  {
    const linktext = await link.textContent();
    console.log(linktext);

  }*/
    await page.waitForSelector("//div[@id ='tbodyid']//h4/a");

    const products = await page.$$("//div[@id ='tbodyid']//h4/a")

    for(let product of products)
    {
      const productname = await product.textContent();
      console.log(productname);
    }

})