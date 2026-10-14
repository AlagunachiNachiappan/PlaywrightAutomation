import{test,expect} from "@playwright/test"

test('Practice',async({page})=>{
    await page.goto('https://www.playwrightautomation.com/practice.html')
    // await page.locator('[placeholder="Enter your name"]').fill('Xyz')
    // await page.locator('[maxlength="254"]').fill('xyz@gmail.com')
    // await page.locator('[rows="3"]').fill('No 00 annanagar, Chennai')
    // await page.waitForTimeout(5000)
    // await page.getByTestId('btn-submit-text-inputs').click()
    // await expect(page.getByText('submitted')).toBeVisible()
    // await page.waitForTimeout(5000)
    // await expect(page.locator('#text-inputs-status')).toContainText('submitted')
    // await page.locator('#btn-reset-text-inputs').click()

    // await page.locator('[id="gender-male"]').click()
    // await page.waitForTimeout(5000)
    // await page.locator('[value="female"]').click()
    
    // await page.getByTestId('learn-more-toggle-m1-text-radio').click()
    // await expect(page.locator('#lm-m1-text-radio-text-inputs-sub-tab-locators')).toContainText('Locators')
    // await page.locator('#m1-text-radio-text-inputs-locators-blk-tab-textarea-address').click()
    // await page.waitForTimeout(3000)
    // await page.locator('#m1-text-radio-text-inputs-locators-blk-tab-locator-examples').click()
    // await page.waitForTimeout(3000)
    // await page.locator('#m1-text-radio-text-inputs-locators-blk-tab-validation-surface').click()
    // await page.waitForTimeout(3000)
    // await page.locator('#m1-text-radio-text-inputs-locators-blk-tab-validation-behaviour').click()
    // await page.waitForTimeout(3000)
    // await page.locator('#m1-text-radio-text-inputs-locators-blk-tab-text-input-name').click()
    // const a = await page.locator('#m1-text-radio-text-inputs-locators-blk-tab-text-input-name').innerText()
    // console.log(a)

    // await page.getByTestId('checkbox-sunday').click()
    // await page.getByTestId('checkbox-monday').check()
    // await page.getByTestId('checkbox-saturday').check()
    // await expect(page.getByText('Available days')).toContainText('Available days')
    // await page.getByTestId('toggle-notifications').click()

    // await page.getByTestId('learn-more-toggle-m1-checkbox-toggle').click()
    // await page.locator('#lm-m1-checkbox-toggle-checkboxes-sub-tab-automation').click()
    // //doubt
    // const copiedValue = await page.getByTestId('m1-checkbox-toggle-checkboxes-automation-0-playwright-lang-panel-javascript').getByTestId('plm-copy').click();
    // console.log(copiedValue)
    // await page.getByTestId('learn-more-toggle-m1-checkbox-toggle').click()

    // await page.locator('#tooltip-trigger').hover();
    // await expect(page.getByText('Standard delivery takes 3–5 working days.')).toBeVisible();

    await page.getByTestId('dropdown-country').selectOption('india')
    await page.getByTestId('dropdown-sorted').selectOption('deer')



})



// sauce demo login 
test ('login page', async({ page }) => {
    await page.goto("https://www.saucedemo.com/")
    //id for element used here
    await page.locator('#user-name').fill("xyz@gmail.com");
    //here attribut
    await page.locator('[type="password"]').fill("12345678");
    //here class
    await page.locator('.submit-button.btn_action').click();
    await page.waitForTimeout(10000);
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service'))
    .toBeVisible();
    await page.waitForTimeout(50000);
    await page.locator('[viewBox="0 0 384 512"]').click();
})