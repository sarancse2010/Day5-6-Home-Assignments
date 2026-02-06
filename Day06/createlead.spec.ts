import { chromium, expect, test } from "@playwright/test";

test("Test SalesForce CSS selector", async ({ page }) => {

    const browser = await chromium.launch({ headless: false })
    const context = await browser.newContext();
    page = await context.newPage();

    await page.goto(`https://login.salesforce.com/`)


    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')

    await page.locator('#password').fill('TestLeaf@2025')
    await page.locator('input[class="button r4 wide primary"]').click()

    //Click on toggle menu button from the left corner
    await page.locator('div[class="slds-icon-waffle"]').click()

    //Click view All and click Sales from App Launcher
    await page.locator('//button[@aria-label="View All Applications"]').click()

    await page.locator('//one-app-launcher-app-tile[@data-id="02udN00000537gmQAA"]').click()
    await page.waitForTimeout(3000)


    // Click on Leads tab 
    await page.locator('//one-app-nav-bar-item-root[@data-id ="Lead"]').click()
    //await page.waitForTimeout(3000)

    // //Click on New button
    await page.locator('//div[text()="New"]').click()
    //
    // //Select Salutation dropdown

    await page.locator('//button[@aria-label="Salutation"]').click()


    await page.locator('//span[text()="Mrs."]').click();

    // //Enter the Last Name
    await page.locator('input[name="lastName"]').fill("saranya")


    // // Enter the Company Name
    await page.locator('input[name="Company"]').fill("salesforce")

    await page.locator('//button[@name="SaveEdit"]').click()

    await page.waitForTimeout(10000)
}
)

