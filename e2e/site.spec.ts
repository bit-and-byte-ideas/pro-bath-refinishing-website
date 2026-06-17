/// <reference lib="dom" />
import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

// ── Page shell ────────────────────────────────────────────────────────────────

test('has correct page title', async ({ page }) => {
  await expect(page).toHaveTitle(/Pro Bath Refinishing/)
})

test('hero renders h1', async ({ page }) => {
  await expect(
    page.getByRole('heading', { level: 1, name: /better than new/i }),
  ).toBeVisible()
})

test('phone number links to correct tel href', async ({ page }) => {
  const link = page.getByRole('link', { name: /781-6348/ }).first()
  await expect(link).toHaveAttribute('href', 'tel:+16197816348')
})

// ── Navigation ────────────────────────────────────────────────────────────────

test('desktop nav contains all section links', async ({ page }) => {
  // Desktop Chrome viewport (1280×720) — hamburger is hidden above 1024px
  const nav = page.locator('.nav__links')
  for (const label of ['Services', 'Process', 'Finishes', 'Gallery', 'Why Us', 'Contact']) {
    await expect(nav.getByRole('link', { name: label })).toBeVisible()
  }
})

// ── Stats bar ─────────────────────────────────────────────────────────────────

test('stats bar shows four items', async ({ page }) => {
  await expect(page.locator('.stats__item')).toHaveCount(4)
})

// ── Services section ──────────────────────────────────────────────────────────

test('services section shows five service cards', async ({ page }) => {
  await expect(
    page.locator('.service-card:not(.service-card--cta)'),
  ).toHaveCount(5)
})

test('services section has a CTA card', async ({ page }) => {
  await expect(page.locator('.service-card--cta')).toHaveCount(1)
})

// ── Process section ───────────────────────────────────────────────────────────
// Includes regression coverage for bugs fixed 2026-06-16:
//   • section-title was dark ink on dark-navy background (now forced white)
//   • <ol> retained browser list markers alongside .process__num spans

test('process section title is white on the dark background', async ({ page }) => {
  const heading = page.getByRole('heading', {
    name: /simple path to a like-new finish/i,
  })
  const color = await heading.evaluate((el) => getComputedStyle(el).color)
  expect(color).toBe('rgb(255, 255, 255)')
})

test('process list items have no browser list-style markers', async ({ page }) => {
  const step = page.locator('.process__step').first()
  const listStyleType = await step.evaluate((el) => getComputedStyle(el).listStyleType)
  expect(listStyleType).toBe('none')
})

test('process section shows four steps', async ({ page }) => {
  await expect(page.locator('.process__step')).toHaveCount(4)
})

// ── Finishes section ──────────────────────────────────────────────────────────

test('finishes section shows six finish cards', async ({ page }) => {
  await expect(page.locator('.finish-card')).toHaveCount(6)
})

// ── Gallery ───────────────────────────────────────────────────────────────────

test('gallery grid contains twelve items', async ({ page }) => {
  await expect(page.locator('.gallery__item')).toHaveCount(12)
})

test('clicking a gallery item opens the lightbox', async ({ page }) => {
  await page.locator('.gallery__item').first().click()
  await expect(page.locator('.lightbox')).toBeVisible()
})

test('Escape key closes the lightbox', async ({ page }) => {
  await page.locator('.gallery__item').first().click()
  await expect(page.locator('.lightbox')).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(page.locator('.lightbox')).not.toBeVisible()
})

// ── Contact form ──────────────────────────────────────────────────────────────

test('submitting an empty contact form shows required-field errors', async ({ page }) => {
  await page.getByRole('button', { name: /send & text us/i }).click()
  await expect(page.getByText(/please tell us your name/i)).toBeVisible()
  await expect(page.getByText(/let us know what you/i)).toBeVisible()
})
