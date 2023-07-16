import { test, expect } from '@playwright/test';

test('add todo', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').fill('aaa');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('bbb');
  await page.getByPlaceholder('What needs to be done?').press('Enter');

  await expect(page.getByText('aaa')).toBeVisible();
  await expect(page.getByText('bbb')).toBeVisible();
});