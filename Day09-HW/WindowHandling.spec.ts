import { expect, test } from "@playwright/test";

test(`Window Handling`, async({page, context}) =>{

await page.goto ('http://leaftaps.com/opentaps/control/main');
//Enter the username
await page.locator(`#username`).fill("Demosalesmanager")

//Enter the password
await page.locator(`#password`).fill("crmsfa")

//Click the Login button
await page.locator(`.decorativeSubmit`).click();

// Click CRM/SFA 
await page.locator(`//a[contains(text(),'CRM/SFA')]`).click();

//Click Leads 
await page.locator(`//a[text()='Leads']`).click();

//Click Merge Leads 
await page.locator(`//a[text()='Merge Leads']`).click();

//Click From Lead widget 
const [childPage] = await Promise.all([context.waitForEvent('page'), page.locator(`//img[@src='/images/fieldlookup.gif']`).nth(0).click()]); 

await childPage.locator(`//a[@class='linktext']`).nth(0).click();
await page.bringToFront();

//Click To Lead widget 
const [childPage1] = await Promise.all([context.waitForEvent('page'), page.locator(`//img[@src='/images/fieldlookup.gif']`).nth(1).click()]); 

await childPage1.locator(`(//a[@class='linktext'])[2]`).click();
await page.bringToFront();
  
//Get the message and type of the alert 
page.on("dialog",async(alert)=>{

const message = alert.message(); 
console.log(message); 

const alertType = alert.type(); 
console.log(`The type of the alert is ${alertType} `);

if(alertType==="confirm"){
await alert.accept()
}else if(alertType==="prompt"){
await alert.accept("Testleaf")
}else
await alert.dismiss(); 

//Click Merge button 
await page.locator(`//a[text()='Merge']`).click();

//Assert the title of the page
console.log(await page.title());

})
})
