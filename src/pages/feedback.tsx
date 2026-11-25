import {
  Lightbulb,
  Bug,
  MessageSquare,
  HeartHandshake,
  ArrowRight,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const FEEDBACK_OPTIONS = [
  {
    title: 'Request a Feature',
    description:
      'Have a feature idea or improvement? Share your suggestions to help us enhance our platform.',
    cta: 'Request',
    href: 'mailto:contact@transfercompare.com?subject=Feature%20Request',
    icon: Lightbulb,
    iconBg: 'bg-amber-100 dark:bg-amber-900/25',
    iconColor: 'text-amber-600 dark:text-amber-400',
  },
  {
    title: 'Report a Bug',
    description:
      'Found an issue? Let us know so we can fix it and improve our comparison tool.',
    cta: 'Report',
    href: 'mailto:contact@transfercompare.com?subject=Bug%20Report',
    icon: Bug,
    iconBg: 'bg-rose-100 dark:bg-rose-900/25',
    iconColor: 'text-rose-600 dark:text-rose-400',
  },
  {
    title: 'General Feedback',
    description:
      "Have general feedback? We're ready to listen and improve our platform for you.",
    cta: 'Submit',
    href: 'mailto:contact@transfercompare.com?subject=General%20Feedback',
    icon: MessageSquare,
    iconBg: 'bg-indigo-100 dark:bg-indigo-900/25',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
  },
];

export default function Feedback() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-x-clip font-sans selection:bg-primary/20">
      {/* Subtle Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px]" />
      </div>

      <Header />

      <main className="relative z-10 flex-grow">
        <div className="container max-w-5xl mx-auto space-y-16 px-4 sm:px-6 py-16 md:py-20">
          {/* Hero Section */}
          <header className="space-y-4 text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              We'd Love to <span className="text-primary">Hear from You!</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Share your thoughts with TransferCompare! Whether you have a feature request, notice a bug, or want to give general feedback, your input helps us improve the future of money transfers.
            </p>
          </header>

          {/* Feedback Cards Section */}
          <section aria-labelledby="feedback-options" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <h2 id="feedback-options" className="sr-only">Feedback options</h2>
            {FEEDBACK_OPTIONS.map((option) => {
              const Icon = option.icon;
              return (
                <div
                  key={option.title}
                  className="group rounded-2xl border border-border/60 bg-card p-8 flex flex-col items-start gap-5 shadow-sm hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${option.iconBg} flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}
                  >
                    <Icon className={`w-6 h-6 ${option.iconColor}`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground">{option.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{option.description}</p>
                  </div>
                  <div className="mt-auto w-full pt-3">
                    <Button
                      variant="outline"
                      className="w-full justify-between rounded-xl border-border/60 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200"
                      asChild
                    >
                      <a href={option.href}>
                        {option.cta}
                        <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              );
            })}
          </section>

          {/* Our Promise Section */}
          <section aria-labelledby="our-promise">
            <h2 id="our-promise" className="sr-only">Our Promise</h2>
            <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-8 shadow-sm">
              <div className="hidden md:flex h-16 w-16 flex-none items-center justify-center rounded-2xl bg-background border border-border/60 shadow-sm">
                <HeartHandshake className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-2 text-center md:text-left">
                <h3 className="text-2xl font-bold text-foreground">Our Promise</h3>
                <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
                  Your feedback is our guiding light. While we can't guarantee every idea will be implemented, we promise to review and consider all suggestions thoughtfully.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
