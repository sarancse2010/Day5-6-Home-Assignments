// Checkbox functionalities using Playwright 
import { chromium, expect, test } from "@playwright/test";

test(`Test to learn Checkbox functionalities`, async ({ page }) => {
    const browser = await chromium.launch({ headless: false })
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto(`https://leafground.com/checkbox.xhtml`)
    const checkedBasic = await page.locator(`//span[text()='Basic']/preceding-sibling::div/input`).isChecked()
    if (checkedBasic === false) {
        await page.locator(`(//span[text()='Basic']/preceding-sibling::div)[2]`).click()
    }
    const checkedAjax = await page.locator(`//span[text()='Ajax']/preceding-sibling::div/input`).isChecked()
    if (checkedAjax === false) {
        await page.locator(`(//span[text()='Ajax']/preceding-sibling::div)[2]`).click()
        await expect(page.locator(`//span[@class='ui-growl-title']`)).toHaveText('Checked');
    }
    const checkedJava = await page.locator(`//label[text()='Java']/preceding-sibling::div/div/input`).isChecked()
    if (checkedJava === false) {
        await page.locator(`//label[text()='Java']/preceding-sibling::div`).click()
    }
    const checkedJavascript = await page.locator(`//label[text()='Javascript']/preceding-sibling::div/div/input`).isChecked()
    if (checkedJavascript === false) {
        await page.locator(`//label[text()='Javascript']/preceding-sibling::div`).click()
    }
    await page.locator(`//h5[text()='Tri State Checkbox']/parent::div//div[@class='ui-chkbox-box ui-widget ui-corner-all ui-state-default']`).click()
    await expect(page.locator("//span[@class='ui-growl-title']/following-sibling::p").nth(1)).toHaveText('State = 1');
    const checkedToggleSwitch = await page.locator(`//div[@class='ui-toggleswitch-slider']/preceding-sibling::div/input`).isChecked()
    if (checkedToggleSwitch === false) {
        await page.locator(`//div[@class='ui-toggleswitch-slider']`).click()
        await expect(page.locator(`//span[@class='ui-growl-title']`).nth(0)).toHaveText('Checked');
    }
    const disabled1 = await expect(page.locator(`//h5[text()='Verify if check box is disabled']/parent::div[@class='card']//input[@type='checkbox']`)).toBeDisabled()
    console.log(disabled1);
    await page.locator(`//ul[@class='ui-selectcheckboxmenu-multiple-container ui-widget ui-inputfield ui-state-default ui-corner-all']`).click()
    const checkedMiami = await page.locator(`//label[text()='Miami']/preceding-sibling::div[@class='ui-chkbox ui-widget']//input`).isChecked()
    if (checkedMiami === false) {
        await page.locator(`//label[text()='Miami']/preceding-sibling::div[@class='ui-chkbox ui-widget']`).click()
    }
    const checkedLondon = await page.locator(`//label[text()='London']/preceding-sibling::div[@class='ui-chkbox ui-widget']//input`).isChecked()
    if (checkedLondon === false) {
        await page.locator(`//label[text()='London']/preceding-sibling::div[@class='ui-chkbox ui-widget']`).click()
    }
    await page.locator(`//a[@class='ui-selectcheckboxmenu-close ui-corner-all']`).click()

})