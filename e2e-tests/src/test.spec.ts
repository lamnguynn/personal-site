import { expect, test } from '@playwright/test';

test.describe('Sample test', () => {
  test('sample', async () => {
    expect(1 + 1).toBe(2);
  });
});
