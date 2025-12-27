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
  sendCurrency: string;
  recvCurrency: string;
  index: number;
}

const getCategoryIcon = (category: string) => {
  const lower = category.toLowerCase();
  if (lower.includes('bank') || lower.includes('bancaire') || lower.includes('dépôt')) return Building2;
  if (lower.includes('cash') || lower.includes('espèces') || lower.includes('retrait')) return Banknote;
  if (lower.includes('mobile') || lower.includes('wallet')) return Smartphone;
  return CreditCard;
};

export function QuoteCard({ quote, isBestValue, sendCurrency, recvCurrency, index }: QuoteCardProps) {
  const CategoryIcon = getCategoryIcon(quote.category);
  const [copied, setCopied] = useState(false);
  
  const providerUrl = quote.provider_url || PROVIDER_URLS[quote.provider] || '#';

  const handleCopyCoupon = async () => {
    if (quote.coupon_code) {
      await navigator.clipboard.writeText(quote.coupon_code);
      setCopied(true);
      toast({
        title: "Coupon copied!",
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
      className={`group overflow-hidden animate-slide-up hover-lift transition-all duration-300 ${
        isBestValue 
          ? 'ring-2 ring-accent shadow-accent bg-gradient-to-br from-accent/5 to-transparent' 
          : 'hover:ring-1 hover:ring-border'
      }`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          {/* Provider Info */}
          <div className="flex-1 p-6 space-y-5">
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-xl font-bold text-foreground tracking-tight">{quote.provider}</h3>
                  {isBestValue && (
                    <Badge className="gap-1.5 gradient-accent text-accent-foreground border-0 shadow-md animate-scale-in">
                      <Trophy className="w-3.5 h-3.5" />
                      Best Value
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-2.5 text-muted-foreground">
                  <div className="p-1.5 rounded-lg bg-secondary/80">
                    <CategoryIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-medium">{quote.category}</span>
                </div>
              </div>
            </div>

            {/* Rate & Fee Details */}
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <div className="space-y-1.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Exchange Rate</p>
                <p className="text-base font-bold text-foreground font-mono">
                  1 {sendCurrency} = {quote.rate.toFixed(4)} {recvCurrency}
                </p>
              </div>
              <div className="space-y-1.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Transfer Fee</p>
                <p className={`text-base font-bold font-mono ${quote.fee === 0 ? 'text-accent' : 'text-foreground'}`}>
                  {quote.fee === 0 ? (
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" />
                      Free
                    </span>
                  ) : (
                    `${quote.fee.toFixed(2)} ${sendCurrency}`
                  )}
                </p>
              </div>
              {quote.delivery_time && (
                <div className="space-y-1.5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Delivery</p>
                  <p className="text-base font-bold text-foreground flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    {quote.delivery_time}
                  </p>
                </div>
              )}
            </div>

            {/* Coupon Code */}
            {quote.coupon_code && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-accent/10 border border-accent/20">
                <div className="p-2 rounded-lg bg-accent/20">
                  <Tag className="w-4 h-4 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">Promo Code</p>
                  <code className="text-sm font-mono font-bold text-accent">
                    {quote.coupon_code}
                  </code>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-9 px-3 hover:bg-accent/20"
                  onClick={handleCopyCoupon}
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-accent" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
            )}

            {/* Send Now Button */}
            <Button
              variant={isBestValue ? "accent" : "secondary"}
              className={`w-full sm:w-auto group/btn ${isBestValue ? 'shadow-accent' : ''}`}
              onClick={handleSendNow}
            >
              <span>Send with {quote.provider}</span>
              <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </Button>
          </div>

          {/* Recipient Gets - Highlight Section */}
          <div className={`relative p-6 md:p-8 flex flex-col items-center justify-center min-w-[220px] ${
            isBestValue 
              ? 'bg-gradient-to-br from-accent/15 to-accent/5' 
              : 'bg-secondary/30'
          }`}>
            {/* Decorative border */}
            <div className={`absolute left-0 top-6 bottom-6 w-px ${
              isBestValue ? 'bg-gradient-to-b from-transparent via-accent to-transparent' : 'bg-border'
            }`} />
            
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Recipient gets</p>
            <p className={`text-4xl font-extrabold tracking-tight ${isBestValue ? 'text-accent' : 'text-foreground'}`}>
              {quote.recipient_gets.toLocaleString('en-US', { 
                minimumFractionDigits: 2, 
                maximumFractionDigits: 2 
              })}
            </p>
            <p className="text-sm font-bold text-muted-foreground mt-1">{recvCurrency}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
