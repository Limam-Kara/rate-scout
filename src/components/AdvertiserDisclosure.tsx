import { ArrowRight, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function AdvertiserDisclosure() {
  return (
    <section className="mt-12 md:mt-16 pb-12">
      {/* Green CTA banner */}
      <div className="rounded-2xl gradient-primary text-primary-foreground px-6 py-10 md:px-12 md:py-14 shadow-md flex flex-col items-center text-center gap-4 md:gap-5">
        <p className="text-xs md:text-sm font-semibold tracking-widest uppercase text-primary-foreground/90">
          Ready to Save on Transfers?
        </p>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight max-w-xl">
          Compare rates instantly and choose the best provider for your transfer.
        </h2>
        <Button
          size="lg"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-2 rounded-full px-8 md:px-10 bg-white text-emerald-700 hover:bg-emerald-50 font-semibold shadow-sm transition-all"
        >
          Compare Now
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {/* Advertiser disclosure */}
      <div className="mt-8 md:mt-10">
        <Card className="rounded-2xl border border-border/60 bg-card shadow-sm px-6 py-8 md:px-12 md:py-10 text-center space-y-4">
          <div className="flex flex-col items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Info className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold tracking-tight text-foreground">
              Advertiser Disclosure
            </h3>
          </div>
          <div className="space-y-3 max-w-3xl mx-auto text-sm md:text-base leading-relaxed text-muted-foreground">
            <p>
              At <span className="font-semibold text-foreground">TransferCompare</span>, we believe in complete transparency. Instead of
              cluttered banner ads or paywalls, we generate revenue through carefully selected affiliate partnerships with
              trusted money transfer providers.
            </p>
            <p>
              Our mission is to provide you with clear comparisons, live rates, and expert recommendations, always
              independent and unbiased. While some links may earn us a commission, this never influences our rankings or
              advice. Our priority is helping you make smarter, safer, and more cost-effective transfers.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
