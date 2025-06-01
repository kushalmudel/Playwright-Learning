import { test } from '@playwright/test';
 
/* 
# JavaScript is an asynchronous programming language.
# It means codes are not executed sequentially, it will try to execute all the codes at the same time.
# So that we need to use Await to wait that line of code until it gets executed. 
*/

// {browser} is global fixture in Playwright

// browser.newContext() is used to create a new browser context (like a new incognito tab in the browser)

// context.newPage() is used to create a new page in the browser context

/* 
# {page} fixture can be used and it will automatically create a new browser context and a new page in that context
# no need to use browser.newContext() and context.newPage() separately
*/

test('first playwright test', async ({ browser, page }) => {
   
    // const context = await browser.newContext();
    // const page = await context.newPage();
    
    // Navigate to the Playwright website
    await page.goto('https://playwright.dev/');
    
    });
