import wiseLogo from '@/assets/providers/wise.svg';
import westernUnionLogo from '@/assets/providers/westernunion.svg';
import moneygramLogo from '@/assets/providers/moneygram.svg';

const PROVIDERS = [
  // scale: 1.2 means "make this 20% bigger"
  { name: 'Remitly', logo: 'https://purplme.com/wp-content/uploads/2022/12/Remitly_Horizontal_Logo_Preferred_RGB_Indigo_1920x436.png', scale: 1 },
  { name: 'Skrill', logo: 'https://brokerstorm.io/wp-content/uploads/2022/06/Skrill-explained.png', scale: 1 },
  { name: 'TapTap Send', logo: 'https://cdn.prod.website-files.com/63c9cda010be12a0c394c832/63e99748bca95cfa972a30a4_taptapsend%20logo.jpeg', scale: 1.4 }, // Zoomed in
  { name: 'Ria', logo: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgD0sD3QjMNTcjvfbHkrWdvAtAZtIynkHSf7o2-Ypv3UnDWcVtn82FvtDFzUsLY3lzULrBslh7g1Q0vnIe1n3-0RTpq1W5mfxAwxDXYMwXFXUuJ4mELdT5FsvHpP96JmqU2B3VBEIAfZ54agzCK4x417pUMqrskdPaPYr1poqcJKE9cp3c3kSIsB_oz/s3000/Ria%20Money_Transfer.png', scale: 0.9 },
  { name: 'Wise', logo: wiseLogo, isLocal: true, scale: 1.1 },
  { name: 'WorldRemit', logo: 'https://images.ctfassets.net/sb7j5o4oxtgv/1FvblblN5LUCqK4MmyfLn7/0616055f471ec5f3658baf6728140c45/WorldRemit_Identity_2020_RGB_72ppi_PURPLE.png?w=500', scale: 1 },
  { name: 'Azimo', logo: 'https://www.yourtechstory.com/wp-content/uploads/2020/02/azimo_fb_v2.png', scale: 1.1 },
  { name: 'Western Union', logo: "https://latestlogo.com/wp-content/uploads/2024/03/western-union-current-logo.png", isLocal: true, scale: 1.3 }, // Zoomed in
  { name: 'MoneyGram', logo: "https://logos-world.net/wp-content/uploads/2023/02/MoneyGram-Logo-1997.png", isLocal: true, scale: 1.2 }, // Zoomed in
  { name: 'Sendwave', logo: 'https://logos-world.net/wp-content/uploads/2024/04/Sendwave-Logo-Old.png', scale: 1.1 },
  { name: 'Paysend', logo: 'https://techround.co.uk/wp-content/uploads/fly-images/15244/paysend-1600x774.png', scale: 1 },
  { name: 'TransferGo', logo: 'https://th.bing.com/th/id/OIP.9kNsdHHbEChaDBomtIQYLQHaA6?w=422&h=52&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
  { name: 'Lemfi', logo: 'https://www.bellanaija.com/wp-content/uploads/2023/05/LEMFI-LOGO-dark.png', scale: 1.5 }, // Zoomed in significantly
  { name: 'XE', logo: 'https://th.bing.com/th/id/R.7991cd4080520ec65da92fb8c901e766?rik=%2fCtNr8vFiMwrKg&pid=ImgRaw&r=0', scale: 0.9 }, // Zoomed out
  { name: 'Xoom', logo: 'https://dvh1deh6tagwk.cloudfront.net/finder-au/wp-uploads/2018/12/XoomLogo_Supplied_1800x1000.jpg', scale: 1.1 },
  { name: 'OFX', logo: 'https://www.jasontayonline.com/uploads/9/1/8/7/9187643/ofx-logo_orig.png', scale: 1 },
];

export function TransferProviders() {
  return (
    <section className="relative z-10 py-16 bg-secondary/30">
      <div className="container max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
          Transfer Providers
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          {PROVIDERS.map((provider) => (
            <div
              key={provider.name}
              className="flex items-center justify-center h-32 p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg cursor-default transition-all duration-300 group overflow-hidden"
            >
              <img 
                src={provider.logo} 
                alt={`${provider.name} logo`}
                style={{
                   // Dynamic scaling based on the specific logo needs
                   transform: `scale(${provider.scale || 1})`
                }}
                className="max-h-12 w-auto max-w-[150px] object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
