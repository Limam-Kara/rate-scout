import { useQuery } from '@tanstack/react-query';
import { Card } from '@/components/ui/card';

// --- CONFIGURATION ---
const BASE_CURRENCY = 'USD';
const TARGET_CURRENCIES = ['EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CHF', 'CNY', 'INR'] as const;

const CURRENCY_META: Record<string, { flag: string; name: string }> = {
  EUR: { flag: '🇪🇺', name: 'Euro' },
  GBP: { flag: '🇬🇧', name: 'British Pound' },
  JPY: { flag: '🇯🇵', name: 'Japanese Yen' },
  CAD: { flag: '🇨🇦', name: 'Canadian Dollar' },
  AUD: { flag: '🇦🇺', name: 'Australian Dollar' },
  CHF: { flag: '🇨🇭', name: 'Swiss Franc' },
  CNY: { flag: '🇨🇳', name: 'Chinese Yuan' },
  INR: { flag: '🇮🇳', name: 'Indian Rupee' },
};

interface RateRow {
  base: string;
  quote: string;
  rate: string;
  flag: string;
  name: string;
}

// --- FETCH FUNCTION ---
async function fetchRates() {
  const currentRes = await fetch(`https://open.er-api.com/v6/latest/${BASE_CURRENCY}`);
  if (!currentRes.ok) throw new Error('Failed to fetch current rates');
  const currentData = await currentRes.json();

  const rows: RateRow[] = TARGET_CURRENCIES.map((quote) => {
    const currentRate = currentData.rates?.[quote];
    const meta = CURRENCY_META[quote];

    return {
      base: BASE_CURRENCY,
      quote,
      rate: typeof currentRate === 'number' ? currentRate.toFixed(4) : '—',
      flag: meta.flag,
      name: meta.name,
    };
  });

  return {
    rows,
    lastUpdated: new Date(currentData.time_last_update_utc).toLocaleString(),
  };
}

export function ExchangeRates() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['exchangeRates'],
    queryFn: fetchRates,
    refetchInterval: 60000, // Refresh every minute
  });

  const ratesData = data?.rows || [];
  const lastUpdateText = data?.lastUpdated || 'Loading...';

  return (
    <section className="relative z-10 py-12 md:py-16">
      <div className="container max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Exchange Rates</h2>
          <p className="text-sm text-muted-foreground">
            Live mid-market snapshot for popular USD currency pairs.
          </p>
        </div>

        <Card className="rounded-2xl border border-border/60 bg-card shadow-sm overflow-hidden p-4 md:p-6">
          {isLoading && (
            <div className="p-8 text-center text-muted-foreground animate-pulse">
              Fetching latest market data...
            </div>
          )}

          {isError && (
            <div className="p-8 text-center text-destructive text-sm font-medium">
              Unable to load live rates. Please check your connection.
            </div>
          )}

          {!isLoading && !isError && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {ratesData.map((row) => (
                  <div
                    key={row.quote}
                    className="flex items-center justify-between gap-4 px-4 py-3.5 rounded-xl border border-border/60 bg-secondary/20 hover:bg-secondary/40 hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-2xl leading-none shrink-0" aria-hidden="true">
                        {row.flag}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 text-sm font-bold text-foreground">
                          <span>{row.base}</span>
                          <span className="text-muted-foreground font-normal">/</span>
                          <span>{row.quote}</span>
                        </div>
                        <p className="text-xs text-muted-foreground truncate">{row.name}</p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-mono text-sm font-bold text-foreground tabular-nums">
                        {row.rate}
                      </span>
                      <p className="text-[11px] text-muted-foreground">per 1 {row.base}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="pt-4 text-right text-xs text-muted-foreground">
                Data source: open.er-api.com • Last update: {lastUpdateText}
              </p>
            </>
          )}
        </Card>
      </div>
    </section>
  );
}
