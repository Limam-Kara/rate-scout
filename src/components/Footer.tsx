import { ArrowRightLeft, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/20 py-12 md:py-16">
      <div className="container max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-primary shadow-sm">
                <ArrowRightLeft className="w-4 h-4 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground">TransferCompare</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Comparing money transfer services with live rates, finding you the best deals in one trusted place.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Compare Rates</Link></li>
              <li><Link to="/feedback" className="hover:text-primary transition-colors">Feedback</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">About</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/aboutus" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@transfercompare.com"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>contact@transfercompare.com</span>
              </a>
            </div>
          </div>
        </div>

        <Separator className="bg-border/60 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} TransferCompare. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
