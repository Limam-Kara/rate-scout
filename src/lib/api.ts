import { Quote, SearchParams } from '@/types/quote';

const API_BASE_URL = 'https://arbitragexx.vercel.app';

export const mockQuotes: Quote[] = [
  { provider: "Wise", category: "Dépôt Bancaire", rate: 9.12, fee: 6.25, recipient_gets: 855.08 },
  { provider: "Remitly", category: "Retrait en Espèces", rate: 9.09, fee: 0.00, recipient_gets: 909.47 },
  { provider: "Sendwave", category: "Dépôt Bancaire", rate: 8.94, fee: 0.00, recipient_gets: 893.51 },
];

export async function fetchQuotes(params: SearchParams): Promise<Quote[]> {
  const queryParams = new URLSearchParams({
    amount: params.amount.toString(),
    sendCurr: params.sendCurr,
    recvCurr: params.recvCurr,
    sendCty: params.sendCty,
    recvCty: params.recvCty,
  });

  const response = await fetch(`${API_BASE_URL}/api/quotes?${queryParams}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch quotes');
  }

  return response.json();
}
