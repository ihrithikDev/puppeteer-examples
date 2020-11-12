const puppeteer = require('puppeteer')

let login = {
    
}
puppeteer.launch(config.launchOptions).then(async browser => {
    const page = await browser.newPage()

    await page.goto("https://www.seleniumeasy.com/test/table-search-filter-demo.html")
    
    await page.waitForSelector('.panel-primary')
    await page.type('input[id="task-table-filter"]', 'Bootstrap 3', {delay:30})
    
    await browser.close()
})