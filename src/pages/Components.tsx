import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightLeft, ArrowLeft, Check, X, Info, AlertTriangle, ChevronRight, Mail, Lock, User, Search, Plus, Minus, Star, Heart, Share2, Download, Upload, Settings, Bell, Calendar, Clock, MapPin, Phone, Globe, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { toast } from 'sonner';

export default function Components() {
  const [switchValue, setSwitchValue] = useState(false);
  const [sliderValue, setSliderValue] = useState([50]);
  const [progressValue] = useState(65);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-7xl py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="p-2.5 rounded-xl bg-primary shadow-lg">
                  <ArrowRightLeft className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground tracking-tight">
                    Arbitra<span className="text-primary">geX</span>
                  </h1>
                  <p className="text-xs text-muted-foreground font-medium">UI Components</p>
                </div>
              </Link>
            </div>
            
            <nav className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container max-w-7xl py-12 space-y-16">
        {/* Page Title */}
        <section className="space-y-4">
          <Badge variant="outline" className="mb-2">Design System</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            UI Components Library
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A comprehensive collection of reusable UI components for building beautiful and consistent interfaces.
          </p>
        </section>

        <Separator />

        {/* Typography Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Typography</h2>
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl font-extrabold tracking-tight">Heading 1 - Extra Bold</h1>
                <h2 className="text-4xl font-bold tracking-tight">Heading 2 - Bold</h2>
                <h3 className="text-3xl font-semibold">Heading 3 - Semibold</h3>
                <h4 className="text-2xl font-medium">Heading 4 - Medium</h4>
                <h5 className="text-xl font-medium">Heading 5 - Medium</h5>
                <h6 className="text-lg font-medium">Heading 6 - Medium</h6>
              </div>
              <Separator />
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  <strong>Body Large:</strong> This is a paragraph with larger text. Perfect for introductions and key messages that need emphasis.
                </p>
                <p className="text-base leading-relaxed">
                  <strong>Body Regular:</strong> This is the standard paragraph text used throughout the application. It provides comfortable readability for longer content blocks.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Body Small:</strong> Smaller text for secondary information, captions, and helper text.
                </p>
                <p className="text-xs text-muted-foreground">
                  <strong>Extra Small:</strong> Used for fine print, labels, and metadata.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Buttons Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Buttons</h2>
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div className="flex flex-wrap gap-4">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
              <Separator />
              <div className="flex flex-wrap gap-4 items-center">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon"><Plus className="w-4 h-4" /></Button>
              </div>
              <Separator />
              <div className="flex flex-wrap gap-4">
                <Button className="gap-2"><Mail className="w-4 h-4" /> With Icon</Button>
                <Button variant="outline" className="gap-2">Continue <ChevronRight className="w-4 h-4" /></Button>
                <Button disabled>Disabled</Button>
                <Button className="gap-2">
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Loading
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Badges Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Badges</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-4">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge className="bg-accent text-accent-foreground">Success</Badge>
                <Badge className="bg-yellow-500 text-white">Warning</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Alerts Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Alerts</h2>
          <div className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                This is an informational alert to provide helpful context to users.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Something went wrong. Please try again or contact support.
              </AlertDescription>
            </Alert>
            <Alert className="border-accent bg-accent/10">
              <Check className="h-4 w-4 text-accent" />
              <AlertTitle className="text-accent">Success</AlertTitle>
              <AlertDescription>
                Your changes have been saved successfully.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Cards Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Cards</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Card</CardTitle>
                <CardDescription>A simple card with header and content</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Cards are surfaces that display content and actions on a single topic.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/50 bg-primary/5">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Featured Card</CardTitle>
                    <CardDescription>With icon and styling</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This card has custom styling to stand out from the others.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm">Learn More</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Stats Card</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">$12,450</div>
                <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                  <span className="text-accent">+12.5%</span> from last month
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Lists Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Lists</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Unordered List</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {['Compare exchange rates', 'Find the best fees', 'Track your transfers', 'Save money instantly'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Checklist</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    { text: 'Create account', done: true },
                    { text: 'Verify identity', done: true },
                    { text: 'Add payment method', done: false },
                    { text: 'Make first transfer', done: false },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${item.done ? 'bg-accent text-accent-foreground' : 'border-2 border-border'}`}>
                        {item.done && <Check className="w-3 h-3" />}
                      </div>
                      <span className={item.done ? 'text-muted-foreground line-through' : 'text-foreground'}>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Table Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Tables</h2>
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Provider</TableHead>
                    <TableHead>Exchange Rate</TableHead>
                    <TableHead>Fee</TableHead>
                    <TableHead>Delivery</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { provider: 'Wise', rate: '10.24 MAD', fee: '$2.50', delivery: '1-2 days', status: 'Active' },
                    { provider: 'Remitly', rate: '10.18 MAD', fee: '$3.99', delivery: 'Minutes', status: 'Active' },
                    { provider: 'Western Union', rate: '10.05 MAD', fee: '$4.99', delivery: 'Same day', status: 'Active' },
                    { provider: 'MoneyGram', rate: '9.98 MAD', fee: '$5.99', delivery: '1-3 days', status: 'Pending' },
                  ].map((row, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{row.provider}</TableCell>
                      <TableCell>{row.rate}</TableCell>
                      <TableCell>{row.fee}</TableCell>
                      <TableCell>{row.delivery}</TableCell>
                      <TableCell className="text-right">
                        <Badge variant={row.status === 'Active' ? 'default' : 'secondary'}>
                          {row.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* Forms Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Forms</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>Fill out the form below to get in touch</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="name" placeholder="John Doe" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="email" type="email" placeholder="john@example.com" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." rows={4} />
                </div>
                <Button className="w-full gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Form Controls</CardTitle>
                <CardDescription>Various input types and controls</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Select</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD - US Dollar</SelectItem>
                      <SelectItem value="eur">EUR - Euro</SelectItem>
                      <SelectItem value="gbp">GBP - British Pound</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-3">
                  <Label>Radio Group</Label>
                  <RadioGroup defaultValue="bank">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="bank" id="bank" />
                      <Label htmlFor="bank" className="font-normal">Bank Transfer</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cash" id="cash" />
                      <Label htmlFor="cash" className="font-normal">Cash Pickup</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive email updates</p>
                  </div>
                  <Switch checked={switchValue} onCheckedChange={setSwitchValue} />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="font-normal">Accept terms and conditions</Label>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Progress & Sliders */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Progress & Sliders</h2>
          <Card>
            <CardContent className="pt-6 space-y-8">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <Label>Progress Bar</Label>
                  <span className="text-muted-foreground">{progressValue}%</span>
                </div>
                <Progress value={progressValue} />
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <Label>Slider</Label>
                  <span className="text-muted-foreground">{sliderValue[0]}</span>
                </div>
                <Slider value={sliderValue} onValueChange={setSliderValue} max={100} step={1} />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tabs Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Tabs</h2>
          <Card>
            <CardContent className="pt-6">
              <Tabs defaultValue="overview">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Overview Tab</h3>
                    <p className="text-muted-foreground">This is the overview content. Use tabs to organize related content into separate views.</p>
                  </div>
                </TabsContent>
                <TabsContent value="analytics" className="mt-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Analytics Tab</h3>
                    <p className="text-muted-foreground">View your transfer statistics and performance metrics here.</p>
                  </div>
                </TabsContent>
                <TabsContent value="settings" className="mt-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Settings Tab</h3>
                    <p className="text-muted-foreground">Configure your preferences and account settings.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        {/* FAQ / Accordion Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Got Questions?</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: 'What is ArbitrageX?', a: 'ArbitrageX is a comparison platform that helps you find the best exchange rates and lowest fees for international money transfers. We compare multiple providers to help you save money on every transaction.' },
              { q: 'How do I compare money transfer services?', a: 'Simply enter the amount you want to send, select your sending and receiving currencies, and click "Compare Rates". We\'ll show you real-time quotes from multiple providers sorted by the best value.' },
              { q: 'Is ArbitrageX free to use?', a: 'Yes! ArbitrageX is completely free for users. We earn a small commission from providers when you use our links, but this never affects our rankings or recommendations.' },
              { q: 'Which countries can I send money to?', a: 'We support transfers to over 200 countries worldwide. The available providers and rates may vary depending on your sending country and destination.' },
              { q: 'Can I trust the providers listed on ArbitrageX?', a: 'Absolutely. We only list licensed and regulated money transfer providers. Each provider is vetted for security, reliability, and customer service quality.' },
              { q: 'Do I need an account to use ArbitrageX?', a: 'No account is needed to compare rates. However, you\'ll need to create an account with your chosen provider to complete your transfer.' },
              { q: 'Does ArbitrageX handle the transfers?', a: 'No, we are a comparison service only. Once you select a provider, you\'ll be redirected to their website to complete your transfer directly with them.' },
            ].map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`} 
                className="border rounded-xl px-6 data-[state=open]:border-primary data-[state=open]:bg-primary/5"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Avatars & Tooltips */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Avatars & Tooltips</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex -space-x-3">
                  <Avatar className="border-2 border-background">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background">
                    <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background">
                    <AvatarFallback className="bg-accent text-accent-foreground">AB</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background">
                    <AvatarFallback className="bg-secondary text-secondary-foreground">+5</AvatarFallback>
                  </Avatar>
                </div>
                
                <Separator orientation="vertical" className="h-10" />
                
                <div className="flex gap-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon"><Heart className="w-4 h-4" /></Button>
                    </TooltipTrigger>
                    <TooltipContent>Add to favorites</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon"><Share2 className="w-4 h-4" /></Button>
                    </TooltipTrigger>
                    <TooltipContent>Share</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon"><Download className="w-4 h-4" /></Button>
                    </TooltipTrigger>
                    <TooltipContent>Download</TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Toast Demo */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Toast Notifications</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => toast.success('Success! Your action was completed.')}>
                  Show Success Toast
                </Button>
                <Button variant="destructive" onClick={() => toast.error('Error! Something went wrong.')}>
                  Show Error Toast
                </Button>
                <Button variant="outline" onClick={() => toast.info('Info: Here is some useful information.')}>
                  Show Info Toast
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Icons Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Icons (Lucide React)</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-6 md:grid-cols-10 gap-4">
                {[Mail, Lock, User, Search, Plus, Minus, Star, Heart, Share2, Download, Upload, Settings, Bell, Calendar, Clock, MapPin, Phone, Globe, Send, Check, X, Info, AlertTriangle, ChevronRight].map((Icon, i) => (
                  <div key={i} className="flex items-center justify-center p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                    <Icon className="w-5 h-5 text-foreground" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Using Lucide React icons. Import with: <code className="px-2 py-1 rounded bg-secondary text-foreground">{"import { IconName } from 'lucide-react'"}</code>
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8">
        <div className="container max-w-7xl text-center text-sm text-muted-foreground">
          <p>ArbitrageX UI Components Library • Built with React, Tailwind CSS & shadcn/ui</p>
        </div>
      </footer>
    </div>
  );
}
