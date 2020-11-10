const puppeteer = require('puppeteer')

let config = {launchOptions : { headless:false,slowMo:500, devtools:false }}

puppeteer.launch(config.launchOptions).then(async (browser) => {
    const page = await browser.newPage();
    await page.goto("http://example.com/")
    // page is wait for 5 sec then select 'h1'
    //await page.waitFor(5000)
    await page.waitForSelector('h1')
    // reaload the page
    await page.reload()
    await page.waitForSelector('h1')
    // closing the page that we are opening
    await page.close()  
    // closing the browser
    await browser.close()  
})