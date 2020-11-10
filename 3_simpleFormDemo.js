const puppeteer = require('puppeteer')

let config = {launchOptions : { headless:false,slowMo:50, devtools:false,defaultViewport:{width:1381, height: 720} }}

let configClass = {
    className : 'button[onclick="showInput();"]',
    sumClass : 'button[onclick="return total()"]',
    close : 'a[title="Close"]'
}
puppeteer.launch(config.launchOptions).then(async (browser) => {
    const page = await browser.newPage();
    await page.goto("https://www.seleniumeasy.com/test/basic-first-form-demo.html")
    await page.waitForSelector('.at4win')
    await page.click(configClass.close)
    await page.waitForSelector('#user-message')
    await page.type('#user-message', "Hello! This is Hrithik Sharma", { delay:20 })
    
    await page.waitForSelector(configClass.className)
    await page.click(configClass.className)

    await page.type('#sum1', '5', { delay:20 })
    await page.type('#sum2', '7', { delay:20 })
    await page.click(configClass.sumClass)

    // await page.close()     
    // await browser.close()  
})