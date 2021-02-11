const puppeteer = require("puppeteer");

describe("Puppeteer test", () => {
  it("it is testing for Title", async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://localhost:3000/test-ci-cd");
    const title = await page.$eval(".todo_list", (e) => e.innerHTML);
    expect(title).toBe("Todo List");
    browser.close();
  });

  it("it is testing for count of li tag", async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://localhost:3000/test-ci-cd");
    const liArray = await page.evaluate(() => {
      return document.querySelectorAll("li").length;
    });
    expect(liArray).toBe(0);
    browser.close();
  });

  it("it is testing for count of li tag", async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://localhost:3000/test-ci-cd");
    await page.type(".input_field", "CI/CD");
    await page.click(".add_btn", { clickCount: 1 });
    await page.type(".input_field", "testing with jest");
    await page.click(".add_btn", { clickCount: 1 });
    const liArray = await page.$$eval("li", (li) => li.length);
    expect(liArray).toBe(2);
  });
});
