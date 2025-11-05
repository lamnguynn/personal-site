import { expect, test } from '@playwright/test';

test.describe('Clicking points', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('load');
    await page
      .getByTestId('track-point')
      .first()
      .waitFor({ state: 'visible', timeout: 5000 });
  });

  test('Modal opens', async ({ page }) => {
    const points = await page.getByTestId('track-point').all();

    for (const point of points) {
      await point.click();
      const modal = await page.getByTestId('content-modal').all();

      expect(modal.length).toBe(1); // should be 1 modal open
      expect(await modal.at(0)?.isVisible()).toBe(true); // should be visible
    }
  });
});
