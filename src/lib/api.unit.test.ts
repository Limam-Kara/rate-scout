import { afterEach, describe, expect, it, vi } from "vitest";
import { fetchQuotes } from "./api";
import type { Quote, SearchParams } from "@/types/quote";

describe("fetchQuotes", () => {
  const sampleParams: SearchParams = {
    amount: 250,
    sendCurr: "USD",
    recvCurr: "MAD",
    sendCty: "US",
    recvCty: "MA",
  };

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("constructs the expected query parameters and parses JSON response", async () => {
    const mockResponse: Quote[] = [
      {
        provider: "Wise",
        category: "Bank Deposit",
        rate: 9.85,
        fee: 2.5,
        recipient_gets: 2437.88,
      },
    ];

    const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
      new Response(JSON.stringify(mockResponse), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    );

    const result = await fetchQuotes(sampleParams);

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    const calledUrl = new URL(fetchSpy.mock.calls[0][0] as string);
    expect(calledUrl.origin).toBe("https://arbitragexx.vercel.app");
    expect(calledUrl.pathname).toBe("/api/quotes");
    expect(calledUrl.searchParams.get("amount")).toBe("250");
    expect(calledUrl.searchParams.get("sendCurr")).toBe("USD");
    expect(calledUrl.searchParams.get("recvCurr")).toBe("MAD");
    expect(calledUrl.searchParams.get("sendCty")).toBe("US");
    expect(calledUrl.searchParams.get("recvCty")).toBe("MA");
    expect(result).toEqual(mockResponse);
  });

  it("throws an error when the HTTP status is non-2xx", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
      new Response("Internal Server Error", { status: 500 }),
    );

    await expect(fetchQuotes(sampleParams)).rejects.toThrow("Failed to fetch quotes");
  });

  it("propagates network errors when fetch rejects", async () => {
    vi.spyOn(globalThis, "fetch").mockRejectedValueOnce(new Error("Network down"));

    await expect(fetchQuotes(sampleParams)).rejects.toThrow("Network down");
  });
});
