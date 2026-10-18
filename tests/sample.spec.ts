import { Page, Locator, test, expect } from "@playwright/test"
import { SamplePage } from "../pages/sample.page";

test('Practice', async ({ page }) => {
    const one = new SamplePage(page);
    await one.navigateTo();
    await one.fillForm('Xyz', 'xyz@gmail.com', 'No 00 annanagar, Chennai');
    //await one.fillFormWithData();








    //     await page.getByTestId('learn-more-toggle-m1-checkbox-toggle').click()
    //     await page.locator('#lm-m1-checkbox-toggle-checkboxes-sub-tab-automation').click()
    //     //doubt
    //     const copiedValue = await page.getByTestId('m1-checkbox-toggle-checkboxes-automation-0-playwright-lang-panel-javascript').getByTestId('plm-copy').click();
    //     console.log(copiedValue)
    //     await page.getByTestId('learn-more-toggle-m1-checkbox-toggle').click()

    //     await page.locator('#tooltip-trigger').hover();
    //     await expect(page.getByText('Standard delivery takes 3–5 working days.')).toBeVisible();

    //     await page.getByTestId('dropdown-country').selectOption('india')
    //     await page.getByTestId('dropdown-sorted').selectOption('deer')



    // })



    // // sauce demo login 
    // test ('login page', async({ page }) => {
    //     await page.goto("https://www.saucedemo.com/")
    //     //id for element used here
    //     await page.locator('#user-name').fill("xyz@gmail.com");
    //     //here attribut
    //     await page.locator('[type="password"]').fill("12345678");
    //     //here class
    //     await page.locator('.submit-button.btn_action').click();
    //     await page.waitForTimeout(10000);
    //     await expect(page.getByText('Epic sadface: Username and password do not match any user in this service'))
    //     .toBeVisible();
    //     await page.waitForTimeout(50000);
    //     await page.locator('[viewBox="0 0 384 512"]').click();
})