import {test, expect} from '@playwright/test';

test('HandleTables', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(3000)
    await page.mouse.wheel(0, 2700);//this is the way to scroll into desired element to be visible on the web page.
    // const TableElement  = await page.locator("//h2[normalize-space()='Pagination Web Table']")
    // await TableElement.scrollIntoViewIfNeeded();//if any perticular element needs to be display on the webpage.
    await page.waitForTimeout(5000)
    const table = await page.locator('#productTable');
    //1)Total number of Columnsand  Rows
    const columns = await page.locator("//table[@id='productTable']//thead//tr//th")//for columns
    console.log("Number of columns:", await columns.count())
    expect(await columns.count()).toBe(4);
    //rows
    const rows = await page.locator("//table[@id='productTable']//tbody//tr")//for rows
    console.log("Number of rows:", await rows.count())
    expect( await rows.count()).toBe(5);

    //2)select the perticular check box for smartwatch 
    // const matchedRow = rows.filter({
    //     has:page.locator('td'),
    //     hasText:'Smartwatch'

    // })
    // await matchedRow.locator('input').check();

    //3)Select multiple products by re-usable function
    //await selectProduct(rows, page, 'Smartphone')
    //await selectProduct(rows, page, 'Tablet')
    //await selectProduct(rows, page, 'Wireless Earbuds')

    //4)Print all product details using loop
    /*for(let i=0; i<await rows.count(); i++)//here it will give rows count and increment
    {
        const row = rows.nth(i)
        const alltds = row.locator('td')

        for(let j=0; j<await alltds.count()-1; j++)//here it will give us coulumns count and increment
        {
            console.log(await alltds.nth(j).textContent())

        }

    }*/
   //5)Read the Data from all the pages in the Table
   const pages = await page.locator('.pagination li a')
   console.log("No of Pages in the table:", await pages.count());

   for(let p=0; p<await pages.count(); p++)//here we are navigating to pages one by one
   {
        if(p>0)
        {
            await pages.nth(p).click();
        }
            for(let i=0; i<await rows.count(); i++)//here it will give rows count and increment
            {
                const row = rows.nth(i)
                const alltds = row.locator('td')

                for(let j=0; j<await alltds.count()-1; j++)//here it will give us coulumns count and increment
                {
                    console.log(await alltds.nth(j).textContent())

                }

            }
             await page.waitForTimeout(3000);

   }
    await page.waitForTimeout(5000);
})

/*async function selectProduct(rows, page, name)//here we had created a re-usable function
{
    const matchedRow = rows.filter
    ({
        has:page.locator('td'),
        hasText: name

    })
    await matchedRow.locator('input').check();

}*/