import { useState } from 'react';
import { Quote } from '@/types/quote';
import { QuoteCard } from './QuoteCard';
import { Skeleton } from '@/components/ui/skeleton';
import { AlertCircle, WifiOff, Building2, Banknote, Layers, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ITEMS_PER_PAGE = 5;

interface QuoteListProps {
  quotes: Quote[];
  isLoading: boolean;
  isError: boolean;
  sendCurrency: string;
  recvCurrency: string;
  onCategoryChange?: (category: 'all' | 'bank' | 'cash') => void;
}

export type CategoryFilter = 'all' | 'bank' | 'cash';

const CATEGORY_FILTERS = [
  { id: 'all' as const, label: 'All', icon: Layers },
  { id: 'bank' as const, label: 'Bank Deposit', icon: Building2 },
  { id: 'cash' as const, label: 'Cash Pickup', icon: Banknote },
];

function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div 
          key={i} 
          className="rounded-2xl border bg-card p-6 animate-pulse"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 space-y-5">
              <div className="flex items-center gap-3">
                <Skeleton className="h-7 w-36 rounded-lg" />
                <Skeleton className="h-6 w-24 rounded-full" />
              </div>
              <Skeleton className="h-5 w-28 rounded-lg" />
              <div className="flex gap-8">
                <div className="space-y-2">
                  <Skeleton className="h-3 w-24" />
                  <Skeleton className="h-6 w-36 rounded-lg" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-3 w-20" />
                  <Skeleton className="h-6 w-20 rounded-lg" />
                </div>
              </div>
              <Skeleton className="h-11 w-40 rounded-xl" />
            </div>
            <div className="flex flex-col items-center justify-center p-8 bg-secondary/30 rounded-xl min-w-[200px]">
              <Skeleton className="h-3 w-24 mb-3" />
              <Skeleton className="h-12 w-32 rounded-lg" />
              <Skeleton className="h-4 w-12 mt-2 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ErrorState() {
  return (
    <div className="rounded-2xl border-2 border-dashed border-destructive/30 bg-destructive/5 p-16 text-center animate-fade-in">
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="absolute inset-0 bg-destructive/20 rounded-full blur-xl" />
          <div className="relative p-5 rounded-full bg-destructive/10 border border-destructive/20">
            <WifiOff className="w-10 h-10 text-destructive" />
          </div>
        </div>
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">
        Unable to connect
      </h3>
      <p className="text-muted-foreground max-w-md mx-auto">
        Please check your internet connection and try again.
      </p>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="rounded-2xl border-2 border-dashed border-border bg-secondary/20 p-16 text-center animate-fade-in">
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl" />
          <div className="relative p-5 rounded-full bg-primary/10 border border-primary/20">
            <AlertCircle className="w-10 h-10 text-primary" />
          </div>
        </div>
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">
        No quotes found
      </h3>
      <p className="text-muted-foreground">
        Try adjusting your search parameters.
      </p>
    </div>
  );
}

export function QuoteList({ quotes, isLoading, isError, sendCurrency, recvCurrency, onCategoryChange }: QuoteListProps) {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [currentPage, setCurrentPage] = useState(1);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (isError) {
    return <ErrorState />;
  }

  if (quotes.length === 0) {
    return <EmptyState />;
  }

  // Filter quotes by category
  const filteredQuotes = quotes.filter((quote) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'bank') return quote.category.toLowerCase().includes('bancaire');
    if (activeFilter === 'cash') return quote.category.toLowerCase().includes('espèces');
    return true;
  });

  // Sort by recipient_gets (highest first)
  const sortedQuotes = [...filteredQuotes].sort((a, b) => b.recipient_gets - a.recipient_gets);

  // Pagination
  const totalPages = Math.ceil(sortedQuotes.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedQuotes = sortedQuotes.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Reset to page 1 when filter changes
  const handleFilterChange = (filter: CategoryFilter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
    onCategoryChange?.(filter);
  };

  // Count quotes per category
  const bankCount = quotes.filter(q => q.category.toLowerCase().includes('bancaire')).length;
  const cashCount = quotes.filter(q => q.category.toLowerCase().includes('espèces')).length;

  const getCategoryCount = (id: CategoryFilter) => {
    if (id === 'all') return quotes.length;
    if (id === 'bank') return bankCount;
    if (id === 'cash') return cashCount;
    return 0;
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 p-1.5 glass-card rounded-xl w-fit">
        {CATEGORY_FILTERS.map((filter) => {
          const Icon = filter.icon;
          const count = getCategoryCount(filter.id);
          const isActive = activeFilter === filter.id;
          
          return (
            <Button
              key={filter.id}
              variant={isActive ? "default" : "ghost"}
              size="sm"
              onClick={() => handleFilterChange(filter.id)}
              className={`gap-2 rounded-lg transition-all duration-300 ${
                isActive 
                  ? 'gradient-primary text-primary-foreground shadow-lg' 
                  : 'hover:bg-secondary/80'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline font-medium">{filter.label}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                isActive 
                  ? 'bg-primary-foreground/20 text-primary-foreground' 
                  : 'bg-secondary text-muted-foreground'
              }`}>
                {count}
              </span>
            </Button>
          );
        })}
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-accent/10">
            <TrendingUp className="w-4 h-4 text-accent" />
          </div>
          <h2 className="text-lg font-bold text-foreground">
            {sortedQuotes.length} provider{sortedQuotes.length !== 1 ? 's' : ''} found
          </h2>
        </div>
        <p className="text-sm text-muted-foreground font-medium">
          Sorted by best value
        </p>
      </div>

      {sortedQuotes.length === 0 ? (
        <div className="rounded-2xl border-2 border-dashed border-border bg-secondary/20 p-12 text-center">
          <p className="text-muted-foreground font-medium">No providers in this category.</p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {paginatedQuotes.map((quote, index) => (
              <QuoteCard
                key={`${quote.provider}-${quote.category}`}
                quote={quote}
                isBestValue={startIndex + index === 0}
                sendCurrency={sendCurrency}
                recvCurrency={recvCurrency}
                index={index}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>
              
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className={`w-9 h-9 ${currentPage === page ? 'gradient-primary text-primary-foreground' : ''}`}
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="gap-1"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
