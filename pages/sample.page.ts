import { Page, Locator, expect } from '@playwright/test';

export class SamplePage {
    readonly page: Page;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly addressInput: Locator;
    readonly submitButton: Locator;
    readonly resetButton: Locator;
    readonly GenderRadio: Locator;
    readonly LearnMoreView: Locator;
    readonly CheckBoxDays: Locator[];
    readonly ToggleNotification: Locator;
    readonly Multiselct: Locator;
    readonly Tooltip: Locator;



    constructor(page: Page) {
        this.page = page;
        this.nameInput = page.locator('[placeholder="Enter your name"]');
        this.emailInput = page.locator('[maxlength="254"]');
        this.addressInput = page.locator('[rows="3"]');
        this.submitButton = page.getByTestId('btn-submit-text-inputs');
        this.resetButton = page.locator('#btn-reset-text-inputs');
        this.GenderRadio = page.locator('[value="female"]');
        this.LearnMoreView = page.getByTestId('learn-more-toggle-m1-text-radio');
        this.CheckBoxDays = [page.getByTestId('checkbox-sunday'), page.getByTestId('checkbox-monday'), page.getByTestId('checkbox-saturday')];
        this.ToggleNotification = page.getByTestId('toggle-notifications');
        this.Multiselct = page.getByTestId('multiselect-colors');
        this.Tooltip = page.locator('#tooltip-trigger');





    }

    async fillForm(name: string, email: string, address: string) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.addressInput.fill(address);
        await this.submitButton.click();
        await this.page.waitForTimeout(5000);
        await expect(this.page.getByText('submitted')).toBeVisible();
        await this.resetButton.click();
        await this.GenderRadio.click();
        await this.LearnMoreView.click();
        await expect(this.page.locator('#lm-m1-text-radio-text-inputs-sub-tab-locators')).toContainText('Locators')
        await this.page.waitForTimeout(3000);
        const a = await this.page.locator('#m1-text-radio-text-inputs-locators-blk-tab-text-input-name').innerText()
        console.log(a);
        await this.CheckBoxDays[0].check();
        await this.CheckBoxDays[1].check();
        await this.page.waitForTimeout(3000);
        await expect(this.page.getByText('Available days')).toContainText('Available days')
        await this.ToggleNotification.click();
        await this.CheckBoxDays[0].check();
        await this.CheckBoxDays[1].check();
        await this.page.waitForTimeout(3000);
        await expect(this.page.getByText('Available days')).toContainText('Available days')
        await this.ToggleNotification.click();
        await this.Multiselct.selectOption(['adidas', 'zara', 'levis', 'hm']);
        await this.Tooltip.hover();
        await expect(this.page.getByText('Standard delivery takes 3–5 working days.')).toBeVisible();
        //await expect(this.page.getByText('visible')).toBeVisible();
        









    }
    async fillFormWithData() {

    }
    async navigateTo() {
        await this.page.goto('https://www.playwrightautomation.com/practice.html');
    }
}
