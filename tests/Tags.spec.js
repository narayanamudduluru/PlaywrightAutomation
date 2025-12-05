//npx playwright test Tags.spec.js --project chromium --grep "@sanity"-->this command is used to get only "@sanity" tests.
//npx playwright test Tags.spec.js --project chromium --grep "@reg" -->this command is used to get Only "@Reg" test
//npx playwright test Tags.spec.js --project chromium --grep "@sanity@reg"-->this is used to get both @sanity and @reg
//npx playwright test Tags.spec.js --project chromium --grep "@sanity" --grep-invert "@reg"-->only sanity tests 
//npx playwright test Tags.spec.js --project chromium --grep "@reg" --grep-invert "@sanity"-->only reg tests

const{test, expect} = require('@playwright/test');

test('test1@sanity',async({page})=>{

    console.log("this is test1...")

})
test('test2@sanity',async({page})=>{

    console.log("this is test2...")

})
test('test3@reg',async({page})=>{

    console.log("this is test3...")

})

test('test4@reg',async({page})=>{

    console.log("this is test4...")

})

test('test5@sanity@reg',async({page})=>{

    console.log("this is test5...")

})