import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SearchForm } from "./SearchForm";
import type { Quote } from "@/types/quote";

function renderSearchForm(props: Partial<React.ComponentProps<typeof SearchForm>> = {}) {
  const onSearch = props.onSearch ?? vi.fn();
  return {
    onSearch,
    ...render(
      <TooltipProvider>
        <SearchForm onSearch={onSearch} isLoading={false} {...props} />
      </TooltipProvider>,
    ),
  };
}

describe("SearchForm", () => {
  it("renders initial default values (100, USD-US, MAD-MA)", () => {
    renderSearchForm();

    const amountInput = screen.getByRole("spinbutton");
    expect(amountInput).toHaveValue(100);

    const comboboxes = screen.getAllByRole("combobox");
    expect(comboboxes[0]).toHaveTextContent("USD");
    expect(comboboxes[0]).toHaveTextContent("United States");
    expect(comboboxes[1]).toHaveTextContent("MAD");
    expect(comboboxes[1]).toHaveTextContent("Morocco");
  });

  it("submits updated amount and selected currencies via CurrencyCombobox", async () => {
    const user = userEvent.setup();
    const { onSearch } = renderSearchForm();

    const amountInput = screen.getByRole("spinbutton");
    await user.clear(amountInput);
    await user.type(amountInput, "500");

    // Select EUR - France in sending combobox
    const comboboxes = screen.getAllByRole("combobox");
    await user.click(comboboxes[0]);
    await user.click(screen.getByText("France"));

    // Select PHP - Philippines in receiving combobox
    await user.click(comboboxes[1]);
    await user.click(screen.getByText("Philippines"));

    await user.click(screen.getByRole("button", { name: /compare rates/i }));

    expect(onSearch).toHaveBeenCalledWith({
      amount: 500,
      sendCurr: "EUR",
      recvCurr: "PHP",
      sendCty: "FR",
      recvCty: "PH",
    });
  });

  it("shows one-way directional indicator instead of swap button when corridor is unidirectional", () => {
    renderSearchForm();
    expect(screen.queryByRole("button", { name: /swap currencies/i })).not.toBeInTheDocument();
    expect(screen.getByLabelText("One-way transfer corridor")).toBeInTheDocument();
  });

  it("displays best recipient amount filtered by activeCategory", () => {
    const quotes: Quote[] = [
      { provider: "Wise", category: "Bank Deposit", rate: 9.5, fee: 3, recipient_gets: 921.5 },
      { provider: "Western Union", category: "Cash Pickup", rate: 9.8, fee: 0, recipient_gets: 980.0 },
    ];

    const { rerender } = render(
      <TooltipProvider>
        <SearchForm onSearch={vi.fn()} isLoading={false} quotes={quotes} activeCategory="all" />
      </TooltipProvider>,
    );
    expect(screen.getByText("980.00")).toBeInTheDocument();

    rerender(
      <TooltipProvider>
        <SearchForm onSearch={vi.fn()} isLoading={false} quotes={quotes} activeCategory="bank" />
      </TooltipProvider>,
    );
    expect(screen.getByText("921.50")).toBeInTheDocument();
  });

  it("handles edge-case amounts (0, negative, 1000000) and keyboard Tab navigation", async () => {
    const user = userEvent.setup();
    const { onSearch } = renderSearchForm();

    const amountInput = screen.getByRole("spinbutton");
    expect(amountInput).toHaveAttribute("min", "1");

    // Keyboard tab moves from input to comboboxes and submit button
    amountInput.focus();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(screen.getAllByRole("combobox")[0]).toHaveFocus();

    // Large number input
    await user.clear(amountInput);
    await user.type(amountInput, "1000000");
    expect(amountInput).toHaveValue(1000000);

    // Clearing controlled numeric input resets state to 0 via `parseFloat(e.target.value) || 0`
    await user.clear(amountInput);
    expect(amountInput).toHaveValue(0);
    await user.clear(amountInput);
    await user.type(amountInput, "250");
    await user.click(screen.getByRole("button", { name: /compare rates/i }));
    expect(onSearch).toHaveBeenCalledWith(expect.objectContaining({ amount: 250 }));
  });
});
