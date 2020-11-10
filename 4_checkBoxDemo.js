const puppeteer = require('puppeteer')

let config = {launchOptions : { headless:false,slowMo:250, devtools:false,defaultViewport:{width:1381, height: 720} }}

puppeteer.launch(config.launchOptions).then(async browser => {
    const page = await browser.newPage()

    await page.goto("https://www.seleniumeasy.com/test/basic-checkbox-demo.html")

    await page.waitForSelector('#isAgeSelected')
    await page.click('#isAgeSelected')
    await page.click('#check1')

    await browser.close()
})