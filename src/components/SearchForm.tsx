import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { SearchParams, SEND_OPTIONS, RECEIVE_OPTIONS, Quote, CategoryFilter, matchesQuoteCategory } from '@/types/quote';
import { ArrowDown, ArrowDownUp, ArrowRight, Search } from 'lucide-react';
import { CurrencyCombobox } from './CurrencyCombobox';

interface SearchFormProps {
  onSearch: (params: SearchParams) => void;
  isLoading: boolean;
  quotes?: Quote[];
  activeCategory?: CategoryFilter;
}

export function SearchForm({ onSearch, isLoading, quotes = [], activeCategory = 'all' }: SearchFormProps) {
  const [amount, setAmount] = useState<number>(100);
  const [sendOption, setSendOption] = useState<string>('USD-US');
  const [receiveOption, setReceiveOption] = useState<string>('MAD-MA');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const send = SEND_OPTIONS.find(o => o.value === sendOption);
    const receive = RECEIVE_OPTIONS.find(o => o.value === receiveOption);
    
    if (send && receive) {
      onSearch({ 
        amount, 
        sendCurr: send.currency, 
        recvCurr: receive.currency, 
        sendCty: send.country, 
        recvCty: receive.country 
      });
    }
  };

  const selectedSend = SEND_OPTIONS.find(o => o.value === sendOption);
  const selectedReceive = RECEIVE_OPTIONS.find(o => o.value === receiveOption);

  const canSwap = Boolean(
    RECEIVE_OPTIONS.find(o => o.value === sendOption) &&
    SEND_OPTIONS.find(o => o.value === receiveOption)
  );

  const handleSwap = () => {
    if (!canSwap) return;
    setSendOption(receiveOption);
    setReceiveOption(sendOption);
  };

  // Calculate best recipient amount based on active category
  const getBestRecipientAmount = (): number | null => {
    if (quotes.length === 0) return null;

    // Filter quotes by category
    const filteredQuotes = quotes.filter((quote) => matchesQuoteCategory(quote.category, activeCategory));

    if (filteredQuotes.length === 0) return null;

    // Get the best value (highest recipient_gets)
    const bestQuote = filteredQuotes.reduce((best, current) => 
      current.recipient_gets > best.recipient_gets ? current : best
    );

    return bestQuote.recipient_gets;
  };

  const bestAmount = getBestRecipientAmount();

  // Format number with commas
  const formatAmount = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(num);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* You Send Section */}
      <div className="space-y-2.5">
        <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          You send
        </Label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-bold text-muted-foreground">
            {selectedSend?.symbol}
          </span>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
            className="pl-11 pr-20 h-14 text-2xl font-bold tabular-nums bg-secondary/30 border border-border/60 hover:border-border focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/25 focus-visible:bg-background transition-all rounded-xl"
            min={1}
            step="0.01"
          />
          {selectedSend && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-full bg-background border border-border/60 text-xs font-semibold text-foreground shadow-sm">
              {selectedSend.currency}
            </span>
          )}
        </div>
        <CurrencyCombobox
          options={SEND_OPTIONS}
          value={sendOption}
          onValueChange={setSendOption}
          placeholder="Select sending country..."
        />
      </div>

      {/* Swap / Direction Divider */}
      <div className="relative flex items-center justify-center py-1">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-border/60" />
        <Tooltip>
          <TooltipTrigger asChild>
            {canSwap ? (
              <button
                type="button"
                onClick={handleSwap}
                aria-label="Swap currencies"
                className="relative z-10 group p-2.5 rounded-full bg-card border border-border/60 shadow-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 cursor-pointer"
              >
                <ArrowDownUp className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
            ) : (
              <span
                aria-label="One-way transfer corridor"
                className="relative z-10 inline-flex items-center justify-center p-2 rounded-full bg-card border border-border/60 text-muted-foreground cursor-default"
              >
                <ArrowDown className="w-4 h-4" />
              </span>
            )}
          </TooltipTrigger>
          <TooltipContent>
            <p>
              {canSwap
                ? 'Swap sending and receiving currencies'
                : 'One-way corridor: swap unavailable for this currency pair'}
            </p>
          </TooltipContent>
        </Tooltip>
      </div>

      {/* Recipient Gets Section */}
      <div className="space-y-2.5">
        <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Recipient gets
        </Label>
        <div className={`h-14 rounded-xl border flex items-center justify-between px-4 transition-all ${
          bestAmount
            ? 'bg-primary/5 border-primary/30'
            : 'bg-secondary/30 border-dashed border-border/60'
        }`}>
          <span className={`text-2xl font-bold tabular-nums ${bestAmount ? 'text-primary' : 'text-muted-foreground'}`}>
            {selectedReceive?.symbol}{' '}
            {bestAmount ? (
              <span className="animate-fade-in">{formatAmount(bestAmount)}</span>
            ) : (
              <span>—</span>
            )}
          </span>
          {selectedReceive && (
            <span className="px-2.5 py-1 rounded-full bg-background border border-border/60 text-xs font-semibold text-foreground shadow-sm">
              {selectedReceive.currency}
            </span>
          )}
        </div>
        <CurrencyCombobox
          options={RECEIVE_OPTIONS}
          value={receiveOption}
          onValueChange={setReceiveOption}
          placeholder="Select receiving country..."
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="hero"
        size="xl"
        className="w-full group rounded-xl"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
            <span>Comparing rates...</span>
          </>
        ) : (
          <>
            <Search className="w-5 h-5" />
            <span>Compare Rates</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </Button>
    </form>
  );
}
