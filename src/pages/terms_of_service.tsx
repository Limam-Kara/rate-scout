import {
  ScrollText,
  Scale,
  ExternalLink,
  Mail,
  AlertTriangle,
  Server
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';


export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden font-sans selection:bg-primary/20">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px]" />
      </div>

      {/* Header */}
      <Header />

      <main className="relative z-10 flex-grow">
        <div className="mx-auto max-w-4xl px-6 py-20 space-y-12">
          
          {/* Hero Section */}
          <header className="space-y-6 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 text-primary mb-4">
              <ScrollText className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Terms of <span className="text-primary">Service</span>
            </h1>
            <p className="text-muted-foreground text-sm uppercase tracking-widest font-semibold">
              Last updated: October 2025
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Welcome to TransferCompare. By accessing or using our website and services, you agree to be bound by these Terms. Please read them carefully.
            </p>
          </header>

          <Separator className="bg-border/50" />

          {/* Terms Content - Organized in Cards */}
          <div className="space-y-6">
            
            {/* Introduction Card */}
            <Card className="bg-card/40 border-border backdrop-blur-sm">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-xl font-bold flex items-center gap-3 text-foreground">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">1</span>
                  About TransferCompare
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  TransferCompare is an independent comparison platform that helps users find the best and cheapest way to send money internationally. We compare exchange rates, transfer fees, and delivery times from leading providers like Wise, Remitly, Western Union, Revolut, and others. We are not a money transfer provider ourselves, we do not hold or transmit money, nor do we execute transactions on behalf of users. Our goal is to make international money transfers transparent, affordable, and easy to compare.
                </p>
              </CardContent>
            </Card>

            {/* Accordion for Detailed Terms */}
            <Accordion type="single" collapsible className="space-y-4">
              
              <AccordionItem value="item-2" className="border border-border rounded-xl bg-card/20 px-6">
                <AccordionTrigger className="hover:no-underline hover:text-primary text-lg font-semibold py-6">
                  2. Acceptance of Terms
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  <p className="mb-4">By using TransferCompare, you confirm that:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>You are at least 18 years old or have reached the legal age of majority in your jurisdiction.</li>
                    <li>You have read, understood, and agreed to these Terms.</li>
                    <li>You comply with all applicable laws when using the platform.</li>
                    <li>If you are using TransferCompare on behalf of a company or organization, you represent that you have the authority to bind that entity to these Terms.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-xl bg-card/20 px-6">
                <AccordionTrigger className="hover:no-underline hover:text-primary text-lg font-semibold py-6">
                  3. Our Services
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  <p className="mb-4">TransferCompare provides:</p>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Comparison tools for international money transfer services.</li>
                    <li>Up-to-date data on exchange rates, fees, and transfer options.</li>
                    <li>Educational and informational content to help you make informed decisions.</li>
                  </ul>
                  <p>We strive to ensure all information is accurate and current, but we cannot guarantee real-time accuracy. Exchange rates, fees, and conditions may change at any time; please always confirm details directly with the transfer provider before making a transaction.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-xl bg-card/20 px-6">
                <AccordionTrigger className="hover:no-underline hover:text-primary text-lg font-semibold py-6">
                  4. Our Relationship with Providers
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  TransferCompare partners with various money transfer companies and financial institutions. When you click on a provider's offer and complete a transfer on their platform, you are entering into a direct agreement with that provider, not with TransferCompare. Some providers may pay TransferCompare a referral commission when you use our comparison links. However, this does not affect the ranking or impartiality of our comparisons. Our recommendations are based solely on transparency, cost, and reliability.
                </AccordionContent>
              </AccordionItem>

               <AccordionItem value="item-5" className="border border-border rounded-xl bg-card/20 px-6">
                <AccordionTrigger className="hover:no-underline hover:text-primary text-lg font-semibold py-6">
                  5. User Responsibilities
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  <p className="mb-4">When using TransferCompare, you agree to:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Provide accurate information when prompted.</li>
                    <li>Not attempt to disrupt, hack, or misuse the website.</li>
                    <li>Respect the intellectual property rights of TransferCompare and its partners.</li>
                    <li>Verify any financial information before making a decision.</li>
                    <li>Accept that TransferCompare is not liable for losses resulting from reliance on third-party data or services.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

            </Accordion>

            {/* Disclaimer Section */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
               <Card className="bg-card/40 border-border backdrop-blur-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3 text-amber-500">
                    <AlertTriangle className="w-5 h-5" />
                    <h3 className="font-bold text-foreground">Limitation of Liability</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    TransferCompare does not provide financial or investment advice. All comparisons are for informational purposes only. To the fullest extent permitted by law, TransferCompare shall not be liable for any financial losses, direct or indirect damages, or errors resulting from using the Service.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/40 border-border backdrop-blur-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3 text-blue-500">
                    <Server className="w-5 h-5" />
                    <h3 className="font-bold text-foreground">Accuracy & Availability</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We make every effort to keep our information accurate. However, we cannot guarantee that all rates are correct at all times or that the platform will be uninterrupted. TransferCompare is provided on an “as is” and “as available” basis.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Final Clauses */}
             <Card className="bg-card/40 border-border backdrop-blur-sm">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                     <ExternalLink className="w-4 h-4 text-primary" /> 8. External Links
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Our platform may include links to third-party websites provided for convenience only. We do not control or endorse those websites and are not responsible for their content, security, or privacy practices.
                  </p>
                </div>
                 <div className="space-y-2">
                  <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                     <Scale className="w-4 h-4 text-primary" /> 9. Modifications
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We may update these Terms from time to time. When we do, we will revise the “Last Updated” date at the top of this page. Continued use of TransferCompare after updates constitutes your acceptance.
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Contact Section */}
          <section className="text-center space-y-4 pt-8">
            <h2 className="text-2xl font-bold text-foreground">Questions?</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms, please contact us.
            </p>
            <Button size="lg" className="mt-4 gap-2" variant="outline" asChild>
              <a href="mailto:contact@transfercompare.com">
                <Mail className="w-4 h-4" /> contact@transfercompare.com
              </a>
            </Button>
          </section>

        </div>
      </main>

      {/* Footer */}
      {/* Footer */}
           <Footer />
    </div>
  );
}
