const puppeteer = require('puppeteer')

let config = {launchOptions : { headless:false,slowMo:250, devtools:false,defaultViewport:{width:1381, height: 720} }}

puppeteer.launch(config.launchOptions).then(async browser => {
    const page = await browser.newPage()

    await page.goto("https://www.seleniumeasy.com/test/basic-radiobutton-demo.html")
    await page.waitForSelector(".sidenav")
    await page.click('input[value="Male"]')
    await page.click('#buttoncheck')
    
    await page.click('input[name="gender"]')
    await page.click('[value="5 - 15"]')
    await page.click('[onclick="getValues();"]')

    //await browser.close()
})