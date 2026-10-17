import { Page,Locator } from "@playwright/test";

export class WebPom{
    readonly page : Page;
    readonly name : Locator;
    readonly email : Locator;
    readonly password : Locator;
    readonly submit : Locator;
    readonly reset : Locator;

    constructor(page:Page){
        this.page = page;
        this.name = page.locator('[placeholder="Enter your name"]');
        this.email = page.locator('[maxlength="254"]');
        this.password = page.locator('[rows="3"]');
        this.submit = page.getByTestId('btn-submit-text-inputs');
        this.reset = page.locator('#btn-reset-text-inputs');
    }
 
async details(name:string,email:string,password:string){
    await this.name.fill(name);
    await this.email.fill(email);
    await this.password.fill(password);
    await this.submit.click();
    await this.reset.click();
}
async navigateTo(){
    await this.page.goto('https://www.playwrightautomation.com/practice.html');
}
}