import { expect, test } from "@playwright/test";

test(`Testframe`, async({page}) =>{

await page.goto ('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm');

page.on("dialog",async(alert)=>{
const message = alert.message();
console.log(message);

const alertType = alert.type();
console.log(`The type of the alert is ${alertType} `);

if(alertType==="confirm"){
await alert.accept()
} else if(alertType==="prompt"){
  await alert.accept("Testleaf")  
} else
await alert.dismiss();
})

const frame = page.frameLocator(`#iframeResult`)
await frame.locator(`//button[@onclick='myFunction()']`).click();

const awaitMsg = await frame.locator(`//p[@id='demo']`).innerText();

await expect(awaitMsg).toContain("You pressed OK!")
console.log(awaitMsg);


}
)