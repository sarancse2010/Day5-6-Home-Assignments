//Dropdown and assertion functionalities using Playwright  
import { chromium, expect, test } from "@playwright/test";

test(`Test to learn dropdown`, async ({ page }) => { 
await page.goto(`https://leafground.com/select.xhtml`)
await page.selectOption(`//select[@class="ui-selectonemenu"]`,{label:"Playwright"}) 
const dropdown=page.locator('//select[@class="ui-selectonemenu"]/option')
const dropDownCount=await dropdown.count()
console.log(dropDownCount);

for (let index = 0; index < dropDownCount; index++) {
console.log(await page.locator('//select[@class="ui-selectonemenu"]/option').nth(index).innerText());            
}

const visibleCountry= await page.locator(`//h5[text()='Choose your preferred country.']/parent::div//label`).isVisible()
if (visibleCountry) {
await page.locator(`//h5[text()='Choose your preferred country.']/parent::div//label`).click()
await page.locator(`//li[text()='Brazil']`).click()
}
const visibleCity=await page.locator(`//h5[text()='Confirm Cities belongs to Country is loaded']/parent::div//label`).isVisible()
if (visibleCity) {
await page.locator(`//h5[text()='Confirm Cities belongs to Country is loaded']/parent::div//label`).click() 
await page.locator(`//li[text()='Salvador']`).click()
}
const visibleCourse=await page.locator(`//h5[text()='Choose the Course']/parent::div//button`)
if (visibleCourse) {
await page.locator(`//h5[text()='Choose the Course']/parent::div//button`).click() 
await page.locator('//li[text()="Selenium WebDriver"]').click() 
}
if (visibleCourse) {
await page.locator(`//h5[text()='Choose the Course']/parent::div//button`).click() 
await page.locator('//li[text()="Playwright"]').click()
} 
if (visibleCourse) {
await page.locator(`//h5[text()='Choose the Course']/parent::div//button`).click() 
await page.locator('//li[text()="RestAssured"]').click() 
}
const visibleLanguage=await page.locator(`//h5[text()='Choose language randomly']/parent::div//label`).isVisible()
if (visibleLanguage) {
await page.locator(`//h5[text()='Choose language randomly']/parent::div//label`).click()
await page.locator(`//li[text()='English']`).click()  
}
const visible=await page.locator(`//h5[text()="Select 'Two' irrespective of the language chosen"]/parent::div//label`).isVisible()
if (visible) {
await page.locator(`//h5[text()="Select 'Two' irrespective of the language chosen"]/parent::div//label`).click()
await page.locator(`//li[text()="Two"]`).click()  
}

})