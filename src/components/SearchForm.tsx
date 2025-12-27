import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SearchParams, SEND_OPTIONS, RECEIVE_OPTIONS, Quote } from '@/types/quote';
import { ArrowRight, Search, ArrowDownUp } from 'lucide-react';
import { CurrencyCombobox } from './CurrencyCombobox';

interface SearchFormProps {
  onSearch: (params: SearchParams) => void;
  isLoading: boolean;
  quotes?: Quote[];
  activeCategory?: 'all' | 'bank' | 'cash';
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

  const handleSwap = () => {
    const tempSend = sendOption;
    const tempReceive = receiveOption;
    
    // Check if swap is possible
    const sendInReceive = RECEIVE_OPTIONS.find(o => o.value === tempSend);
    const receiveInSend = SEND_OPTIONS.find(o => o.value === tempReceive);
    
    if (sendInReceive && receiveInSend) {
      setSendOption(tempReceive);
      setReceiveOption(tempSend);
    }
  };

  // Calculate best recipient amount based on active category
  const getBestRecipientAmount = (): number | null => {
    if (quotes.length === 0) return null;

    // Filter quotes by category
    const filteredQuotes = quotes.filter((quote) => {
      if (activeCategory === 'all') return true;
      if (activeCategory === 'bank') return quote.category.toLowerCase().includes('bancaire');
      if (activeCategory === 'cash') return quote.category.toLowerCase().includes('espèces');
      return true;
    });

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
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* You Send Section */}
      <div className="space-y-3">
        <Label className="text-sm font-semibold text-foreground uppercase tracking-wide">
          You send
        </Label>
        <div className="relative">
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-xl font-bold text-muted-foreground">
            {selectedSend?.symbol}
          </span>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
            className="pl-14 h-16 text-3xl font-bold bg-secondary/30 border-2 border-transparent hover:border-border focus:border-primary focus:bg-background transition-all rounded-xl"
            min={1}
            step="0.01"
          />
        </div>
        <CurrencyCombobox
          options={SEND_OPTIONS}
          value={sendOption}
          onValueChange={setSendOption}
          placeholder="Select sending country..."
        />
      </div>

      {/* Swap Button */}
      <div className="flex justify-center">
        <button
          type="button"
          onClick={handleSwap}
          className="group p-3 rounded-full bg-secondary/50 hover:bg-secondary border-2 border-border hover:border-primary/30 transition-all duration-300 hover:scale-110"
        >
          <ArrowDownUp className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </button>
      </div>

      {/* Recipient Gets Section */}
      <div className="space-y-3">
        <Label className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Recipient gets
        </Label>
        <div className={`h-16 rounded-xl border-2 flex items-center px-5 transition-all ${
          bestAmount 
            ? 'bg-accent/5 border-accent/30' 
            : 'bg-secondary/30 border-dashed border-border/50'
        }`}>
          <span className={`text-2xl font-bold ${bestAmount ? 'text-accent' : 'text-muted-foreground/60'}`}>
            {selectedReceive?.symbol}{' '}
            {bestAmount ? (
              <span className="animate-fade-in">{formatAmount(bestAmount)}</span>
            ) : (
              <span className="animate-pulse">—</span>
            )}
          </span>
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
        className="w-full group"
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
