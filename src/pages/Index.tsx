import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { SearchForm } from '@/components/SearchForm';
import { QuoteList } from '@/components/QuoteList';
import { TransferProviders } from '@/components/TransferProviders';
import { ExchangeRates } from '@/components/ExchangeRates';
import { AdvertiserDisclosure } from '@/components/AdvertiserDisclosure';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { fetchQuotes } from '@/lib/api';
import { SearchParams, CategoryFilter } from '@/types/quote';
import { ArrowRightLeft, Shield, Zap, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';


export default function Index() {
  const [searchParams, setSearchParams] = useState<SearchParams | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  const { data: quotes, isLoading, isError, refetch } = useQuery({
    queryKey: ['quotes', searchParams],
    queryFn: () => searchParams ? fetchQuotes(searchParams) : Promise.resolve([]),
    enabled: !!searchParams,
    retry: 1,
  });

  const handleSearch = (params: SearchParams) => {
    setSearchParams(params);
    setHasSearched(true);
  };

  const displayQuotes = quotes || [];

  return (
    <div className="min-h-screen gradient-hero relative overflow-x-clip">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary/30 animate-float" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-accent/30 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-primary/20 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10 container max-w-7xl py-8 md:py-14">
        <div className="grid lg:grid-cols-[420px_1fr] gap-8 lg:gap-12 items-start">
          {/* Search Panel */}
          <div className="space-y-6 lg:sticky lg:top-24 lg:self-start animate-slide-up">
            {/* Hero Text */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card/90 border border-border/60 shadow-sm text-xs font-semibold text-muted-foreground">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                Smart comparison engine
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-foreground leading-[1.1] tracking-tight">
                Find the <span className="text-gradient">best rates</span> for your transfer
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed">
                Compare exchange rates and fees from trusted providers in seconds. Save more on every transaction.
              </p>
            </div>

            {/* Search Card */}
            <div className="rounded-2xl border border-border/60 bg-card shadow-sm p-6 md:p-7">
              <SearchForm onSearch={handleSearch} isLoading={isLoading} quotes={displayQuotes} activeCategory={activeCategory} />
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: TrendingUp, label: 'Best Rates', desc: 'Live comparison', color: 'text-accent' },
                { icon: Zap, label: 'Instant', desc: 'Real-time quotes', color: 'text-primary' },
                { icon: Shield, label: 'Secure', desc: 'Trusted partners', color: 'text-foreground' },
              ].map((feature) => (
                <div
                  key={feature.label}
                  className="group flex flex-col items-center text-center p-3.5 rounded-xl bg-card/90 border border-border/60 shadow-sm hover:shadow-md transition-all cursor-default"
                >
                  <div className="p-2.5 rounded-xl bg-secondary/70 mb-2 group-hover:scale-105 transition-transform duration-200">
                    <feature.icon className={`w-4 h-4 ${feature.color}`} />
                  </div>
                  <span className="text-xs font-semibold text-foreground">{feature.label}</span>
                  <span className="text-[11px] text-muted-foreground mt-0.5 leading-tight">{feature.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Results Panel */}
          <div className="space-y-6" style={{ animationDelay: '200ms' }}>
            {!hasSearched ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 animate-fade-in">
                <div className="relative mb-8">
                  <div className="absolute inset-0 gradient-primary rounded-full blur-2xl opacity-20 animate-pulse-slow" />
                  <div className="relative p-8 rounded-full glass-card border-2 border-dashed border-border">
                    <ArrowRightLeft className="w-16 h-16 text-muted-foreground/30" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Ready to compare rates?
                </h3>
                <p className="text-muted-foreground max-w-md leading-relaxed mb-6">
                  Enter your transfer details and we'll find you the best deals from top money transfer providers.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <span>Start by entering an amount</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ) : (
              <QuoteList
                quotes={displayQuotes}
                isLoading={isLoading}
                isError={isError}
                onRetry={() => refetch()}
                sendCurrency={searchParams?.sendCurr || 'USD'}
                recvCurrency={searchParams?.recvCurr || 'MAD'}
                onCategoryChange={setActiveCategory}
              />
            )}
          </div>
        </div>
      </main>

      {/* Exchange Rates Section */}
      <ExchangeRates />

      {/* Transfer Providers Section */}
      <TransferProviders />

      {/* Advertiser Disclosure Section */}
      <section className="container max-w-7xl">
        <AdvertiserDisclosure />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
