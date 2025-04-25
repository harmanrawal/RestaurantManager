import { test, expect } from '@playwright/test';
test.describe('Navbar check Flow', () => {
test('Navbar routes to all main pages', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL('/'); // Ensure the homepage loads correctly

    // Navigate to Tables page
    await page.click('text=Tables');
    await expect(page).toHaveURL(/.*tables/);
    await expect(page.locator('h1')).toContainText('Manage Tables');
    await expect(page.locator('nav')).toBeVisible(); 

    // Navigate to Menu page
    await page.click('text=Menu');
    await expect(page).toHaveURL(/.*menu/);
    await expect(page.locator('h1')).toContainText('Manage Menu');
    await expect(page.locator('nav')).toBeVisible(); 
});
});