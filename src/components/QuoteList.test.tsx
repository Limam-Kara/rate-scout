import { describe, expect, it, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QuoteList } from "./QuoteList";
import type { Quote } from "@/types/quote";

const SAMPLE_QUOTES: Quote[] = [
  {
    provider: "Wise",
    category: "Bank Deposit",
    rate: 9.85,
    fee: 4.5,
    recipient_gets: 940.68,
    delivery_time: "Within hours",
  },
  {
    provider: "Remitly",
    category: "Cash Pickup",
    rate: 9.95,
    fee: 0,
    recipient_gets: 995.0,
    delivery_time: "Minutes",
    coupon_code: "SAVE10",
  },
  {
    provider: "Sendwave",
    category: "Mobile Wallet",
    rate: 9.7,
    fee: 0,
    recipient_gets: 970.0,
  },
  {
    provider: "Western Union",
    category: "Dépôt Bancaire",
    rate: 9.6,
    fee: 5,
    recipient_gets: 912.0,
  },
  {
    provider: "MoneyGram",
    category: "Retrait en Espèces",
    rate: 9.5,
    fee: 2,
    recipient_gets: 931.0,
  },
  {
    provider: "WorldRemit",
    category: "Bank Deposit",
    rate: 9.4,
    fee: 3,
    recipient_gets: 911.8,
  },
];

describe("QuoteList & QuoteCard", () => {
  it("renders loading skeletons while fetching", () => {
    const { container } = render(
      <QuoteList quotes={[]} isLoading={true} isError={false} sendCurrency="USD" recvCurrency="MAD" />,
    );
    expect(container.querySelectorAll(".animate-pulse").length).toBeGreaterThan(0);
  });

  it("renders error state and triggers onRetry when clicking Try again", async () => {
    const user = userEvent.setup();
    const onRetry = vi.fn();

    render(
      <QuoteList
        quotes={[]}
        isLoading={false}
        isError={true}
        onRetry={onRetry}
        sendCurrency="USD"
        recvCurrency="MAD"
      />,
    );

    expect(screen.getByText(/unable to connect/i)).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /try again/i }));
    expect(onRetry).toHaveBeenCalledTimes(1);
  });

  it("renders empty state when no quotes are returned", () => {
    render(<QuoteList quotes={[]} isLoading={false} isError={false} sendCurrency="USD" recvCurrency="MAD" />);
    expect(screen.getByText(/no quotes found/i)).toBeInTheDocument();
  });

  it("sorts descending by recipient_gets, shows Best Value + diff vs best, and paginates 5 per page", async () => {
    const user = userEvent.setup();
    render(
      <QuoteList
        quotes={SAMPLE_QUOTES}
        isLoading={false}
        isError={false}
        sendCurrency="USD"
        recvCurrency="MAD"
      />,
    );

    expect(screen.getByText("6 providers found")).toBeInTheDocument();

    // Page 1 shows top 5 sorted descending: Remitly (995.00), Sendwave (970.00), Wise (940.68), MoneyGram (931.00), Western Union (912.00)
    expect(screen.getByText("Remitly")).toBeInTheDocument();
    expect(screen.getByText("Best Value")).toBeInTheDocument();
    expect(screen.getByText("-25.00 MAD vs best")).toBeInTheDocument();
    expect(screen.queryByText("WorldRemit")).not.toBeInTheDocument();

    // Navigate to page 2
    await user.click(screen.getByRole("button", { name: /next/i }));
    expect(screen.getByText("WorldRemit")).toBeInTheDocument();
    expect(screen.queryByText("Remitly")).not.toBeInTheDocument();
  });

  it("filters by Bank Deposit and Cash Pickup tabs with bilingual counts", async () => {
    const user = userEvent.setup();
    const onCategoryChange = vi.fn();

    render(
      <QuoteList
        quotes={SAMPLE_QUOTES}
        isLoading={false}
        isError={false}
        sendCurrency="USD"
        recvCurrency="MAD"
        onCategoryChange={onCategoryChange}
      />,
    );

    const bankTab = screen.getByRole("button", { name: /bank deposit/i });
    expect(within(bankTab).getByText("3")).toBeInTheDocument();

    const cashTab = screen.getByRole("button", { name: /cash pickup/i });
    expect(within(cashTab).getByText("2")).toBeInTheDocument();

    await user.click(bankTab);
    expect(onCategoryChange).toHaveBeenCalledWith("bank");
    expect(screen.getByText("3 providers found")).toBeInTheDocument();
    expect(screen.getByText("Wise")).toBeInTheDocument();
    expect(screen.getByText("Western Union")).toBeInTheDocument();
    expect(screen.queryByText("Remitly")).not.toBeInTheDocument();
  });

  it("applies distinct delivery mode badge colors, copies promo code, and opens provider URL", async () => {
    const user = userEvent.setup();
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText },
      configurable: true,
    });
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);

    render(
      <QuoteList
        quotes={SAMPLE_QUOTES.slice(0, 3)}
        isLoading={false}
        isError={false}
        sendCurrency="USD"
        recvCurrency="MAD"
      />,
    );

    // Distinct badge colors (index 0 is the filter tab; index 1 is the QuoteCard badge)
    expect(screen.getAllByText("Bank Deposit")[1].closest("div")).toHaveClass("bg-indigo-50");
    expect(screen.getAllByText("Cash Pickup")[1].closest("div")).toHaveClass("bg-amber-50");
    expect(screen.getByText("Mobile Wallet").closest("div")).toHaveClass("bg-purple-50");

    // Copy coupon code
    await user.click(screen.getByRole("button", { name: /copy coupon code/i }));
    expect(writeText).toHaveBeenCalledWith("SAVE10");

    // Provider CTA uses PROVIDER_URLS fallback
    await user.click(screen.getByRole("button", { name: /send with remitly/i }));
    expect(openSpy).toHaveBeenCalledWith("https://remitly.com", "_blank", "noopener,noreferrer");

    openSpy.mockRestore();
  });
});
