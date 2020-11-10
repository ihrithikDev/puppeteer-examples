const puppeteer = require('puppeteer')

let config = {launchOptions : { headless:false,slowMo:50, devtools:false,defaultViewport:{width:1400, height: 720} }}
let login = {
    
}
puppeteer.launch(config.launchOptions).then(async browser => {
    const page = await browser.newPage()

    await page.goto("https://www.seleniumeasy.com/test/bootstrap-date-picker-demo.html")
    
    await page.waitForSelector('.panel-heading')

    await page.type('input[placeholder="dd/mm/yyyy"]', '01/02/2019')
    //await browser.close()
})