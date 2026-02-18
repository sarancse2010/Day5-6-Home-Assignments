//Navigate to https://leafground.com/frame.xhtml

import { chromium, expect, test } from "@playwright/test";

test(`Testframe`, async({page}) =>{

    const browser = await chromium.launch({ headless: false })
        const context = await browser.newContext();
        page = await context.newPage();

    await page.goto("https://leafground.com/frame.xhtml")
    const frame= page.frames();
    //console.log(frame);
 
//Interact with the Click Me button inside frame
const frameRef = page.frameLocator(`[src="default.xhtml"]`)
await frameRef.locator("#Click").click();

//Assert the text changed after clicking the button
await expect(frameRef.locator("#Click")).toHaveText("Hurray! You Clicked Me.")

//Get the total count of frames present in the page 
 
    console.log(`Total no of frames : ${frame.length}`);
   
   
//Interact with the Click Me button present inside the nested frames

  const frameRefOuterframe= page.frameLocator((`[src="page.xhtml"]`))
  const frameRefInnerframe= frameRefOuterframe.frameLocator(`[src="framebutton.xhtml"]`)
await frameRefInnerframe.locator("#Click").click();
await expect(frameRefInnerframe.locator("#Click")).toHaveText("Hurray! You Clicked Me.")

}
)