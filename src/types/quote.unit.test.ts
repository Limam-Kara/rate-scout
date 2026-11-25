import { describe, expect, it } from "vitest";
import {
  COUNTRY_NAMES,
  PROVIDER_URLS,
  RECEIVE_OPTIONS,
  SEND_OPTIONS,
  matchesQuoteCategory,
} from "./quote";

describe("matchesQuoteCategory", () => {
  it("returns true for any category when filter is 'all'", () => {
    expect(matchesQuoteCategory("Bank Deposit", "all")).toBe(true);
    expect(matchesQuoteCategory("Retrait en Espèces", "all")).toBe(true);
    expect(matchesQuoteCategory("", "all")).toBe(true);
  });

  it("matches English and French bank deposit labels case-insensitively", () => {
    expect(matchesQuoteCategory("Bank Deposit", "bank")).toBe(true);
    expect(matchesQuoteCategory("BANK TRANSFER", "bank")).toBe(true);
    expect(matchesQuoteCategory("Dépôt Bancaire", "bank")).toBe(true);
    expect(matchesQuoteCategory("virement bancaire", "bank")).toBe(true);
    expect(matchesQuoteCategory("Direct Deposit", "bank")).toBe(true);
    expect(matchesQuoteCategory("Cash Pickup", "bank")).toBe(false);
  });

  it("matches English and French cash pickup labels case-insensitively", () => {
    expect(matchesQuoteCategory("Cash Pickup", "cash")).toBe(true);
    expect(matchesQuoteCategory("CASH", "cash")).toBe(true);
    expect(matchesQuoteCategory("Retrait en Espèces", "cash")).toBe(true);
    expect(matchesQuoteCategory("retrait especes", "cash")).toBe(true);
    expect(matchesQuoteCategory("Mobile Pickup", "cash")).toBe(true);
    expect(matchesQuoteCategory("Bank Deposit", "cash")).toBe(false);
  });

  it("returns false for unknown or empty categories when a specific filter is active", () => {
    expect(matchesQuoteCategory("", "bank")).toBe(false);
    expect(matchesQuoteCategory("", "cash")).toBe(false);
    expect(matchesQuoteCategory("Mobile Wallet", "bank")).toBe(false);
    expect(matchesQuoteCategory("Mobile Wallet", "cash")).toBe(false);
  });
});

describe("quote constants & provider URL fallbacks", () => {
  it("provides valid https URLs for all configured providers", () => {
    for (const [provider, url] of Object.entries(PROVIDER_URLS)) {
      expect(url, `URL for ${provider}`).toMatch(/^https:\/\//);
    }
    expect(PROVIDER_URLS["UnknownProvider"]).toBeUndefined();
  });

  it("has country names for every send and receive option", () => {
    for (const option of [...SEND_OPTIONS, ...RECEIVE_OPTIONS]) {
      expect(COUNTRY_NAMES[option.country]).toBeTruthy();
    }
  });
});
