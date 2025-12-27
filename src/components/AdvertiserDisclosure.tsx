import { ArrowRight, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function AdvertiserDisclosure() {
  return (
    <section className="mt-12 md:mt-16">
      {/* Blue CTA banner */}
      <div className="rounded-3xl bg-primary text-primary-foreground px-6 py-10 md:px-12 md:py-14 shadow-xl flex flex-col items-center text-center gap-4 md:gap-6">
        <p className="text-sm md:text-base font-semibold tracking-wide uppercase text-primary-foreground/80">
          Ready to Save on Transfers?
        </p>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight max-w-xl">
          Compare rates instantly and choose the best provider for your transfer.
        </h2>
        <Button
          size="lg"
          className="mt-1 rounded-full px-8 md:px-10 bg-background text-foreground hover:bg-background/90 shadow-md"
        >
          Compare Now
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {/* Advertiser disclosure */}
      <div className="mt-10 md:mt-12">
        <Card className="glass-card px-6 py-10 md:px-12 md:py-12 text-center space-y-5">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Info className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground">
              Advertiser Disclosure
            </h3>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto text-sm md:text-base leading-relaxed text-muted-foreground">
            <p>
              At <span className="font-semibold text-foreground">ArbitrageX</span>, we believe in complete transparency. Instead of
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
