import { expect, test, type Page } from "@playwright/test";

const MOCK_QUOTES = [
  { provider: "Remitly", category: "Cash Pickup", rate: 9.95, fee: 0, recipient_gets: 995.0, delivery_time: "Minutes" },
  { provider: "Wise", category: "Bank Deposit", rate: 9.85, fee: 4.5, recipient_gets: 940.68, delivery_time: "Within hours" },
  { provider: "Sendwave", category: "Mobile Wallet", rate: 9.75, fee: 0, recipient_gets: 975.0, delivery_time: "Instant" },
  { provider: "Western Union", category: "Dépôt Bancaire", rate: 9.6, fee: 5, recipient_gets: 912.0 },
  { provider: "MoneyGram", category: "Retrait en Espèces", rate: 9.5, fee: 2, recipient_gets: 931.0 },
  { provider: "WorldRemit", category: "Bank Deposit", rate: 9.4, fee: 3, recipient_gets: 911.8 },
];

const MOCK_RATES = {
  time_last_update_utc: "Tue, 25 Nov 2026 00:00:00 +0000",
  rates: {
    EUR: 0.9215,
    GBP: 0.7891,
    JPY: 152.34,
    CAD: 1.385,
    AUD: 1.512,
    CHF: 0.8812,
    CNY: 7.245,
    INR: 84.12,
  },
};

async function mockNetwork(page: Page) {
  await page.route("https://arbitragexx.vercel.app/api/quotes*", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(MOCK_QUOTES),
    });
  });

  await page.route("https://open.er-api.com/v6/latest/USD", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(MOCK_RATES),
    });
  });
}

const ROUTES = ["/", "/aboutus", "/feedback", "/privacy-policy", "/terms-of-service"];

test.describe("TransferCompare E2E & Responsive Checks", () => {
  test("desktop (1440x900): full quote comparison flow, filter tabs, pagination, and zero overflow", async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));

    await page.setViewportSize({ width: 1440, height: 900 });
    await mockNetwork(page);

    await page.goto("/");
    await expect(page.getByRole("heading", { name: /find the best rates/i })).toBeVisible();

    const amountInput = page.locator('input[type="number"]');
    await amountInput.fill("200");
    await page.getByRole("button", { name: /compare rates/i }).click();

    await expect(page.getByText("6 providers found")).toBeVisible();
    await expect(page.getByText("Best Value", { exact: true })).toBeVisible();

    // Filter tabs
    await page.getByRole("button", { name: /bank deposit/i }).click();
    await expect(page.getByText("3 providers found")).toBeVisible();

    // Back to All and paginate
    await page.getByRole("button", { name: /^all/i }).click();
    await expect(page.getByText("6 providers found")).toBeVisible();
    await page.getByRole("button", { name: /next/i }).click();
    await expect(page.getByRole("heading", { name: "WorldRemit" })).toBeVisible();

    // Provider CTA exists and is clickable
    await expect(page.getByRole("button", { name: /send with worldremit/i })).toBeVisible();

    // Verify no horizontal overflow across all routes
    for (const route of ROUTES) {
      await page.goto(route);
      const hasOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth,
      );
      expect(hasOverflow, `Horizontal overflow on desktop ${route}`).toBe(false);
    }

    expect(errors).toEqual([]);
  });

  test("mobile (375x812): drawer navigation, quote flow, and zero horizontal overflow", async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));

    await page.setViewportSize({ width: 375, height: 812 });
    await mockNetwork(page);

    await page.goto("/");
    await page.getByRole("button", { name: /compare rates/i }).click();
    await expect(page.getByText("6 providers found")).toBeVisible();

    // Open mobile drawer and navigate to About Us
    await page.getByRole("button", { name: /open navigation menu/i }).click();
    await page.getByRole("link", { name: /about us/i }).click();
    await expect(page).toHaveURL(/\/aboutus$/);
    await expect(page.getByRole("heading", { name: /about transfercompare/i })).toBeVisible();

    // Verify no horizontal overflow across all routes on mobile
    for (const route of ROUTES) {
      await page.goto(route);
      const hasOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth,
      );
      expect(hasOverflow, `Horizontal overflow on mobile ${route}`).toBe(false);
    }

    expect(errors).toEqual([]);
  });
});
