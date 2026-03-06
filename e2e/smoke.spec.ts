// e2e/smoke.spec.ts
import { test, expect } from '@playwright/test'

test('homepage loads with hero content', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('Where Every Meal is a Journey')).toBeVisible()
  await expect(page.getByRole('link', { name: /reserve/i }).first()).toBeVisible()
})

test('menu page loads and filters work', async ({ page }) => {
  await page.goto('/menu')
  await expect(page.getByText('The Menu')).toBeVisible()
  await page.getByRole('button', { name: /starters/i }).click()
  await expect(page.getByText('Delhi Chaat')).toBeVisible()
})

test('our story page loads with route map', async ({ page }) => {
  await page.goto('/our-story')
  await expect(page.getByText('A Love Letter to the Rails')).toBeVisible()
  await expect(page.getByText('India', { exact: true })).toBeVisible()
})

test('navigation links work', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('navigation').getByRole('link', { name: 'Menu' }).click()
  await expect(page).toHaveURL('/menu')
})
