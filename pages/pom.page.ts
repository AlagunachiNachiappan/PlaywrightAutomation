import { Page,Locator } from "@playwright/test";    

export class DemoPom{
    readonly page : Page;
    readonly clickAction : Locator;
    readonly doubleClickAction : Locator;
    readonly hoverAction : Locator;
    readonly toolTipAction : Locator;

    constructor(page:Page){
        this.page = page;
        this.clickAction = page.getByTestId('single-click-btn');
        this.doubleClickAction = page.getByTestId('double-click-btn');
        this.hoverAction = page.getByTestId('hover-btn');
        this.toolTipAction = page.getByTestId('tooltip-trigger-btn');
    }

    async action(){
        await this.clickAction.click();
        await this.page.waitForTimeout(5000);
        await this.doubleClickAction.dblclick();
        await this.hoverAction.hover();
        await this.toolTipAction.hover();
    }
    async navigateTo(){
        await this.page.goto("https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic");
    }
}