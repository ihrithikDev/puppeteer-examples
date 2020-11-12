const puppeteer = require('puppeteer')

let config = {launchOptions : { headless:false,slowMo:40, devtools:false,defaultViewport:{width:1400, height: 720} }}
let login = {
    
}
puppeteer.launch(config.launchOptions).then(async browser => {
    const page = await browser.newPage()

    await page.goto("https://www.irctc.co.in/nget/train-search", {waitUntil:"networkidle2"})
    
    await page.evaluate(() => {
        console.log("Ritik")
        document.querySelector('.btn-primary').click();
        console.log("Kumar")
    })
    await page.type('input[placeholder="From*"]','MUZAFFARPUR JN - MFP', {delay:50})
    await page.type('input[placeholder="To*"]', 'NEW DELHI - NDLS', {delay:50})
    await page.click('button[label="Find Trains"]')

    
    
    //await browser.close()
})