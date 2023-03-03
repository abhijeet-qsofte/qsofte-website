// @ts-check
const { test, expect } = require("@playwright/test")

test("launching ok", async ({ page }) => {
  await page.goto("http://localhost:8000")

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Qsofte | Your IT Partners")
})
