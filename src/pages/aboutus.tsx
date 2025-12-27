import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRightLeft, 
  Lightbulb, 
  Bug, 
  MessageSquare, 
  HeartHandshake,
  Globe,
  Instagram,
  Youtube,
  ExternalLink,
  ArrowRight,
   Sparkles,
   Info, LayoutGrid
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Footer } from '@/components/Footer';


export default function About() {
  const [sendAmount, setSendAmount] = useState('500');

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header / Navigation */}
             <header className="relative z-50 border-b border-border/30 glass sticky top-0">
        <div className="container max-w-7xl py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3">
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
            </Link>
            
            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mr-2">
                <Globe className="w-4 h-4" />
                <span className="hidden lg:inline">200+ Countries</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mr-2">
                <Sparkles className="w-4 h-4" />
                <span className="hidden lg:inline">Real-time rates</span>
              </div>

              {/* <Link to="/components">
                <Button variant="outline" size="sm" className="gap-2">
                  <LayoutGrid className="w-4 h-4" />
                  <span className="hidden lg:inline">Components</span>
                </Button>
              </Link> */}

              <Link to="/aboutus">
                <Button variant="outline" size="sm" className="gap-2">
                  <Info className="w-4 h-4" />
                  About Us
                </Button>
              </Link>

              <Link to="/feedback">
                <Button variant="outline" size="sm" className="gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Feedback
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <div className="mx-auto max-w-3xl space-y-20 px-4 py-16">
          
          {/* Hero Section */}
          <section className="text-center md:text-left">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight lg:text-5xl">About ArbitrageX</h1>
            <p className="mb-4 text-xl text-muted-foreground leading-relaxed">
              ArbitrageX helps you compare top money transfer services, so you can find the fastest, cheapest, and safest way to send money internationally.
            </p>
            <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
              We provide real-time comparisons of fees, exchange rates, and transfer speeds across providers like Wise, Remitly, and WorldRemit.
            </p>
            <p className="text-lg font-medium text-foreground">
              Our mission is to make international money transfers transparent and easy for everyone, no matter where you are.
            </p>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="mb-8 text-3xl font-bold tracking-tight">Got Questions?</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { 
                  q: 'What is ArbitrageX?', 
                  a: 'ArbitrageX is a platform that helps you compare international money transfer services, showing fees, exchange rates, and transfer speeds.' 
                },
                { 
                  q: 'How do I compare money transfer services?', 
                  a: 'Simply use our comparison tool to select your sending and receiving countries, and we’ll show the best providers based on fees and speed.' 
                },
                { 
                  q: 'Is ArbitrageX free to use?', 
                  a: 'Yes, ArbitrageX is completely free to use. We earn through affiliate partnerships with transfer providers.' 
                },
                { 
                  q: 'Which countries can I send money to?', 
                  a: 'You can send money to a wide range of countries worldwide. Our comparison tool shows only providers available for your selected destination.' 
                },
                { 
                  q: 'Can I trust the providers listed on ArbitrageX?', 
                  a: 'Yes, we only list reputable money transfer services that comply with international regulations and have a proven track record.' 
                },
                { 
                  q: 'Do I need an account to use ArbitrageX?', 
                  a: 'No account is required to compare providers and see rates. You only need to create an account with the chosen provider to send money.' 
                },
                { 
                  q: 'Does ArbitrageX handle the transfers?', 
                  a: 'No, ArbitrageX does not handle the money itself. We provide information and comparisons; the actual transfer is completed by the selected provider.' 
                },
              ].map((faq, i) => (
                <AccordionItem 
                  key={i} 
                  value={`item-${i}`} 
                  className="border rounded-xl px-6 bg-card shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold py-6 hover:no-underline hover:text-primary">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

      

        </div>
      </main>

     {/* Footer */}
      <Footer />
    </div>
  );
}
