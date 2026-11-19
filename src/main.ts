import {
  LBH_CORPORATE_DATA,
  SPOT_PRICE_CONFIG,
  BULLION_CATALOG,
  GOLD_BULLION_BENEFITS,
  SILVER_BULLION_BENEFITS,
  WHY_INVEST_REASONS,
  INVESTOR_GUIDE_STEPS,
  COMPLIANCE_FRAMEWORK_POINTS,
} from './data/lbhData';
import { calculateProductPriceAed, calculateBuybackPriceAed, usdOzToAedGram } from './utils/pricing';

console.log("LBH Bullion Platform Initialized:", {
  legalName: LBH_CORPORATE_DATA.legalNameEn,
  license: LBH_CORPORATE_DATA.commercialLicenseNo,
  trn: LBH_CORPORATE_DATA.trn,
  contactPhone: LBH_CORPORATE_DATA.contact.primaryPhone,
  contactEmail: LBH_CORPORATE_DATA.contact.email,
  totalProducts: BULLION_CATALOG.length,
});

export {
  LBH_CORPORATE_DATA,
  SPOT_PRICE_CONFIG,
  BULLION_CATALOG,
  GOLD_BULLION_BENEFITS,
  SILVER_BULLION_BENEFITS,
  WHY_INVEST_REASONS,
  INVESTOR_GUIDE_STEPS,
  COMPLIANCE_FRAMEWORK_POINTS,
  calculateProductPriceAed,
  calculateBuybackPriceAed,
  usdOzToAedGram,
};
