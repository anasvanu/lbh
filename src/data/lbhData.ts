/**
 * LBH Bullion Gold Trading L.L.C (ال بي اتش بوليان جولدن للتجارة ذ.م.م)
 * Official Corporate Registration, Compliance & Bullion Catalog Data
 * 
 * STRICT COMPLIANCE & PRIVACY GUARDRAILS:
 * - NO personal partner names, personal emails, passport numbers, or personal roles.
 * - NO share capital, share counts, or ownership/shareholding structures.
 * - Only official corporate registration, DET license details, and compliance data.
 */

export interface CorporateProfile {
  legalNameEn: string;
  legalNameAr: string;
  shortName: string;
  brandTagline: string;
  domain: string;
  licensingAuthority: string;
  commercialLicenseNo: string;
  commercialRegisterNo: string;
  trn: string; // Tax Registration Number (FTA)
  establishmentCardNo: string;
  establishmentRefNo: string;
  licenseIssueDate: string;
  licenseExpiryDate: string;
  legalStructure: string;
  companyDuration: string;
  financialYear: string;
  amlComplianceLaw: string;
  goAmlCategory: string;
  registeredOffice: {
    address: string;
    officeNo: string;
    building: string;
    subdistrict: string;
    district: string;
    city: string;
    country: string;
    parcelId: string;
  };
  contact: {
    primaryPhone: string;
    phoneDisplay: string;
    email: string; // Configurable email field defaulting to lbhbullion@gmail.com
    workingHours: string;
    workingDays: string;
  };
  licensedActivities: {
    code?: string;
    title: string;
    description: string;
  }[];
}

export const LBH_CORPORATE_DATA: CorporateProfile = {
  legalNameEn: "LBH Bullion Gold Trading L.L.C",
  legalNameAr: "ال بي اتش بوليان جولدن للتجارة ذ.م.م",
  shortName: "LBH Bullion",
  brandTagline: "PRECIOUS METALS | TRUST | INTEGRITY",
  domain: "https://lbhbullion.com",
  licensingAuthority: "Dubai Department of Economy and Tourism (DET)",
  commercialLicenseNo: "1656047",
  commercialRegisterNo: "2933247",
  trn: "105618125600003",
  establishmentCardNo: "2/1/1344596",
  establishmentRefNo: "10409819",
  licenseIssueDate: "16 October 2026",
  licenseExpiryDate: "15 October 2027",
  legalStructure: "Limited Liability Company (LLC)",
  companyDuration: "99 Years (Automatically Renewable)",
  financialYear: "1st January – 31st December",
  amlComplianceLaw: "UAE Federal Decree-Law No. (20) of 2018 on AML/CFT",
  goAmlCategory: "Dealers in Precious Metals and Stones (DPMS) under UAE Ministry of Economy",
  registeredOffice: {
    address: "Office No. 403, Property of Asadollah Hosseinali Keykha Bakhshi, Al Dhagaya, Al Ras, Deira, Dubai, United Arab Emirates",
    officeNo: "Office No. 403",
    building: "Property of Asadollah Hosseinali Keykha Bakhshi",
    subdistrict: "Al Dhagaya",
    district: "Al Ras, Deira",
    city: "Dubai",
    country: "United Arab Emirates",
    parcelId: "113-428",
  },
  contact: {
    primaryPhone: "+97142626916",
    phoneDisplay: "+971 4 262 6916",
    email: "lbhbullion@gmail.com", // Configurable corporate email field
    workingHours: "9:00 AM – 7:30 PM (GST)",
    workingDays: "Monday to Saturday (Closed Sundays)",
  },
  licensedActivities: [
    {
      title: "Trading of Raw Gold and Precious Metals",
      description: "Sourcing, importing, exporting, wholesale buying, and selling physical gold bullion, bars, and unworked precious metals.",
    },
    {
      title: "Trading of Jewellery & Accessories made of Gold & Silver",
      description: "Wholesale and retail distribution of certified crafted gold and silver ornaments, chains, and investment jewelry.",
    },
    {
      title: "Diamonds, Pearls & Precious Stones Trading",
      description: "Procurement, valuation, and supply of certified loose diamonds, natural and cultured pearls, and precious gemstones.",
    },
    {
      title: "Used Jewellery Trading",
      description: "Acquisition, purity testing, refinement sourcing, and trading of pre-owned precious metal jewelry.",
    },
  ],
};

export interface SpotPriceConfig {
  usdToAed: number;
  gramsPerTroyOz: number;
  defaultGoldUsdPerOz: number;
  defaultSilverUsdPerOz: number;
  karatFractions: {
    k24: number;
    k22: number;
    k21: number;
    k18: number;
    silver999: number;
  };
}

export const SPOT_PRICE_CONFIG: SpotPriceConfig = {
  usdToAed: 3.674, // Fixed official UAE Dirham peg
  gramsPerTroyOz: 31.1034768,
  defaultGoldUsdPerOz: 2715.40,
  defaultSilverUsdPerOz: 32.18,
  karatFractions: {
    k24: 0.9999,
    k22: 0.9167,
    k21: 0.8750,
    k18: 0.7500,
    silver999: 0.9990,
  },
};

export interface BullionProduct {
  id: string;
  name: string;
  category: "gold-bars" | "gold-coins" | "silver-bars" | "silver-coins" | "jewellery-stones";
  metal: "gold" | "silver" | "gemstone";
  purity: string; // e.g., "999.9 Fine Gold", "999 Fine Silver"
  weightGrams: number;
  weightDisplay: string;
  premiumPct: number; // Minting / fabrication premium over spot
  origin: string;
  certification: string;
  dimensions?: string;
  inStock: boolean;
  featured: boolean;
  description: string;
  popular?: boolean;
}

export const BULLION_CATALOG: BullionProduct[] = [
  // Gold Bars (Denominations: 1g to 1kg)
  {
    id: "gb-1000g",
    name: "1 kg (1,000g) 999.9 Fine Gold Cast Bar",
    category: "gold-bars",
    metal: "gold",
    purity: "999.9 (24 Karat)",
    weightGrams: 1000,
    weightDisplay: "1,000 g (1 kg)",
    premiumPct: 0.65,
    origin: "Emirates Good Delivery / LBMA Refiners",
    certification: "Serialized Assay Certificate & Bar Stamp",
    dimensions: "117 × 53 × 9 mm",
    inStock: true,
    featured: true,
    popular: true,
    description: "The institutional standard for precious metals reserves and treasury storage. Cast bar with official purity hallmark and serial number.",
  },
  {
    id: "gb-100g",
    name: "100g 999.9 Fine Gold Minted Bar",
    category: "gold-bars",
    metal: "gold",
    purity: "999.9 (24 Karat)",
    weightGrams: 100,
    weightDisplay: "100 g",
    premiumPct: 1.15,
    origin: "Dubai Good Delivery Certified",
    certification: "Tamper-Proof CertiCard Blister Assay",
    dimensions: "47 × 27 × 4.5 mm",
    inStock: true,
    featured: true,
    popular: true,
    description: "Premier choice for private wealth accumulation. Sealed in security packaging with unique serial number and assayer signature.",
  },
  {
    id: "gb-50g",
    name: "50g 999.9 Fine Gold Minted Bar",
    category: "gold-bars",
    metal: "gold",
    purity: "999.9 (24 Karat)",
    weightGrams: 50,
    weightDisplay: "50 g",
    premiumPct: 1.45,
    origin: "UAE / Swiss Refinery Standards",
    certification: "Individual Serialized Blister Pack",
    dimensions: "40 × 24 × 3 mm",
    inStock: true,
    featured: true,
    description: "Optimal balance between flexibility and low fabrication spread. Internationally recognizable for immediate global liquidation.",
  },
  {
    id: "gb-1oz",
    name: "31.1g (1 Troy Ounce) 999.9 Fine Gold Bar",
    category: "gold-bars",
    metal: "gold",
    purity: "999.9 (24 Karat)",
    weightGrams: 31.1035,
    weightDisplay: "31.1 g (1 oz)",
    premiumPct: 1.65,
    origin: "LBMA / Emirates Accredited Mint",
    certification: "High-Security Assay Card",
    dimensions: "41 × 24 × 2.1 mm",
    inStock: true,
    featured: true,
    popular: true,
    description: "The world's most traded retail bullion denomination. Globally liquid across all commodities desks and sovereign markets.",
  },
  {
    id: "gb-20g",
    name: "20g 999.9 Fine Gold Minted Bar",
    category: "gold-bars",
    metal: "gold",
    purity: "999.9 (24 Karat)",
    weightGrams: 20,
    weightDisplay: "20 g",
    premiumPct: 1.85,
    origin: "Dubai Gold Souk Delivery",
    certification: "Assay Verified Blister Packaging",
    dimensions: "31 × 18 × 2 mm",
    inStock: true,
    featured: false,
    description: "Compact investment ingot favored for phased portfolio entry and family estate planning.",
  },
  {
    id: "gb-10g",
    name: "10g 999.9 Fine Gold Minted Bar",
    category: "gold-bars",
    metal: "gold",
    purity: "999.9 (24 Karat)",
    weightGrams: 10,
    weightDisplay: "10 g",
    premiumPct: 2.20,
    origin: "Emirates Good Delivery",
    certification: "Tamper-Evident Assay CertiCard",
    dimensions: "25.5 × 15.5 × 1.5 mm",
    inStock: true,
    featured: true,
    description: "Popular retail denomination offering accessible physical gold ownership with full assayer verification.",
  },
  {
    id: "gb-5g",
    name: "5g 999.9 Fine Gold Minted Bar",
    category: "gold-bars",
    metal: "gold",
    purity: "999.9 (24 Karat)",
    weightGrams: 5,
    weightDisplay: "5 g",
    premiumPct: 2.80,
    origin: "Swiss / UAE Certified Mint",
    certification: "Holographic Assay Packaging",
    dimensions: "22 × 13 × 1.1 mm",
    inStock: true,
    featured: false,
    description: "Small-denomination pure bullion bar engineered for gifting, micro-investments, and fractional allocation.",
  },
  {
    id: "gb-2.5g",
    name: "2.5g 999.9 Fine Gold Minted Bar",
    category: "gold-bars",
    metal: "gold",
    purity: "999.9 (24 Karat)",
    weightGrams: 2.5,
    weightDisplay: "2.5 g",
    premiumPct: 3.40,
    origin: "Dubai Certified Assayer",
    certification: "Sealed Assay Blister Card",
    dimensions: "19 × 11.5 × 0.8 mm",
    inStock: true,
    featured: false,
    description: "Fractional 24K gold bar with fine laser engraved crest and verifiable purity credentials.",
  },
  {
    id: "gb-1g",
    name: "1g 999.9 Fine Gold Minted Bar",
    category: "gold-bars",
    metal: "gold",
    purity: "999.9 (24 Karat)",
    weightGrams: 1.0,
    weightDisplay: "1 g",
    premiumPct: 4.20,
    origin: "UAE Accredited Mint",
    certification: "Security Sealed Micro-Assay Pack",
    dimensions: "15 × 8.5 × 0.5 mm",
    inStock: true,
    featured: false,
    description: "Entry-tier investment bar for disciplined monthly savings and tangible gold custody.",
  },

  // Gold Coins
  {
    id: "gc-falcon-1oz",
    name: "1 oz UAE Falcon Heritage 999.9 Gold Coin",
    category: "gold-coins",
    metal: "gold",
    purity: "999.9 (24 Karat)",
    weightGrams: 31.1035,
    weightDisplay: "31.1 g (1 oz)",
    premiumPct: 2.25,
    origin: "United Arab Emirates",
    certification: "Proof Minting in Deluxe Capsule with Certificate",
    dimensions: "Diameter: 32 mm",
    inStock: true,
    featured: true,
    popular: true,
    description: "Iconic commemorative coin honoring Emirati heritage with high-relief falcon strike and full DET compliance.",
  },
  {
    id: "gc-maple-1oz",
    name: "1 oz Canadian Maple Leaf 999.9 Gold Coin",
    category: "gold-coins",
    metal: "gold",
    purity: "999.9 (24 Karat)",
    weightGrams: 31.1035,
    weightDisplay: "31.1 g (1 oz)",
    premiumPct: 2.10,
    origin: "Royal Canadian Mint",
    certification: "Micro-radial lines & Bullion DNA Anti-Counterfeiting",
    dimensions: "Diameter: 30 mm",
    inStock: true,
    featured: true,
    description: "One of the most trusted 24-karat sovereign bullion coins worldwide with state-of-the-art laser security.",
  },
  {
    id: "gc-sovereign-8g",
    name: "Full Sovereign Gold Coin (22K)",
    category: "gold-coins",
    metal: "gold",
    purity: "916.7 (22 Karat Crown Gold)",
    weightGrams: 7.988,
    weightDisplay: "7.988 g",
    premiumPct: 2.40,
    origin: "The Royal Mint (UK)",
    certification: "Official Royal Mint Strike",
    dimensions: "Diameter: 22.05 mm",
    inStock: true,
    featured: false,
    description: "Historic bullion coin struck in durable 22-karat gold with the iconic St. George and Dragon design.",
  },

  // Silver Bars
  {
    id: "sb-1000g",
    name: "1 kg (1,000g) 999 Fine Silver Cast Bar",
    category: "silver-bars",
    metal: "silver",
    purity: "999 Fine Silver",
    weightGrams: 1000,
    weightDisplay: "1,000 g (1 kg)",
    premiumPct: 3.80,
    origin: "Emirates Good Delivery / European Refiners",
    certification: "Stamped Serial & Weight Assayer Mark",
    dimensions: "115 × 52 × 17 mm",
    inStock: true,
    featured: true,
    popular: true,
    description: "The core foundation for strategic silver physical positions. Heavy industrial demand and wealth preservation vehicle.",
  },
  {
    id: "sb-500g",
    name: "500g 999 Fine Silver Cast Ingot",
    category: "silver-bars",
    metal: "silver",
    purity: "999 Fine Silver",
    weightGrams: 500,
    weightDisplay: "500 g",
    premiumPct: 4.10,
    origin: "Dubai Good Delivery",
    certification: "Individually Numbered Certificate",
    dimensions: "90 × 44 × 12 mm",
    inStock: true,
    featured: false,
    description: "Half-kilogram silver bar combining high density storage with swift retail liquidation parameters.",
  },
  {
    id: "sb-100g",
    name: "100g 999 Fine Silver Minted Bar",
    category: "silver-bars",
    metal: "silver",
    purity: "999 Fine Silver",
    weightGrams: 100,
    weightDisplay: "100 g",
    premiumPct: 4.60,
    origin: "UAE Certified Mint",
    certification: "Sealed Blister Card Packaging",
    dimensions: "50 × 29 × 7 mm",
    inStock: true,
    featured: true,
    description: "Mirror-finish minted silver bar sealed with protective polymer card and security hologram.",
  },
  {
    id: "sb-1oz",
    name: "31.1g (1 Troy Ounce) 999 Fine Silver Bar",
    category: "silver-bars",
    metal: "silver",
    purity: "999 Fine Silver",
    weightGrams: 31.1035,
    weightDisplay: "31.1 g (1 oz)",
    premiumPct: 5.50,
    origin: "International Accredited Mint",
    certification: "Assay Ingot with CertiCard",
    dimensions: "49 × 28 × 2.5 mm",
    inStock: true,
    featured: false,
    description: "Convenient standard one-ounce silver bar for incremental precious metals accumulation.",
  },

  // Silver Coins
  {
    id: "sc-philharmonic-1oz",
    name: "1 oz Austrian Philharmonic 999 Silver Coin",
    category: "silver-coins",
    metal: "silver",
    purity: "999 Fine Silver",
    weightGrams: 31.1035,
    weightDisplay: "31.1 g (1 oz)",
    premiumPct: 4.90,
    origin: "Austrian Mint (Münze Österreich)",
    certification: "Legal Tender Face Value €1.50",
    dimensions: "Diameter: 37 mm",
    inStock: true,
    featured: true,
    popular: true,
    description: "Europe's premier silver bullion coin displaying the magnificent pipe organ of Vienna's Musikverein.",
  },
  {
    id: "sc-eagle-1oz",
    name: "1 oz American Silver Eagle 999 Coin",
    category: "silver-coins",
    metal: "silver",
    purity: "999 Fine Silver",
    weightGrams: 31.1035,
    weightDisplay: "31.1 g (1 oz)",
    premiumPct: 5.80,
    origin: "United States Mint",
    certification: "Official US Sovereign Bullion",
    dimensions: "Diameter: 40.6 mm",
    inStock: true,
    featured: true,
    description: "The world's benchmark silver coin featuring Adolph A. Weinman's full-length Walking Liberty figure.",
  },

  // Precious Stones & Jewellery
  {
    id: "pj-certified-diamonds",
    name: "GIA / IGI Certified Investment Diamonds",
    category: "jewellery-stones",
    metal: "gemstone",
    purity: "VVS1-VS2 • Color D-F • Triple Excellent",
    weightGrams: 0.20, // 1 carat equivalent
    weightDisplay: "1.00 – 5.00+ Carats",
    premiumPct: 1.0,
    origin: "Kimberley Process Compliant Wholesalers",
    certification: "GIA / IGI Gemological Dossier with Laser Inscription",
    inStock: true,
    featured: true,
    description: "Wholesale calibrated loose diamonds sourced under strict conflict-free Kimberley Process certification with laser-inscribed girdle numbers.",
  },
  {
    id: "pj-raw-gold-dore",
    name: "Institutional Raw Gold & Unworked Bullion Doré",
    category: "jewellery-stones",
    metal: "gold",
    purity: "92% – 98% Raw Bullion Content (Pre-Refinement)",
    weightGrams: 5000,
    weightDisplay: "5,000 g (5 kg+ lots)",
    premiumPct: 0.25,
    origin: "Licensed Global Mining & Sourcing Partners",
    certification: "Comprehensive Assayer Fire-Assay Certificate & goAML Clearance",
    inStock: true,
    featured: false,
    description: "Institutional supply of unworked raw precious metal lots for certified Dubai refiners, jewelers, and industrial manufacturers.",
  },
  {
    id: "pj-22k-jewellery",
    name: "22K Fine Artisan Investment Jewellery",
    category: "jewellery-stones",
    metal: "gold",
    purity: "916.7 Fine Gold (22 Karat)",
    weightGrams: 50,
    weightDisplay: "Custom Weight (15g – 250g+)",
    premiumPct: 4.50,
    origin: "Dubai Gold Souk Master Artisans",
    certification: "Dubai Central Laboratory (Bareeq) Hallmarked",
    inStock: true,
    featured: false,
    description: "High-karat traditional and contemporary gold jewelry crafted in Dubai with guaranteed weight and certified hallmarking.",
  },
];

export interface SpotlightBenefit {
  number: string;
  title: string;
  description: string;
}

export const GOLD_BULLION_BENEFITS: SpotlightBenefit[] = [
  {
    number: "01",
    title: "LBMA & UAE Good Delivery Refiners",
    description: "All gold bars are refined and minted by internationally accredited refiners complying with London Bullion Market Association (LBMA) and UAE Good Delivery specifications.",
  },
  {
    number: "02",
    title: "Transparent Real-Time Spot Exchange Pricing",
    description: "Direct alignment with global London/COMEX spot commodities quotes pegged to the UAE Dirham (1 USD = 3.674 AED), ensuring razor-thin spreads with zero hidden markups.",
  },
  {
    number: "03",
    title: "Guaranteed Competitive Buyback Facility",
    description: "We provide an unconditional, immediate two-way liquidation commitment. Liquidate your gold bars at guaranteed competitive spot-indexed rates on the same business day.",
  },
  {
    number: "04",
    title: "0% VAT for Investment Grade Precious Metals",
    description: "Physical gold bars and coins of 99% purity and above qualify for 0% VAT exemption under UAE Federal Tax Authority (FTA) regulations and reverse-charge mechanism.",
  },
  {
    number: "05",
    title: "Tamper-Evident Assay Security Packaging",
    description: "Every bar from 1g to 100g is permanently sealed in an individual CertiCard blister pack with assayer credentials, weight, fineness, and unique laser serial tracking.",
  },
  {
    number: "06",
    title: "Over-the-Counter Settlement in Deira Gold Market",
    description: "Direct physical counter handover and institutional custody handover at our licensed office in Al Ras, Deira, supported by bank wire or verified payment instruments.",
  },
];

export const SILVER_BULLION_BENEFITS: SpotlightBenefit[] = [
  {
    number: "01",
    title: "Dual Strategic & Industrial Asset Powerhouse",
    description: "Silver benefits from accelerating industrial consumption in green tech, solar photovoltaics, and microchips alongside its historical monetary hedging capability.",
  },
  {
    number: "02",
    title: "Tier-1 Sovereign Mints & Certified Refineries",
    description: "Sourced directly from leading international mints including Royal Canadian Mint, US Mint, Austrian Mint, and accredited Dubai Good Delivery refiners.",
  },
  {
    number: "03",
    title: "Accessible Denominations for Volume Scaling",
    description: "From 1oz coins to 1kg and 5kg cast bars, silver allows systematic accumulation of physical weight at accessible capital thresholds.",
  },
  {
    number: "04",
    title: "Institutional Wholesale & Retail Custody",
    description: "Tailored bulk allocations for corporate reserve treasuries, family offices, and retail collectors with direct Dubai vault verification.",
  },
  {
    number: "05",
    title: "Transparent Two-Way Daily Liquidity",
    description: "Tight spreads and guaranteed buyback policies guarantee that clients can expand or liquidate their physical silver positions rapidly in AED or USD.",
  },
  {
    number: "06",
    title: "Full goAML & Statutory Invoicing Compliance",
    description: "Every trade is documented under UAE Ministry of Economy goAML framework with formal commercial invoices referencing DET License No. 1656047 and TRN 105618125600003.",
  },
];

export interface WhyInvestCard {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  stat?: string;
  statLabel?: string;
}

export const WHY_INVEST_REASONS: WhyInvestCard[] = [
  {
    icon: "ShieldAlert",
    title: "Inflation Protection",
    subtitle: "Purchasing Power Preservation",
    description: "Unlike fiat currencies vulnerable to inflationary dilution, physical bullion preserves real purchasing power across generations and monetary cycles.",
    stat: "5,000+",
    statLabel: "Years as Store of Value",
  },
  {
    icon: "PieChart",
    title: "Portfolio Diversification",
    subtitle: "Uncorrelated Asset Class",
    description: "Physical gold and silver exhibit historically low or negative correlation to equities, debt bonds, and volatile digital tokens, cushioning total portfolio risk.",
    stat: "-0.15",
    statLabel: "Equities Correlation Index",
  },
  {
    icon: "Globe",
    title: "Global Market Value",
    subtitle: "Universal International Acceptance",
    description: "Bullion bars minted to 999.9 purity are universally recognized across every sovereign financial jurisdiction without regional currency boundaries.",
    stat: "100%",
    statLabel: "Global Liquidation Recognition",
  },
  {
    icon: "Coins",
    title: "High Liquidity & Buyback",
    subtitle: "Instant Capital Conversion",
    description: "LBH Bullion guarantees competitive daily buyback on certified bars. Convert your bullion into AED or USD bank settlement rapidly at live spot pricing.",
    stat: "T+0",
    statLabel: "Counter Settlement Available",
  },
  {
    icon: "Lock",
    title: "Tangible Asset Ownership",
    subtitle: "Zero Counterparty Risk",
    description: "Physical bullion held in your possession or segregated vaulting carries zero counterparty, credit, or intermediary insolvency vulnerabilities.",
    stat: "Physical",
    statLabel: "Unencumbered Ownership",
  },
  {
    icon: "Award",
    title: "Financial Stability",
    subtitle: "Safe Haven Sovereign Anchor",
    description: "Central banks and institutional asset managers maintain gold as primary foreign reserves during periods of heightened geopolitical and macroeconomic instability.",
    stat: "999.9",
    statLabel: "Fine Gold Purity Standard",
  },
];

export interface InvestorGuideStep {
  step: string;
  title: string;
  summary: string;
  bullets: string[];
}

export const INVESTOR_GUIDE_STEPS: InvestorGuideStep[] = [
  {
    step: "01",
    title: "Understanding Gold Bullion",
    summary: "Master the mechanics of spot commodity pricing, premium structures, and bid-ask spreads.",
    bullets: [
      "The Spot Price is the baseline wholesale quotation for 1 troy ounce of raw unworked gold on global exchanges (London LBMA / New York COMEX).",
      "The Premium accounts for refining, precision minting, tamper-evident assay packaging, insured freight, and dealer distribution.",
      "Investment-grade gold is classified as 999.9 fineness (24 Karat), representing 99.99% pure gold with negligible alloy content.",
    ],
  },
  {
    step: "02",
    title: "Silver Opportunities & Strategic Leverage",
    summary: "Leverage silver's unique dual nature as an indispensable industrial metal and monetary hedge.",
    bullets: [
      "Over 55% of global silver annual output is consumed by electronics, photovoltaic solar panels, electric vehicles, and medical devices.",
      "Silver typically exhibits higher volatility and percentage upside during bullion bull markets compared to gold.",
      "The Gold-to-Silver Ratio provides a valuable historical metric for rebalancing precious metals allocations.",
    ],
  },
  {
    step: "03",
    title: "Purity Standards & Refiner Certifications",
    summary: "Learn why assayer authentication and accredited refiner stamps protect your capital.",
    bullets: [
      "LBMA Good Delivery and UAE Good Delivery accreditations guarantee strict weight, chemical composition, and ethical sourcing.",
      "Individual serial numbers laser-etched onto bars match the tamper-proof CertiCard assay blister card.",
      "In Dubai, bullion transactions are subject to rigorous purity standards regulated by the Dubai Central Laboratory (DCL).",
    ],
  },
  {
    step: "04",
    title: "Bullion Bars vs. Sovereign Mint Coins",
    summary: "Determine whether minted bars or legal tender sovereign coins fit your holding timeframe.",
    bullets: [
      "Bullion Bars (100g, 1kg) carry the lowest manufacturing premiums per gram, making them the most cost-efficient choice for volume investors.",
      "Sovereign Coins (Falcon, Britannia, Maple Leaf) carry sovereign face value, intricate anti-counterfeit features, and high collector appeal.",
      "Both bars and coins benefit from identical 0% VAT treatment when meeting investment fineness thresholds.",
    ],
  },
  {
    step: "05",
    title: "Market Pricing, Timing & Liquidations",
    summary: "Execute buy and sell orders with institutional transparency in the Dubai bullion market.",
    bullets: [
      "Live prices adjust continuously during international commodity trading sessions (Sunday evening through Friday evening GMT).",
      "UAE Dirham pricing is pegged at 3.674 AED per 1 USD, removing exchange rate friction for local UAE investors.",
      "Always verify dealer commercial licensing with the Dubai DET and tax registration with the FTA before wiring funds.",
    ],
  },
];

export interface CompliancePoint {
  title: string;
  badge: string;
  details: string;
}

export const COMPLIANCE_FRAMEWORK_POINTS: CompliancePoint[] = [
  {
    title: "UAE Federal Decree-Law No. (20) of 2018",
    badge: "AML / CFT Law",
    details: "Full adherence to the UAE legal framework for combating money laundering, terrorism financing, and illegal organizations.",
  },
  {
    title: "Ministry of Economy goAML Reporting System",
    badge: "DPMS Registered",
    details: "Mandatory compliance and continuous reporting for Dealers in Precious Metals and Stones (DPMS) through the UAE Financial Intelligence Unit (FIU) goAML platform.",
  },
  {
    title: "Comprehensive KYC / KYB Onboarding",
    badge: "Due Diligence",
    details: "Rigorous verification of investor identity, Emirates ID/passport validation, corporate trade license verification, and Ultimate Beneficial Owner (UBO) screening.",
  },
  {
    title: "Federal Tax Authority (FTA) Registered",
    badge: "TRN: 105618125600003",
    details: "Official VAT compliance under UAE Federal Tax Authority rules with proper tax invoices and application of 0% VAT on investment gold & silver.",
  },
  {
    title: "Dubai DET Commercial License",
    badge: "License: 1656047",
    details: "Licensed by Dubai Department of Economy and Tourism (DET) under Commercial Register No. 2933247 to trade raw gold and precious metals.",
  },
  {
    title: "Annual External Statutory Auditing",
    badge: "Statutory Reserve",
    details: "Financial statements audited annually by licensed Dubai auditors, allocating statutory reserve provisions in accordance with UAE Commercial Companies Law.",
  },
];
