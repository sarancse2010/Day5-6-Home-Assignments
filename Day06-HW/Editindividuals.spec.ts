
//Edit the Individuals
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
    await page.locator(`//span[text()='Individuals']/parent::a`).click()
    await page.locator(`//input[@name='Individual-search-input']`).fill("Mitran")
    await page.keyboard.press('Tab');
    await page.locator(`(//button[@class='slds-button slds-button_icon-border slds-button_icon-x-small'])[1]`).click()
    await page.locator(`//div[@class='forceActionLink' and text()='Edit']`).click()
    await page.locator(`//span[text()='Salutation']/parent::span/following-sibling::div`).click()
    await page.locator(`//*[text()='Mr.' and @class='selected']`).click();
    await page.locator(`//*[@class='firstName compoundBorderBottom form-element__row input']`).fill("Arjun")
    await page.locator(`//*[@class='slds-button slds-button_neutral uiButton--brand uiButton forceActionButton']`).click();
    await expect.soft(page.locator(`(//span[@class='slds-grid slds-grid_align-spread'])[2]`)).toContainText("Arjun")




})
