class LandingPage {

    constructor(page)
    {
        this.page = page ;
        this.emptyBox = page.locator("div li");
        this.getUser1 = page.getByText("mango");
        this.getUser2 = page.getByText("pinapple")
    }

    async positiveMocking(name1, name2)
    {
        await this.page.route('**/api/v1/fruits', async route => {
            await route.fulfill({
              status: 200,
              contentType: 'application/json',
              body: JSON.stringify([
                { name: name1, id: 21 },
                { name: name2, id: 22 }
              ]),
            });
          });
    }

    async negativeMocking(msg)
    {
        await this.page.route('**/api/v1/fruits', async route => {
            await route.fulfill({
              status: 500,
              contentType: 'application/json',
              body: JSON.stringify([
                {  message: msg}
              ]),
            });
          });
    }

    async gotoLandingPage()
    {
        await this.page.goto('https://demo.playwright.dev/api-mocking')
    }

    
}module.exports = { LandingPage};