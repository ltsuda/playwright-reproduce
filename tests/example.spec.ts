import { test, expect } from '@playwright/test';


test('getByRole "form" fails', async ({ page }) => {
  await page.goto('https://semantic-ui.com/collections/form.html');

  await expect(page.getByRole('form').first()).toBeVisible()
});


test('locator "form" works', async ({ page }) => {
  await page.goto('https://semantic-ui.com/collections/form.html');

  await expect(page.locator('form').first()).toBeVisible()
});

test('getByLabel without any attribute fails', async ({ page }) => {
  await page.goto('https://semantic-ui.com/collections/form.html');

  await expect(page.getByLabel('First Name').first()).toBeVisible()
});

test('getByText works', async ({ page }) => {
  await page.goto('https://semantic-ui.com/collections/form.html');

  await expect(page.getByText('First Name').first()).toBeVisible()
});
