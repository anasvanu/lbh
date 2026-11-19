import { SPOT_PRICE_CONFIG, BullionProduct } from '../data/lbhData';

export const USD_TO_AED = SPOT_PRICE_CONFIG.usdToAed; // 3.674
export const GRAMS_PER_TROY_OZ = SPOT_PRICE_CONFIG.gramsPerTroyOz; // 31.1034768

/**
 * Convert USD per Troy Ounce to AED per Gram
 */
export function usdOzToAedGram(usdOz: number): number {
  return (usdOz * USD_TO_AED) / GRAMS_PER_TROY_OZ;
}

/**
 * Calculate dynamic indicative price for a bullion product
 */
export function calculateProductPriceAed(
  product: BullionProduct,
  currentGoldUsdOz: number = SPOT_PRICE_CONFIG.defaultGoldUsdPerOz,
  currentSilverUsdOz: number = SPOT_PRICE_CONFIG.defaultSilverUsdPerOz
): number {
  if (product.metal === 'gold') {
    const purityMultiplier = product.purity.includes('916') ? 0.9167 : 0.9999;
    const baseRatePerGram = usdOzToAedGram(currentGoldUsdOz) * purityMultiplier;
    const rawCost = product.weightGrams * baseRatePerGram;
    return rawCost * (1 + product.premiumPct / 100);
  }

  if (product.metal === 'silver') {
    const baseRatePerGram = usdOzToAedGram(currentSilverUsdOz);
    const rawCost = product.weightGrams * baseRatePerGram;
    return rawCost * (1 + product.premiumPct / 100);
  }

  // Gemstone / jewelry bespoke fallback
  return 18500;
}

/**
 * Calculate Guaranteed Buyback Price for LBH Bullion items
 */
export function calculateBuybackPriceAed(
  metal: 'gold' | 'silver',
  weightGrams: number,
  purityFraction: number = 0.9999,
  currentGoldUsdOz: number = SPOT_PRICE_CONFIG.defaultGoldUsdPerOz,
  currentSilverUsdOz: number = SPOT_PRICE_CONFIG.defaultSilverUsdPerOz
): number {
  if (metal === 'gold') {
    const gramRate = usdOzToAedGram(currentGoldUsdOz);
    const spotVal = weightGrams * gramRate * purityFraction;
    // Guaranteed 99.0% spot buyback on LBMA/UAE Good Delivery bars
    return spotVal * 0.990;
  } else {
    const gramRate = usdOzToAedGram(currentSilverUsdOz);
    const spotVal = weightGrams * gramRate;
    return spotVal * 0.965;
  }
}
