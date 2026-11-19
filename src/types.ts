/**
 * Core TypeScript Definitions for LBH Bullion Showcase
 */

export interface SpotPrice {
  metal: 'gold' | 'silver';
  usdPerTroyOz: number;
  aedPerGram24k: number;
  aedPerTroyOz: number;
  timestamp: string;
}

export interface BullionInquiry {
  id?: string;
  transType: 'buy' | 'sell' | 'wholesale';
  clientType: 'individual' | 'corporate' | 'jeweler' | 'family-office';
  productName: string;
  quantity: string;
  deliveryMethod: 'counter-deira' | 'armored-transport' | 'vault-custody';
  fullName: string;
  companyName?: string;
  phone: string;
  email: string;
  notes?: string;
  submittedAt: string;
  status: 'pending' | 'review' | 'contacted' | 'settled';
}
