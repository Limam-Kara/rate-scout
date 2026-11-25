import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Mail, ShieldCheck, Sparkles } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const HIGHLIGHTS = [
  {
    icon: Globe,
    value: '10+ Trusted Providers',
    label: 'Leading remittance services compared side by side',
  },
  {
    icon: ShieldCheck,
    value: '0 Hidden Fees',
    label: 'Full breakdown of exchange rates and transfer costs',
  },
  {
    icon: Sparkles,
    value: 'Live Mid-Market Tracking',
    label: 'Real-time quotes updated for transparent decisions',
  },
];

const FAQS = [
  {
    q: 'What is TransferCompare?',
    a: 'TransferCompare is a platform that helps you compare international money transfer services, showing fees, exchange rates, and transfer speeds.',
  },
  {
    q: 'How do I compare money transfer services?',
    a: "Simply use our comparison tool to select your sending and receiving countries, and we'll show the best providers based on fees and speed.",
  },
  {
    q: 'Is TransferCompare free to use?',
    a: 'Yes, TransferCompare is completely free to use. We earn through affiliate partnerships with transfer providers.',
  },
  {
    q: 'Which countries can I send money to?',
    a: 'You can send money to a wide range of countries worldwide. Our comparison tool shows only providers available for your selected destination.',
  },
  {
    q: 'Can I trust the providers listed on TransferCompare?',
    a: 'Yes, we only list reputable money transfer services that comply with international regulations and have a proven track record.',
  },
  {
    q: 'Do I need an account to use TransferCompare?',
    a: 'No account is required to compare providers and see rates. You only need to create an account with the chosen provider to send money.',
  },
  {
    q: 'Does TransferCompare handle the transfers?',
    a: 'No, TransferCompare does not handle the money itself. We provide information and comparisons; the actual transfer is completed by the selected provider.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow">
        <div className="container max-w-4xl mx-auto space-y-16 px-4 sm:px-6 py-16 md:py-20">
          {/* Hero Section */}
          <section className="text-center max-w-2xl mx-auto space-y-5">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
              About <span className="text-primary">TransferCompare</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              TransferCompare helps you compare top money transfer services, so you can find the fastest, cheapest, and safest way to send money internationally.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              We provide real-time comparisons of fees, exchange rates, and transfer speeds across providers like Wise, Remitly, and WorldRemit. Our mission is to make international money transfers transparent and easy for everyone.
            </p>
          </section>

          {/* Key Indicators */}
          <section aria-label="Key platform highlights" className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {HIGHLIGHTS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.value}
                  className="rounded-2xl border border-border/60 bg-card p-6 text-center shadow-sm hover:shadow-md transition-all space-y-2"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-base font-bold text-foreground">{item.value}</h2>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.label}</p>
                </div>
              );
            })}
          </section>

          {/* FAQ Section */}
          <section className="max-w-3xl mx-auto">
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-center text-foreground">Got Questions?</h2>
            <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
              {FAQS.map((faq, i) => (
                <AccordionItem
                  key={faq.q}
                  value={`item-${i}`}
                  className="rounded-2xl border border-border/60 px-6 bg-card shadow-sm hover:border-primary/40 transition-colors"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold py-5 hover:no-underline hover:text-primary">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm md:text-base pb-5 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Bottom Callout */}
            <div className="mt-10 rounded-2xl border border-border/60 bg-secondary/30 p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left space-y-1">
                <h3 className="text-base font-bold text-foreground">Still have questions?</h3>
                <p className="text-sm text-muted-foreground">
                  Reach out to our team or share your feedback to help us improve.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Button variant="outline" size="sm" className="rounded-xl gap-2" asChild>
                  <a href="mailto:contact@transfercompare.com">
                    <Mail className="w-4 h-4" />
                    Contact Us
                  </a>
                </Button>
                <Button size="sm" className="rounded-xl gap-2" asChild>
                  <Link to="/feedback">
                    Send Feedback
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
