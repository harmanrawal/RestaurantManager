import { test, expect } from '@playwright/test';

test.describe('Add Table Management Flow', () => {

  test('should add tables and verify them in View Tables page', async ({ page }) => {
    const quantity = '2';
    const maxCapacity = '6';

    // Go to the Add Tables page
    await page.goto('/tables');

    // Fill out the form
    await page.fill('input[type="number"]:nth-of-type(1)', quantity);
    await page.fill('input[type="number"]:nth-of-type(2)', maxCapacity);
    await page.getByRole('button', { name: 'Add Tables' }).click();

    // Wait for update
    await page.waitForTimeout(1000);

    // Go to View Tables page
    await page.goto('/tableView');

    // Validate table list exists
    const tableList = page.locator('ul > li');
    const count = await tableList.count();
    expect(count).toBeGreaterThan(0);

    // Additional UI content checks
    await expect(tableList.first()).toContainText('Table');
    await expect(tableList.first()).toContainText('Seats');
  });

  test('should not allow submitting empty table form', async ({ page }) => {
    await page.goto('/tables');
    await page.click('button[type="submit"]');

    // Browser validation will prevent navigation or form submission
    await expect(page).toHaveURL(/.*tables/);
  });
});
