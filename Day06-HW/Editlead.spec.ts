//Edit the Lead


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
    await page.locator(`//input[@name='Lead-search-input']`).fill(`saranya`)
    await page.keyboard.press('Tab');
    await page.locator(`(//button[@class='slds-button slds-button_icon-border slds-button_icon-x-small'])[1]`).click()
    await page.locator(`//div[text()='Edit']`).click() 
    await page.locator(`//button[@name='salutation']`).click() 
    await page.locator(`(//span[text()='Mrs.'])[2]`).click(); 
    await page.locator(`//input[@name='lastName']`).clear()
    await page.locator(`//input[@name='lastName']`).fill('Balamurugan')
    await page.locator(`//input[@name='Company']`).clear()
    await page.locator(`//input[@name='Company']`).fill(`Leaf`)
    await page.locator(`//button[@name='SaveEdit']`).click()
    await page.locator(`//input[@name='Lead-search-input']`).fill(`Balamurugan`)
    await page.keyboard.press('Tab');
    await expect.soft(page.locator(`(//span[@class='slds-grid slds-grid_align-spread'])[2]`)).toContainText('Balamurugan');
    await expect.soft(page.locator(`(//span[@class='slds-grid slds-grid_align-spread'])[4]`)).toContainText('Leaf');
})