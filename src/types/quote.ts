export interface Quote {
  provider: string;
  category: string;
  rate: number;
  fee: number;
  recipient_gets: number;
  delivery_time?: string;
  provider_url?: string;
  coupon_code?: string;
}

export interface SearchParams {
  amount: number;
  sendCurr: string;
  recvCurr: string;
  sendCty: string;
  recvCty: string;
}

export interface CurrencyOption {
  value: string;
  currency: string;
  country: string;
  flag: string;
  symbol: string;
}

// Combined currency + country options for searchable select
export const SEND_OPTIONS: CurrencyOption[] = [
  { value: 'USD-US', currency: 'USD', country: 'US', flag: '🇺🇸', symbol: '$' },
  { value: 'EUR-FR', currency: 'EUR', country: 'FR', flag: '🇫🇷', symbol: '€' },
  { value: 'EUR-DE', currency: 'EUR', country: 'DE', flag: '🇩🇪', symbol: '€' },
  { value: 'EUR-ES', currency: 'EUR', country: 'ES', flag: '🇪🇸', symbol: '€' },
  { value: 'EUR-IT', currency: 'EUR', country: 'IT', flag: '🇮🇹', symbol: '€' },
  { value: 'EUR-BE', currency: 'EUR', country: 'BE', flag: '🇧🇪', symbol: '€' },
  { value: 'EUR-NL', currency: 'EUR', country: 'NL', flag: '🇳🇱', symbol: '€' },
  { value: 'GBP-GB', currency: 'GBP', country: 'GB', flag: '🇬🇧', symbol: '£' },
  { value: 'CAD-CA', currency: 'CAD', country: 'CA', flag: '🇨🇦', symbol: '$' },
];

export const RECEIVE_OPTIONS: CurrencyOption[] = [
  { value: 'MAD-MA', currency: 'MAD', country: 'MA', flag: '🇲🇦', symbol: 'د.م.' },
  { value: 'PHP-PH', currency: 'PHP', country: 'PH', flag: '🇵🇭', symbol: '₱' },
  { value: 'MXN-MX', currency: 'MXN', country: 'MX', flag: '🇲🇽', symbol: '$' },
  { value: 'INR-IN', currency: 'INR', country: 'IN', flag: '🇮🇳', symbol: '₹' },
  { value: 'PKR-PK', currency: 'PKR', country: 'PK', flag: '🇵🇰', symbol: '₨' },
  { value: 'BDT-BD', currency: 'BDT', country: 'BD', flag: '🇧🇩', symbol: '৳' },
  { value: 'NGN-NG', currency: 'NGN', country: 'NG', flag: '🇳🇬', symbol: '₦' },
  { value: 'GHS-GH', currency: 'GHS', country: 'GH', flag: '🇬🇭', symbol: '₵' },
  { value: 'KES-KE', currency: 'KES', country: 'KE', flag: '🇰🇪', symbol: 'KSh' },
];

// Country names for search
export const COUNTRY_NAMES: Record<string, string> = {
  US: 'United States',
  FR: 'France',
  DE: 'Germany',
  ES: 'Spain',
  IT: 'Italy',
  BE: 'Belgium',
  NL: 'Netherlands',
  GB: 'United Kingdom',
  CA: 'Canada',
  MA: 'Morocco',
  PH: 'Philippines',
  MX: 'Mexico',
  IN: 'India',
  PK: 'Pakistan',
  BD: 'Bangladesh',
  NG: 'Nigeria',
  GH: 'Ghana',
  KE: 'Kenya',
};

// Provider URLs
export const PROVIDER_URLS: Record<string, string> = {
  'Wise': 'https://wise.com',
  'Remitly': 'https://remitly.com',
  'Sendwave': 'https://sendwave.com',
  'Western Union': 'https://westernunion.com',
  'TapTap Send': 'https://taptapsend.com',
  'WorldRemit': 'https://worldremit.com',
  'Xoom': 'https://xoom.com',
  'MoneyGram': 'https://moneygram.com',
};

// Legacy exports for backwards compatibility
export const CURRENCIES = [
  { value: 'USD', label: 'USD - US Dollar', symbol: '$' },
  { value: 'EUR', label: 'EUR - Euro', symbol: '€' },
  { value: 'GBP', label: 'GBP - British Pound', symbol: '£' },
] as const;

export const RECEIVING_CURRENCIES = [
  { value: 'MAD', label: 'MAD - Moroccan Dirham', symbol: 'د.م.' },
  { value: 'PHP', label: 'PHP - Philippine Peso', symbol: '₱' },
  { value: 'MXN', label: 'MXN - Mexican Peso', symbol: '$' },
] as const;

export const SENDING_COUNTRIES = [
  { value: 'US', label: 'United States', flag: '🇺🇸' },
  { value: 'FR', label: 'France', flag: '🇫🇷' },
  { value: 'GB', label: 'United Kingdom', flag: '🇬🇧' },
] as const;

export const RECEIVING_COUNTRIES = [
  { value: 'MA', label: 'Morocco', flag: '🇲🇦' },
  { value: 'PH', label: 'Philippines', flag: '🇵🇭' },
  { value: 'MX', label: 'Mexico', flag: '🇲🇽' },
] as const;
