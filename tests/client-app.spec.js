import { test, expect } from "@playwright/test";

test("Client App Test", async ({ page }) => {
  // Navigate to the client app URL
  await page.goto("https://rahulshettyacademy.com/client");

  // Fill in the username and password fields
  await page.locator("#userEmail").fill("test1.user@gmail.com");
  await page.locator("#userPassword").fill("Tester@123");
  await page.locator("#login").click();

  // waiting for the page to load after login
  await page.waitForLoadState("networkidle");

  //locating all the card titles
  const titles = page.locator(".card-body h5").allTextContents();
  console.log(await titles);

  await page.waitForTimeout(3000);
});
