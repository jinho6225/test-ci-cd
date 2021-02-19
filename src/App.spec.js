const puppeteer = require("puppeteer");

describe("Puppeteer test", () => {
  let browser = null;
  let page = null;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://localhost:3000/test-ci-cd");
  });

  afterAll(async () => {
    browser.close();
  });

  it('should be titled "Test-CI-CL"', async () => {
    await expect(page.title()).resolves.toMatch("Test-CI-CL");
  });

  it("it is testing for Title", async () => {
    const title = await page.$eval(".todo_list", (e) => e.innerHTML);
    expect(title).toBe("Todo List");
  });

  it("it is testing for count of li tag", async () => {
    await page.waitForSelector("li");
    const liArray = await page.evaluate(() => {
      return document.querySelectorAll("li").length;
    });
    expect(liArray).toBe(20);
  });

  it("it is testing for count of li tag", async () => {
    await page.waitForSelector("li");
    await page.type(".input_field", "CI/CD");
    await page.click(".add_btn", { clickCount: 1 });
    await page.type(".input_field", "testing with jest");
    await page.click(".add_btn", { clickCount: 1 });
    const liArray = await page.$$eval("li", (li) => li.length);
    expect(liArray).toBe(22);
  });

  it("if input field is empty and click ADD btn", async () => {
    await page.waitForSelector("li");
    await page.type(".input_field", "");
    await page.click(".add_btn", { clickCount: 1 });
    const liArray = await page.$$eval("li", (li) => li.length);
    expect(liArray).toBe(20);
  });

  it("test for removeTask1", async () => {
    await page.waitForSelector("li");
    await page.type(".input_field", "CI/CD");
    await page.click(".add_btn", { clickCount: 1 });
    await page.type(".input_field", "testing with jest");
    await page.click(".add_btn", { clickCount: 1 });
    await page.click("li > button", { clickCount: 1 });
    const liArray = await page.$$eval("li", (li) => li.length);
    expect(liArray).toBe(21);
  });

  it("test for removeTask2", async () => {
    await page.waitForSelector("li");
    await page.type(".input_field", "CI/CD");
    await page.click(".add_btn", { clickCount: 1 });
    await page.type(".input_field", "testing with jest");
    await page.click(".add_btn", { clickCount: 1 });
    await page.click("li > span", { clickCount: 1 });
    const liArray = await page.$$eval("li", (li) => li.length);
    expect(liArray).toBe(22);
  });
});
