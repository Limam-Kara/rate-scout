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
import { Separator } from '@/components/ui/separator';
import { Footer } from '@/components/Footer';


export default function Feedback() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden font-sans selection:bg-primary/20">
      
      {/* Premium Background Ambience (Using your Primary/Secondary colors) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px]" />
      </div>

      {/* Glass Header */}
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


      <main className="relative z-10 flex-grow">
        <div className="mx-auto max-w-6xl space-y-20 px-6 py-20">
          
          {/* Hero Section */}
          <header className="space-y-6 text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              We'd Love to <br />
              <span className="text-primary">Hear from You!</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Share your thoughts with ArbitrageX! Whether you have a feature request, notice a bug, or want to give general feedback, your input helps us improve the future of money transfers.
            </p>
          </header>

          {/* Feedback Cards Section */}
          <section aria-labelledby="feedback-options" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Request a Feature Card */}
            <div className="group relative p-1 rounded-3xl transition-all duration-500 hover:-translate-y-1">
              {/* Gradient Border Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-border to-transparent rounded-3xl group-hover:from-yellow-500/50 group-hover:to-orange-500/50 transition-all duration-500 opacity-50" />
              
              <div className="relative h-full bg-card/60 backdrop-blur-md rounded-[22px] p-8 flex flex-col items-start gap-6 border border-transparent group-hover:bg-card/80 transition-all shadow-sm group-hover:shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                   <Lightbulb className="w-7 h-7 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">Request a Feature</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Have a feature idea or improvement? Share your suggestions to help us enhance our platform.
                  </p>
                </div>
                <div className="mt-auto w-full pt-4">
                  <Button className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300" variant="outline" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Request <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Report a Bug Card */}
            <div className="group relative p-1 rounded-3xl transition-all duration-500 hover:-translate-y-1">
               <div className="absolute inset-0 bg-gradient-to-br from-border to-transparent rounded-3xl group-hover:from-red-500/50 group-hover:to-rose-500/50 transition-all duration-500 opacity-50" />
              
              <div className="relative h-full bg-card/60 backdrop-blur-md rounded-[22px] p-8 flex flex-col items-start gap-6 border border-transparent group-hover:bg-card/80 transition-all shadow-sm group-hover:shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-red-100 dark:bg-red-900/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                   <Bug className="w-7 h-7 text-red-600 dark:text-red-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">Report a Bug</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Found an issue? Let us know so we can fix it and improve our comparison tool.
                  </p>
                </div>
                <div className="mt-auto w-full pt-4">
                  <Button className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300" variant="outline" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Report <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* General Feedback Card */}
            <div className="group relative p-1 rounded-3xl transition-all duration-500 hover:-translate-y-1">
               <div className="absolute inset-0 bg-gradient-to-br from-border to-transparent rounded-3xl group-hover:from-blue-500/50 group-hover:to-indigo-500/50 transition-all duration-500 opacity-50" />
              
              <div className="relative h-full bg-card/60 backdrop-blur-md rounded-[22px] p-8 flex flex-col items-start gap-6 border border-transparent group-hover:bg-card/80 transition-all shadow-sm group-hover:shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                   <MessageSquare className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">General Feedback</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Have general feedback? We're ready to listen and improve our platform for you.
                  </p>
                </div>
                <div className="mt-auto w-full pt-4">
                   <Button className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300" variant="outline" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Submit <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

          </section>

          {/* Our Promise Section - Premium Style */}
          <section aria-labelledby="our-promise">
            <h2 id="our-promise" className="sr-only">Our Promise</h2>
            <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
              
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

              <div className="hidden md:flex h-20 w-20 flex-none items-center justify-center rounded-full bg-background border border-border shadow-lg shadow-primary/10">
                <HeartHandshake className="w-10 h-10 text-primary" />
              </div>
              <div className="space-y-3 text-center md:text-left relative z-10">
                <h3 className="text-2xl font-bold text-foreground">Our Promise</h3>
                <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
                  Your feedback is our guiding light. While we can't guarantee every idea will be implemented, we promise to review and consider all suggestions thoughtfully.
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>

 {/* Footer */}
      <Footer />
    </div>
  );
}
