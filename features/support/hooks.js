const { Before, BeforeAll, Status, AfterStep } = require('@cucumber/cucumber');
const {chromium} = require("playwright")
let browser;
let context;
let page;


BeforeAll(async function () {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    // await page.goto("https://demoqa.com/automation-practice-form");
    this.page = page;
  this.context = context;
});

Before(async function(){
    this.page = page;
    this.context = context;
});

AfterStep(async function ({ result }) {
    if (result.status === Status.FAILED) {
      const screenshot = await this.page.screenshot({ path: 'screenshots/fail.png' });
      await this.attach(screenshot, 'image/png');
    }
});