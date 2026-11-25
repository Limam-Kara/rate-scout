import { Quote, PROVIDER_URLS } from '@/types/quote';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Banknote, CreditCard, Smartphone, Building2, Trophy, ExternalLink, Tag, Copy, Check, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

interface QuoteCardProps {
  quote: Quote;
  isBestValue: boolean;
  bestAmount?: number;
  sendCurrency: string;
  recvCurrency: string;
  index: number;
}

const getCategoryMeta = (category: string) => {
  const lower = category.toLowerCase();
  if (lower.includes('bank') || lower.includes('bancaire') || lower.includes('dépôt') || lower.includes('deposit')) {
    return {
      icon: Building2,
      badgeClass:
        'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/50 dark:text-indigo-300 dark:border-indigo-800/60',
    };
  }
  if (lower.includes('cash') || lower.includes('espèces') || lower.includes('especes') || lower.includes('retrait') || lower.includes('pickup')) {
    return {
      icon: Banknote,
      badgeClass:
        'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800/60',
    };
  }
  if (lower.includes('mobile') || lower.includes('wallet')) {
    return {
      icon: Smartphone,
      badgeClass:
        'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/50 dark:text-purple-300 dark:border-purple-800/60',
    };
  }
  return {
    icon: CreditCard,
    badgeClass: 'bg-secondary text-secondary-foreground border-border/60',
  };
};

export function QuoteCard({ quote, isBestValue, bestAmount, sendCurrency, recvCurrency, index }: QuoteCardProps) {
  const { icon: CategoryIcon, badgeClass } = getCategoryMeta(quote.category);
  const [copied, setCopied] = useState(false);

  const providerUrl = quote.provider_url || PROVIDER_URLS[quote.provider] || '#';
  const diffFromBest = bestAmount !== undefined ? bestAmount - quote.recipient_gets : 0;

  const handleCopyCoupon = async () => {
    if (quote.coupon_code) {
      await navigator.clipboard.writeText(quote.coupon_code);
      setCopied(true);
      toast({
        title: 'Coupon copied!',
        description: `Code "${quote.coupon_code}" copied to clipboard`,
      });
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSendNow = () => {
    window.open(providerUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card
      className={`group overflow-hidden rounded-2xl border animate-slide-up transition-all duration-200 ${
        isBestValue
          ? 'border-primary/50 ring-2 ring-primary/20 shadow-md bg-gradient-to-br from-primary/[0.03] to-card'
          : 'border-border/60 shadow-sm hover:shadow-md hover:border-border'
      }`}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          {/* Provider Info */}
          <div className="flex-1 p-6 space-y-5">
            {/* Header */}
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2.5 flex-wrap">
                <h3 className="text-xl font-bold text-foreground tracking-tight">{quote.provider}</h3>
                <Badge
                  variant="outline"
                  className={`gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${badgeClass}`}
                >
                  <CategoryIcon className="w-3.5 h-3.5" />
                  {quote.category}
                </Badge>
                {isBestValue && (
                  <Badge className="gap-1.5 rounded-full gradient-accent text-accent-foreground border-0 shadow-sm">
                    <Trophy className="w-3.5 h-3.5" />
                    Best Value
                  </Badge>
                )}
              </div>
            </div>

            {/* Rate & Fee Details */}
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Exchange Rate</p>
                <p className="text-sm md:text-base font-bold text-foreground font-mono tabular-nums">
                  1 {sendCurrency} = {quote.rate.toFixed(4)} {recvCurrency}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Transfer Fee</p>
                <p className={`text-sm md:text-base font-bold font-mono tabular-nums ${quote.fee === 0 ? 'text-primary' : 'text-foreground'}`}>
                  {quote.fee === 0 ? (
                    <span className="inline-flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" />
                      Free
                    </span>
                  ) : (
                    `${quote.fee.toFixed(2)} ${sendCurrency}`
                  )}
                </p>
              </div>
              {quote.delivery_time && (
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Delivery</p>
                  <p className="text-sm md:text-base font-bold text-foreground flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    {quote.delivery_time}
                  </p>
                </div>
              )}
            </div>

            {/* Coupon Code */}
            {quote.coupon_code && (
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-primary/5 border border-primary/20">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Tag className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">Promo Code</p>
                  <code className="text-sm font-mono font-bold text-foreground">{quote.coupon_code}</code>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-2.5 hover:bg-primary/10"
                  onClick={handleCopyCoupon}
                  aria-label="Copy coupon code"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-primary" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
            )}

            {/* Send Now Button */}
            <Button
              variant={isBestValue ? 'default' : 'outline'}
              className={`w-full sm:w-auto rounded-xl group/btn ${
                isBestValue
                  ? 'shadow-sm'
                  : 'border-border hover:border-primary hover:bg-primary/5 hover:text-primary font-semibold'
              }`}
              onClick={handleSendNow}
            >
              <span>Send with {quote.provider}</span>
              <ExternalLink className="w-4 h-4 ml-1.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </Button>
          </div>

          {/* Recipient Gets - Highlight Section */}
          <div
            className={`relative p-6 md:px-8 flex flex-col items-center justify-center text-center min-w-[220px] border-t md:border-t-0 md:border-l border-border/60 ${
              isBestValue ? 'bg-primary/[0.06]' : 'bg-secondary/25'
            }`}
          >
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
              Recipient gets
            </p>
            <p
              className={`text-3xl md:text-4xl font-extrabold tracking-tight tabular-nums ${
                isBestValue ? 'text-primary' : 'text-foreground'
              }`}
            >
              {quote.recipient_gets.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
            <p className="text-sm font-bold text-muted-foreground mt-1">{recvCurrency}</p>
            {!isBestValue && diffFromBest > 0.01 && (
              <p className="text-xs text-muted-foreground tabular-nums mt-2">
                -{diffFromBest.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}{' '}
                {recvCurrency} vs best
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
