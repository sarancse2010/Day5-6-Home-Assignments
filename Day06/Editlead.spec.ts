//Edit the Lead
import  { chromium, firefox,webkit ,test} from "@playwright/test";


test('To Learn the locators', async ({page}) => {
    
const browser = await chromium.launch({ headless: false })
    const context = await browser.newContext();
    page = await context.newPage();
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator(`.inputLogin`).first().fill(`Demosalesmanager`)
await page.locator(`.inputLogin`).last().fill(`crmsfa`)
await page.locator(`.decorativeSubmit`).click()
 await page.waitForTimeout(3000)
await page.locator(`//a[contains(text(),'CRM')]`).click()
await page.locator(`//a[text()='Leads']`).click()
await page.locator(`//a[text()='Create Lead']`).click()
await page.locator(`//input[@id='createLeadForm_companyName']`).fill("Test")
await page.locator(`//input[@id='createLeadForm_firstName']`).fill("Saranya")
await page.locator(`//input[@id='createLeadForm_lastName']`).fill("Periyasamy")
await page.locator(`//input[@name='submitButton']`).click()
await page.locator(`//a[text()='Edit']`).click()
await page.locator(`//input[@id='updateLeadForm_companyName']`).clear()
await page.locator(`//input[@id='updateLeadForm_companyName']`).fill("Companyname1")
await page.locator(`//input[@value='Update']`).click()

}



)