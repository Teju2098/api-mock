const {Given, When, Then} = require('@cucumber/cucumber');
const { LandingPage } = require("../../page-objects/landing-page");
const { expect } = require('@playwright/test');


Given('I moke the result with two fruits {string} and {string}', async function (name1, name2) {
    let landingPage = new LandingPage(this.page);
        await landingPage.positiveMocking(name1, name2);
  });
  When('I land on the landing page', async function () {
    let landingPage = new LandingPage(this.page);
    await landingPage.gotoLandingPage();
  });
  Then('I see the fruits i mocked', async function () {
    let landingPage = new LandingPage(this.page);
    await expect(landingPage.getUser1).toBeVisible();
            await expect(landingPage.getUser2).toBeVisible();
  });



  Given('I moke the result status and a error message {string}', async function (msg) {
    let landingPage = new LandingPage(this.page);
    await landingPage.negativeMocking(msg);
  });

  When('I land on the landing login page', async function () {
    let landingPage = new LandingPage(this.page);
    await landingPage.gotoLandingPage();
    
  });

  Then('I see the list of fruits is empty', async function () {
    let landingPage = new LandingPage(this.page);
    await expect(landingPage.emptyBox).toHaveText("");
  });
