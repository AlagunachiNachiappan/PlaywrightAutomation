import { test, expect } from "@playwright/test"
import { WebPom } from "../pages/webpom.page";

test('User-1', async ({ page }) => {
    const web = new WebPom(page);
    await web.navigateTo();
    await web.details('John Doe', 'john@example.com', '123456');

    // await page.waitForTimeout(5000)
    // await expect(page.getByText('submitted')).toBeVisible()
    // await page.waitForTimeout(5000)
    //await expect(page.locator('#text-inputs-status')).toContainText('submitted')

})

test('User-2', async ({ page }) => {
    const web = new WebPom(page);
    await web.navigateTo();
    await web.details('Doe', 'doe@example.com', '12345678');
})