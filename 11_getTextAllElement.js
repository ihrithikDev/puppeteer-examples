/** 
* Get text from all the matching elements in Puppeteer
*/

// const puppetter = require('puppeteer')

// let config = {launchOptions : { headless:true,slowMo:50, devtools:false,defaultViewport:{width:1400, height: 720} }}


// puppetter.launch(config.launchOptions).then(async browser => {
//     const page = await browser.newPage()
//     await page.goto("https://chercher.tech/")

//     await page.$$eval(".plan-features a", (elements) => {
//         console.log(elements)
//     })
//     await browser.close()
// })

const puppeteer = require('puppeteer');
async function run(){
    const browser = await puppeteer.launch({headless:true})
    const page = await browser.newPage()
    await page.goto('https://chercher.tech/');
    const linkTexts = await page.$$eval(".plan-features a", 
                        (elements) => elements.map(item => item.textContent))
    // var linkTexts = await page.$$eval(".plan-features a",
    //             elements=> elements.map(item=>item.textContent))
// prints a array of text
    await linkTexts.forEach((heading) => {
        console.log(heading)
    })
}
run()