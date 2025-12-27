import { Link } from 'react-router-dom';
import { 
  ArrowRightLeft, 
  Globe, 
  Sparkles, 
  LayoutGrid, 
  Info, 
  MessageSquare,
  Instagram,
  Youtube,
  ShieldCheck,
  Eye,
  Lock,
  Cookie,
  Server,
  FileText,
  Mail,
  CheckCircle2,
  XCircle,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { Footer } from '@/components/Footer';


export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden font-sans selection:bg-primary/20">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px]" />
      </div>

      {/* Header */}
      <header className="relative z-50 border-b border-border/30 glass sticky top-0 bg-background/80 backdrop-blur-md">
        <div className="container max-w-7xl py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative p-2.5 rounded-xl bg-primary shadow-lg">
                  <ArrowRightLeft className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground tracking-tight">
                  Transfer<span className="text-primary">Compare</span>
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

              <Link to="/components">
                <Button variant="outline" size="sm" className="gap-2">
                  <LayoutGrid className="w-4 h-4" />
                  <span className="hidden lg:inline">Components</span>
                </Button>
              </Link>

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

      <main className="relative z-10 flex-grow">
        <div className="mx-auto max-w-5xl px-6 py-20 space-y-16">
          
          {/* Hero Section */}
          <header className="space-y-6 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 text-primary mb-4">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              We Take Your <span className="text-primary">Privacy Seriously</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Your trust matters to us. Our mission is to help you find the cheapest and fastest way to send money abroad without compromising your personal data. We only collect what is essential.
            </p>
          </header>

          <Separator className="bg-border/50" />

          {/* Transparency Section (Side-by-Side) */}
          <section className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Transparency at Every Step</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* What We Do */}
              <Card className="bg-card/40 border-border backdrop-blur-sm overflow-hidden">
                <div className="h-1 w-full bg-green-500" />
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-500" /> What We Do
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Collect only essential data to personalize your experience.",
                      "Use encrypted connections to protect every piece of info.",
                      "Analyze anonymized data to improve platform performance."
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500/50 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* What We Don't Do */}
              <Card className="bg-card/40 border-border backdrop-blur-sm overflow-hidden">
                <div className="h-1 w-full bg-red-500" />
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2 text-foreground">
                    <XCircle className="w-5 h-5 text-red-500" /> What We Don't Do
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "We never sell your data to third parties.",
                      "We never share identifiable info without your consent.",
                      "We never track you across other websites for advertising."
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                         <span className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Detailed Policy Grid */}
          <section className="grid md:grid-cols-2 gap-8">
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Cookie className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Cookies & Analytics</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed pl-12 text-sm">
                We use cookies to make our platform work smoothly and understand visitor usage. Analytics are performed without storing personal identifiers. You can manage or delete cookies anytime via browser settings.
              </p>
            </div>

             <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Third-Party Services</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed pl-12 text-sm">
                When you click to compare providers (like Wise or Remitly), you are redirected to their sites. They have their own policies, which we encourage you to review before transferring money.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Your Rights</h3>
              </div>
              <div className="pl-12 text-sm text-muted-foreground space-y-2">
                <p>You have full control over your data. You can:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Request access to your information.</li>
                  <li>Ask us to delete or correct any personal data.</li>
                  <li>Withdraw your consent at any time.</li>
                </ul>
              </div>
            </div>

             <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Data Security</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed pl-12 text-sm">
                We apply industry-standard measures including SSL/TLS encryption and secure EU server storage. We perform regular security reviews and vulnerability checks.
              </p>
            </div>

          </section>

          {/* Business Model Note */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="p-3 rounded-full bg-background border border-border shadow-sm shrink-0">
                <Server className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-foreground">No Hidden Agendas</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our business model is built on trust. We may earn a small commission when you use a transfer service through our links, but this <span className="text-foreground font-medium">never affects our rankings</span>. Our priority is saving you money, not selling your info.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <section className="text-center space-y-4 pt-8">
            <h2 className="text-2xl font-bold text-foreground">Questions or Concerns?</h2>
            <p className="text-muted-foreground">
              We're here to help. If you have any questions about how your data is used, please contact our team.
            </p>
            <Button size="lg" className="mt-4 gap-2" variant="outline">
              <Mail className="w-4 h-4" /> contact@transfercompare.com
            </Button>
          </section>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
