import { ArrowRightLeft, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
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
                <li><Link to="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
                <li><Link to="/api" className="hover:text-primary transition-colors">API Documentation</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">About</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/aboutus" className="hover:text-primary transition-colors">About Us</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Contact</h3>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">contact@transfercompare.com</p>
                <div className="flex gap-4">
                   <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full">
                     <Instagram className="w-5 h-5" />
                   </Button>
                   <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full">
                     <Youtube className="w-5 h-5" />
                   </Button>
                </div>
              </div>
            </div>
          </div>

          <Separator className="bg-border mb-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2025 TransferCompare. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/Privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
  );
}
