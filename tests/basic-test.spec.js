import { expect, test } from "@playwright/test";

/*
 * JavaScript is an asynchronous programming language.
 * It means codes are not executed sequentially, it will try to execute all the codes at the same time.
 * So that we need to use Await to wait that line of code until it gets executed.
 */

// {browser} is global fixture in Playwright

// browser.newContext() is used to create a new browser context (like a new incognito tab in the browser)

// context.newPage() is used to create a new page in the browser context

/*
 * {page} fixture can be used and it will automatically create a new browser context and a new page in that context
 * no need to use browser.newContext() and context.newPage() separately
 */

test("first playwright test", async ({ browser, page }) => {
  // const context = await browser.newContext();
  // const page = await context.newPage();

  // Navigate to the Playwright website
  // await page.goto('https://playwright.dev/');

  // Navigate to Google
  // await page.goto('https://www.google.com/');
  // console.log('Page title:', await page.title());

  // Check if the page title is correct
  // await expect(page).toHaveTitle(/Google/);

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  // from now onwards playwright will support fill method, type method is deprecated

  // Fill the username and password fields
  await page.locator("#username").fill("rahulshettyacademys");
  await page.locator("#password").fill("learning");

  // Click the sign-in button
  await page.locator("#signInBtn").click();

  // Wait for the alert to appear
  console.log(await page.locator("[style*='block']").textContent());

  // Assert that the alert text is as expected
  await expect(page.locator("[style*='block']")).toContainText(
    "Incorrect username/password."
  );
});
