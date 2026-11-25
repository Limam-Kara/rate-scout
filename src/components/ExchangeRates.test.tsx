import { afterEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ExchangeRates } from "./ExchangeRates";

function renderWithQuery(ui: React.ReactElement) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return render(<QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>);
}

describe("ExchangeRates", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders live USD exchange rates from mocked API with tabular-nums", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
      new Response(
        JSON.stringify({
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
        }),
        { status: 200 },
      ),
    );

    renderWithQuery(<ExchangeRates />);

    await waitFor(() => {
      expect(screen.getByText("0.9215")).toBeInTheDocument();
    });

    expect(screen.getByText("Euro")).toBeInTheDocument();
    expect(screen.getByText("British Pound")).toBeInTheDocument();
    expect(screen.getByText("0.9215")).toHaveClass("tabular-nums");
    expect(screen.getByText(/open\.er-api\.com/i)).toBeInTheDocument();
  });

  it("renders error message when the rate API fails", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
      new Response("Service Unavailable", { status: 503 }),
    );

    renderWithQuery(<ExchangeRates />);

    await waitFor(() => {
      expect(screen.getByText(/unable to load live rates/i)).toBeInTheDocument();
    });
  });
});
