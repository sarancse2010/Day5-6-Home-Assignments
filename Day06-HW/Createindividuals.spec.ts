//Create the Individuals 
import { chromium, expect, test } from "@playwright/test";


test(`Test to learn CSS Selectors`, async ({ page }) => {
    const browser = await chromium.launch({ headless: false })
    const context = await browser.newContext();
    page = await context.newPage();


    await page.goto(`https://login.salesforce.com/`)
    await page.locator(`#username`).fill(`dilipkumar.rajendran@testleaf.com`)
    await page.locator(`#password`).fill(`TestLeaf@2025`)
    await page.locator(`#Login`).click()
    await page.locator(`//div[@class='slds-icon-waffle']`).click()
    await page.locator(`//button[text()='View All']`).click()
    await page.locator(`//label[text()='Search apps or items...']/following-sibling::div/input`).fill(" Individuals")

    await page.locator(`//mark[text()='Individuals']`).click()
    await page.locator(`//div[@class='slds-context-bar__label-action slds-p-left_none slds-p-right_x-small']`).click()
    await page.locator(`//span[text()='New Individual']`).click()
    await page.locator(`//input[@class='lastName compoundBLRadius compoundBRRadius form-element__row input']`).fill("Mitran")
    await page.locator(`//button[@class='slds-button slds-button_neutral uiButton--brand uiButton forceActionButton']`).click()
    await expect.soft(page.locator(`//span[@class='uiOutputText']/parent::div`)).toHaveText('Mitran');

})