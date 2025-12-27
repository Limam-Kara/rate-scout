import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { SearchForm } from '@/components/SearchForm';
import { QuoteList } from '@/components/QuoteList';
import { TransferProviders } from '@/components/TransferProviders';
import { ExchangeRates } from '@/components/ExchangeRates';
import { AdvertiserDisclosure } from '@/components/AdvertiserDisclosure';
import { Footer } from '@/components/Footer';
import { fetchQuotes, mockQuotes } from '@/lib/api';
import { SearchParams, Quote } from '@/types/quote';
import { ArrowRightLeft, Shield, Zap, TrendingUp, Sparkles, Globe, ArrowRight, LayoutGrid } from 'lucide-react';
import { CategoryFilter } from '@/components/QuoteList';
import { Button } from '@/components/ui/button';

export default function Index() {
  const [searchParams, setSearchParams] = useState<SearchParams | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  const { data: quotes, isLoading, isError } = useQuery({
    queryKey: ['quotes', searchParams],
    queryFn: () => searchParams ? fetchQuotes(searchParams) : Promise.resolve([]),
    enabled: !!searchParams,
    retry: 1,
  });

  const handleSearch = (params: SearchParams) => {
    setSearchParams(params);
    setHasSearched(true);
  };

  const displayQuotes = isError && hasSearched ? mockQuotes : (quotes || []);

  return (
    <div className="min-h-screen gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary/30 animate-float" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-accent/30 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-primary/20 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Header */}
      <header className="relative z-50 border-b border-border/30 glass sticky top-0">
        <div className="container max-w-7xl py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 gradient-primary rounded-xl blur-lg opacity-50" />
                <div className="relative p-2.5 rounded-xl gradient-primary shadow-lg">
                  <ArrowRightLeft className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground tracking-tight">
                  Transfer<span className="text-gradient">Compare</span>
                </h1>
                <p className="text-xs text-muted-foreground font-medium">Premium rate finder</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="w-4 h-4" />
                <span>200+ Countries</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="w-4 h-4" />
                <span>Real-time rates</span>
              </div>
              <Link to="/components">
                <Button variant="outline" size="sm" className="gap-2">
                  <LayoutGrid className="w-4 h-4" />
                  UI Components
                </Button>
              </Link>
               <Link to="/aboutus">
                <Button variant="outline" size="sm" className="gap-2">
                  <LayoutGrid className="w-4 h-4" />
                  About us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container max-w-7xl py-8 md:py-16">
        <div className="grid lg:grid-cols-[420px_1fr] gap-8 lg:gap-16">
          {/* Search Panel */}
          <div className="space-y-8 animate-slide-up">
            {/* Hero Text */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50 text-sm font-medium text-muted-foreground">
                <Sparkles className="w-4 h-4 text-primary" />
                Smart comparison engine
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-[1.1] tracking-tight">
                Find the <span className="text-gradient">best rates</span> for your transfer
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Compare exchange rates and fees from trusted providers in seconds. Save more on every transaction.
              </p>
            </div>

            {/* Search Card */}
            <div className="glass-card rounded-2xl shadow-xl p-6 md:p-8 hover-lift">
              <SearchForm onSearch={handleSearch} isLoading={isLoading} quotes={displayQuotes} activeCategory={activeCategory} />
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: TrendingUp, label: 'Best Rates', color: 'text-accent' },
                { icon: Zap, label: 'Instant', color: 'text-primary' },
                { icon: Shield, label: 'Secure', color: 'text-muted-foreground' },
              ].map((feature, i) => (
                <div 
                  key={feature.label}
                  className="group flex flex-col items-center text-center p-4 rounded-xl glass-card hover-lift cursor-default"
                  style={{ animationDelay: `${(i + 1) * 100}ms` }}
                >
                  <div className={`p-3 rounded-xl bg-secondary/50 mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  </div>
                  <span className="text-xs font-semibold text-foreground">{feature.label}</span>
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
                isError={isError && !mockQuotes.length}
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
