const puppeteer = require('puppeteer')

let config = {launchOptions : { headless:false,slowMo:50, devtools:false,defaultViewport:{width:1400, height: 720} }}
let login = {
    name : 'input[name="title"]',
    comment : 'textarea[name="description"]',
    button : 'button[name="btn-submit"]'
}
puppeteer.launch(config.launchOptions).then(async browser => {
    const page = await browser.newPage()

    await page.goto("https://www.seleniumeasy.com/test/ajax-form-submit-demo.html")
    
    await page.waitForSelector('.panel-body')

    await page.type(login.name , "Hrithik Kumar Sharma")
    await page.type(login.comment, "Hey! This is Grast.")

    await page.click(login.button)
    
    await page.waitForSelector('div[id="submit-control"]')
    //await browser.close()
})