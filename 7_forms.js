const puppeteer = require('puppeteer')

let config = {launchOptions : { headless:false,slowMo:50, devtools:false,defaultViewport:{width:1400, height: 720} }}
let login = {
    fname : 'input[name="first_name"]',
    lname : 'input[name="last_name"]',
    email : 'input[name="email"]',
    phone : 'input[name="phone"]',
    adress : 'input[name="address"]',
    city : 'input[name="city"]',
    state : 'select[name="state"]',
    state_name : 'Arizona',
    zip : 'input[name="zip"]',
    web : 'input[name="website"]',
    description : 'textarea[name="comment"]',
    hosting : 'input[value="yes"]'
}
puppeteer.launch(config.launchOptions).then(async browser => {
    const page = await browser.newPage()

    await page.goto("https://www.seleniumeasy.com/test/input-form-demo.html")
    
    await page.waitForSelector('#contact_form')
    await page.type(login.fname, 'Hrithik');
    await page.type(login.lname, 'Sharma')
    await page.type(login.email, 'hrithik@gmail.com')
    await page.type(login.phone, '9128722410')
    await page.type(login.adress, 'Aropur, Rupauli')
    await page.type(login.city, 'Muzaffarpur')
    await page.select(login.state, login.state_name)
    await page.type(login.zip, '843106')
    await page.type(login.web, 'www.gowox.com')
    await page.click(login.hosting)
    await page.type(login.description,'Hey! this is hrithik')
    await page.click('button[type="submit"]')
    //await browser.close()
})