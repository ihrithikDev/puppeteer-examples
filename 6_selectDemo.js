// const puppeteer = require('puppeteer')

// let config = {launchOptions : { headless:false,slowMo:250, devtools:false,defaultViewport:{width:1381, height: 720} }}

// puppeteer.launch(config.launchOptions).then(async browser => {
//     const page = await browser.newPage()

//     await page.goto("https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html")
    
//     await page.waitForSelector('#select-demo')
//     await page.select('[id="select-demo"]', 'Wednesday')

//     await page.select('[id="multi-select"]', 'Florida','Ohio','Pennsylvania' )
//     await page.click('#printMe')
//     await page.click('#printAll')
//     //await browser.close()
// })

const puppeteer = require('puppeteer');
async function run(){
    const browser = await puppeteer.launch({headless:false})
    const page = await browser.newPage()
    await page.goto('https://chercher.tech/practice/dropdowns');
    await page.select("select#second", 'pizza', 'donut', 'bonda')
    await page.waitFor(30000)
    await browser.close();
}
run()