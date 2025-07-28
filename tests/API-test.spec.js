const { test, expect } = require('@playwright/test');
const { LandingPage } = require("../page-objects/landing-page");

test.describe('Mocking the Api', () => {

    const name1 = "mango";
    const name2 = "pinapple";
    const msg = "Internal Server Error";


    test('mock fruit API and verify UI', async ({ page }) => {
        let landingPage = new LandingPage(page);
        await landingPage.positiveMocking(name1, name2);
        await landingPage.gotoLandingPage();
        //await page.pause();
        await expect(landingPage.getUser1).toBeVisible();
        await expect(landingPage.getUser2).toBeVisible();
    });
    test('mock fruit API and verify ', async ({ page }) => {

        let landingPage = new LandingPage(page);
        await landingPage.negativeMocking(msg);
        await landingPage.gotoLandingPage();
        // await page.pause();
        await expect(landingPage.emptyBox).toHaveText("");
    });
});