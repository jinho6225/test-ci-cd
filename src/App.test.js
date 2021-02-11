const puppeteer = require("puppeteer");

describe("Puppeteer test", () => {
  it("it is testing for Title", async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("http://localhost:3000");
    const title = await page.$eval(".todo_list", (e) => e.innerHTML);
    expect(title).toBe("Todo List");
    browser.close();
  });

  it("it is testing for count of li tag", async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("http://localhost:3000");
    const liArray = await page.evaluate(() => {
      return document.querySelectorAll("li").length;
    });
    expect(liArray).toBe(0);
    browser.close();
  });
});
