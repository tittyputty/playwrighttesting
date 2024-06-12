const{test,expect} = require('@playwright/test')
test('checkBoxAutomation', async({page}) =>{
   await page.goto('https://testautomationpractice.blogspot.com/')
   await page.locator("//input[@id='monday' and @type='checkbox']").check();
   await expect(await page.locator("//input[@id='monday' and @type='checkbox']")).toBeChecked()
   await expect(await page.locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeTruthy()
   const checkBoxLocators =[
    "//input[@id='monday' and @type='checkbox']",
    "//input[@id='saturday' and @type='checkbox']",
    "//input[@id='friday' and @type='checkbox']"
   ]
   for (const locator of checkBoxLocators)//select multple checkboxes
    {
        await page.locator(locator).check()
    }
    await page.waitForTimeout(5000);

    for (const locator of checkBoxLocators)//select multple checkboxes
    {   if(page.locator(locator).isChecked()){
        await page.locator(locator).uncheck()

       console.log("test");
    }
    }
    await page.waitForTimeout(5000);

})
