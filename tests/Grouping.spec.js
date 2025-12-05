import{test, expect} from '@playwright/test';

 test.beforeAll(async()=>{

    console.log('This is beforeAll...')

})
        test.afterAll(async()=>{

            console.log('This is afterAll...')

        })

 test.beforeEach(async()=>{

    console.log('This is beforeEach...')

})
        test.afterEach(async()=>{

            console.log('This is afterEach...')

        })

test.describe('Group1', ()=>{
    test('tests 1', async({page})=>{

    console.log('This is Test 1...')

})
        test('tests 2', async({page})=>{

            console.log('This is Test 2...')

        })
})


test.describe.only('Group 2',()=>{

    test('tests 3', async({page})=>{

    console.log('This is Test 3...')

})
        test('tests 4', async({page})=>{

            console.log('This is Test 4...')

        })

})
