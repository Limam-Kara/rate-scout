import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App routing & Header active state", () => {
  it("renders home page at / with main comparison form", () => {
    window.history.pushState({}, "", "/");
    render(<App />);

    expect(screen.getByRole("heading", { name: /find the best rates/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /compare rates/i })).toBeInTheDocument();
  });

  it("renders /aboutus, highlights active nav link, and toggles FAQ accordion", async () => {
    const user = userEvent.setup();
    window.history.pushState({}, "", "/aboutus");
    render(<App />);

    expect(await screen.findByRole("heading", { name: /about transfercompare/i })).toBeInTheDocument();

    const aboutNavBtn = screen.getAllByRole("link", { name: /about us/i })[0].querySelector("button");
    expect(aboutNavBtn).toHaveClass("bg-primary/10", "text-primary");

    // First FAQ item is open by default
    expect(
      screen.getByText(/helps you compare international money transfer services/i),
    ).toBeVisible();

    // Open second FAQ item
    await user.click(screen.getByRole("button", { name: /how do i compare money transfer services/i }));
    expect(screen.getByText(/select your sending and receiving countries/i)).toBeVisible();
  });

  it("renders /feedback, /privacy-policy, /terms-of-service, and 404 NotFound", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});

    window.history.pushState({}, "", "/feedback");
    const { unmount } = render(<App />);
    expect(await screen.findByRole("heading", { name: /hear from you/i })).toBeInTheDocument();
    unmount();

    window.history.pushState({}, "", "/privacy-policy");
    const r2 = render(<App />);
    expect(await screen.findByRole("heading", { name: /privacy seriously/i })).toBeInTheDocument();
    r2.unmount();

    window.history.pushState({}, "", "/terms-of-service");
    const r3 = render(<App />);
    expect(await screen.findByRole("heading", { name: /terms of service/i })).toBeInTheDocument();
    r3.unmount();

    window.history.pushState({}, "", "/non-existent-route");
    const r4 = render(<App />);
    expect(await screen.findByText("404")).toBeInTheDocument();
    r4.unmount();

    vi.restoreAllMocks();
  });
});
