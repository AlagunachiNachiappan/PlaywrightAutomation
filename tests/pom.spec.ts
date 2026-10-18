import { test } from '@playwright/test';
import { DemoPom } from '../pages/pom.page';

test('Click, Double Click, Hover, Tooltip, Static Dropdown', async ({ page }) => {
     const demo = new DemoPom(page);
     await demo.navigateTo();
     await demo.action();

})

