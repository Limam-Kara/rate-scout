import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRightLeft, Globe, Info, Menu, MessageSquare, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { to: '/aboutus', label: 'About Us', icon: Info },
  { to: '/feedback', label: 'Feedback', icon: MessageSquare },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container max-w-7xl py-3.5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-xl blur-md opacity-40 group-hover:opacity-65 transition-opacity" />
              <div className="relative p-2.5 rounded-xl gradient-primary shadow-sm">
                <ArrowRightLeft className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
            <div>
              <span className="block text-xl font-bold text-foreground tracking-tight">
                Transfer<span className="text-gradient">Compare</span>
              </span>
              <p className="text-xs text-muted-foreground font-medium">Premium rate finder</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2" aria-label="Main navigation">
            <div className="flex items-center gap-4 mr-3 pr-3 border-r border-border/60 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-primary" />
                <span className="hidden lg:inline">200+ Countries</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="hidden lg:inline">Real-time rates</span>
              </div>
            </div>

            {NAV_LINKS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.to;
              return (
                <Link key={item.to} to={item.to}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      'gap-2 rounded-xl transition-colors',
                      isActive
                        ? 'bg-primary/10 text-primary font-medium hover:bg-primary/15 hover:text-primary'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/70',
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-xl border-border/60" aria-label="Open navigation menu">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <SheetHeader className="text-left">
                  <SheetTitle className="flex items-center gap-2">
                    <div className="p-2 rounded-xl gradient-primary">
                      <ArrowRightLeft className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span>
                      Transfer<span className="text-gradient">Compare</span>
                    </span>
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-6 space-y-6">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" />
                      <span>200+ Countries</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      <span>Real-time rates</span>
                    </div>
                  </div>

                  <nav className="flex flex-col gap-1.5" aria-label="Mobile navigation">
                    <Link to="/" onClick={() => setMobileOpen(false)}>
                      <Button
                        variant="ghost"
                        className={cn(
                          'w-full justify-start gap-2 rounded-xl',
                          pathname === '/' && 'bg-primary/10 text-primary font-medium',
                        )}
                      >
                        <ArrowRightLeft className="w-4 h-4" />
                        Compare Rates
                      </Button>
                    </Link>
                    {NAV_LINKS.map((item) => {
                      const Icon = item.icon;
                      const isActive = pathname === item.to;
                      return (
                        <Link key={item.to} to={item.to} onClick={() => setMobileOpen(false)}>
                          <Button
                            variant="ghost"
                            className={cn(
                              'w-full justify-start gap-2 rounded-xl',
                              isActive && 'bg-primary/10 text-primary font-medium',
                            )}
                          >
                            <Icon className="w-4 h-4" />
                            {item.label}
                          </Button>
                        </Link>
                      );
                    })}
                    <Link to="/privacy-policy" onClick={() => setMobileOpen(false)}>
                      <Button
                        variant="ghost"
                        className={cn(
                          'w-full justify-start rounded-xl text-muted-foreground',
                          pathname === '/privacy-policy' && 'bg-primary/10 text-primary font-medium',
                        )}
                      >
                        Privacy Policy
                      </Button>
                    </Link>
                    <Link to="/terms-of-service" onClick={() => setMobileOpen(false)}>
                      <Button
                        variant="ghost"
                        className={cn(
                          'w-full justify-start rounded-xl text-muted-foreground',
                          pathname === '/terms-of-service' && 'bg-primary/10 text-primary font-medium',
                        )}
                      >
                        Terms of Service
                      </Button>
                    </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
