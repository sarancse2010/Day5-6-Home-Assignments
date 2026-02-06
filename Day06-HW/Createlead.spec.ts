//Create the Lead

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
    await page.locator(`//p[text()='Sales']`).click()
    await page.locator(`//span[text()='Leads']/parent::a`).click()
    await page.locator(`//div[contains(text(), 'New')]`).click()
    await page.locator(`//button[@name='salutation']`).click()
    await page.locator(`//span[text()='Mr.']`).click();
    await page.locator(`//input[@name='lastName']`).fill(`saranya`)
    await page.locator(`//input[@name='Company']`).fill(`Testleaf`)
    await page.locator(`//button[@name='SaveEdit']`).click()
        ; await expect.soft(page.locator(`//slot[@name='primaryField']/lightning-formatted-name`)).toHaveText('Mr.  Balamurugan');

})