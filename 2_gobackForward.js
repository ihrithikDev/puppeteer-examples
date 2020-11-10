const puppeteer = require('puppeteer')

let config = {launchOptions : { headless:false,slowMo:500, devtools:false }}

puppeteer.launch(config.launchOptions).then(async (browser) => {
    const page = await browser.newPage();
    await page.goto("http://example.com/")
    await page.waitForSelector('h1')
    await page.goto('https://dev.to/')
    await page.waitForSelector('.crayons-header__container')
    // go back to example.com
    await page.goBack()
    // goforward to dev.to
    await page.goForward()

    await page.close()  
    // closing the browser
    await browser.close()  
})