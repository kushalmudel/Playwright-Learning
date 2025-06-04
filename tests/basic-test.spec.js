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
  // storing locator in a variable

  const CardTitles = page.locator(".card-body a");
  const userName = page.locator("#username");
  const signInBtn = page.locator("#signInBtn");

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
  await userName.fill("rahulshettyacademys");
  await page.locator("#password").fill("learning");

  // Click the sign-in button
  await signInBtn.click();

  // Wait for the alert to appear
  console.log(await page.locator("[style*='block']").textContent());

  // Assert that the alert text is as expected
  await expect(page.locator("[style*='block']")).toContainText(
    "Incorrect username/password."
  );

  // clearing the input field and filling it and signing in again
  await userName.fill("");
  await userName.fill("rahulshettyacademy");
  await signInBtn.click();

  // Assert that the page contains the expected text
  await expect(
    page.locator(
      "body > app-root:nth-child(2) > app-shop:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > app-card-list:nth-child(2) > app-card:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h4:nth-child(1) > a:nth-child(1)"
    )
  ).toContainText("iphone X");

  // another locator is used to find out second card item is Samsung Note 8
  console.log(
    await page
      .locator(
        "body > app-root:nth-child(2) > app-shop:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > app-card-list:nth-child(2) > app-card:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h4:nth-child(1) > a:nth-child(1)"
      )
      .textContent()
  );

  // extracting all the card titles
  // using locator.allTextContents() method
  // it will return an array of all the text contents of the locator

  const allTitles = await CardTitles.allTextContents();
  console.log(allTitles);

  await page.waitForTimeout(5000);
});
