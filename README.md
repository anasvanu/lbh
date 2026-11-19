# LBH Bullion Gold Trading L.L.C (ال بي اتش بوليان جولدن للتجارة ذ.م.م)
### Official Corporate & Bullion Showcase Web Platform | Dubai DET Licensed Entity (License No. 1656047)

**Domain:** [https://lbhbullion.com](https://lbhbullion.com)  
**Tagline:** `PRECIOUS METALS | TRUST | INTEGRITY`  
**Registered Headquarters:** Office No. 403, Property of Asadollah Hosseinali Keykha Bakhshi, Al Dhagaya, Al Ras, Deira, Dubai, United Arab Emirates (Land Parcel ID: `113-428`)

---

## 1. Overview & Benchmark Reference

This platform is a high-trust corporate and precious metals bullion showcase built for **LBH Bullion Gold Trading L.L.C**, modeled after the structural and commercial standards of **torabullion.com**. It combines:

1. **Top Buyback & Live Rate Strip:** Real-time spot indicators (XAU/AED, XAG/AED), DET License 1656047 badge, and guaranteed buyback liquidity commitment.
2. **Sticky Luxury Navbar:** Monogram logo + wordmark, navigation links, mobile menu drawer, and "Enquire Now" action.
3. **Hero Showcase:** Integrated hero banner (`public/images/lbh-hero-banner.png`), headline, trust badges, live quotation ticker, and catalog CTAs.
4. **Guaranteed Buyback & DET Strip:** Fast T+0 counter settlement and compliance verification bar.
5. **Gold Bullion Spotlight (01–06 Benefits):** Numbered benefit architecture covering LBMA standards, transparent spreads, buyback, 0% VAT, assay cards, and Deira over-the-counter settlement.
6. **Silver Bullion Spotlight (01–06 Benefits):** Dual industrial & hedge characteristics, sovereign mint provenance, volume scaling, and institutional invoicing.
7. **Live Spot Price & Trend Analytics Panel:** Interactive XAU & XAG rates in AED/g and AED/oz, 1 USD = 3.674 AED fixed peg reference, interactive 24H/7D/30D/1Y Chart.js trend curves, 60-second auto-refresh, and live bullion value calculator.
8. **Filterable Bullion Product Catalog:** Filter tabs (All, Gold Bars, Gold Coins, Silver Bars, Silver Coins, Precious Stones & Jewellery) covering 1g, 2.5g, 5g, 10g, 20g, 31.1g (1oz), 50g, 100g, 1kg with live-linked AED pricing and pre-filled inquiry triggers.
9. **Why Invest (6-Card Grid):** Inflation protection, diversification, global liquidity, buyback, tangible ownership, and financial stability.
10. **Investor Guide (01–05 Steps):** Spot pricing, silver opportunities, purity standards, bars vs. coins, and market execution.
11. **DET Compliance & Registry Block:** High-trust verification card for DET License 1656047, Register 2933247, TRN 105618125600003, GDRFA Card 2/1/1344596, and goAML DPMS adherence.
12. **Contact & Trade Inquiry Form:** Validated onboarding form, registered Al Ras Deira location, telephone `+971 42626916`, and configurable email `lbhbullion@gmail.com`.

---

## 2. Strict Privacy & Compliance Guardrails

In strict compliance with instructions:
- **Zero personal identifiable information:** No individual partner names, no passport numbers, no personal roles, and no personal email addresses appear anywhere on the user-facing site or public code.
- **Zero shareholding disclosures:** No mention of share capital, cash share allocations, or ownership percentages.
- **Only official corporate data displayed:**
  - Legal Entity: LBH Bullion Gold Trading L.L.C / ال بي اتش بوليان جولدن للتجارة ذ.م.م
  - Licensing Authority: Dubai Department of Economy and Tourism (DET)
  - Commercial License No.: `1656047`
  - Commercial Register No.: `2933247`
  - Tax Registration Number (TRN): `105618125600003` (Federal Tax Authority VAT registered)
  - GDRFA Establishment Card: `2/1/1344596` (Ref: `10409819`)
  - Land Parcel ID: `113-428` (Al Dhagaya, Al Ras, Deira, Dubai)
  - Primary Contact Phone: `+971 42626916`
  - Configurable Corporate Email: `lbhbullion@gmail.com` (configured in `src/data/lbhData.ts`)

---

## 3. Visual System & Color Palette

- **Primary Background:** Deep Obsidian Matte Black (`#0B0C0E`)
- **Elevated Cards & Sections:** Charcoal Slate (`#14161A`)
- **Hairline Borders:** Champagne-Gold Hairline (`rgba(212, 175, 55, 0.22)`)
- **Accent Highlighting:** Brushed Champagne Gold (`#D4AF37` to `#F3E5AB`)
- **Text:** Crisp Alabaster White (`#F8FAFC`) and Muted Warm Gray (`#9CA3AF`)
- **Typography:**
  - Luxury Serif Headings: `Cinzel` & `Cormorant Garamond`
  - UI & Body: `Plus Jakarta Sans`
  - Monospace Identifiers & Rates: `JetBrains Mono`

---

## 4. Running the Platform

### Option A: Local PowerShell Server (Recommended for zero-install Windows)
Run in PowerShell:
```powershell
cd C:\Users\USER\.gemini\antigravity\scratch\lbh-bullion
powershell -ExecutionPolicy Bypass -File .\serve.ps1 -Port 3000
```
Open `http://localhost:3000` in any browser.

### Option B: Direct Browser Opening
Simply double-click or open `index.html` in Microsoft Edge, Google Chrome, or any standard web browser. All styles, fonts, and scripts are self-contained and CDN-enabled.

### Option C: Vite / TypeScript Development
```bash
npm install
npm run dev
```

---

## 5. File Structure

```
lbh-bullion/
├── index.html                  # Main production application with all 12 sections
├── package.json                # Project dependencies and build scripts
├── tsconfig.json               # TypeScript configuration
├── serve.ps1                   # Lightweight PowerShell local web server
├── README.md                   # Complete documentation & compliance overview
├── images/                     # Root image references
│   ├── lbh-logo.png            # Circular monogram logo asset
│   └── lbh-hero-banner.png     # Gold bullion hero banner graphic
├── public/
│   └── images/
│       ├── lbh-logo.png        # Monogram logo in public directory
│       └── lbh-hero-banner.png # Hero banner graphic in public directory
└── src/
    ├── data/
    │   └── lbhData.ts          # Corporate data, catalog & configurable email
    ├── utils/
    │   └── pricing.ts          # Spot calculation formulas & conversions
    ├── types.ts                # TypeScript interfaces
    └── main.ts                 # Main TypeScript entry point
```

&copy; 2026 LBH Bullion Gold Trading L.L.C (lbhbullion.com). All Rights Reserved.
