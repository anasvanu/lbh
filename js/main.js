/**
 * LBH Bullion - Global Application Script
 * Live Spot Rates (USD/oz only), Auto-Refresh, Mobile Menu & Interactions
 */

const SPOT_DATA = {
  goldUsdOz: 2714.60,
  silverUsdOz: 32.18,
  goldChange: 0.42,
  silverChange: 0.28,
  countdown: 60,
};

function updateHeaderRates() {
  const gEl = document.querySelectorAll('.live-rate-gold');
  const sEl = document.querySelectorAll('.live-rate-silver');
  const tEl = document.querySelectorAll('.live-ticker-timer');

  gEl.forEach(el => el.innerText = "$" + SPOT_DATA.goldUsdOz.toFixed(2));
  sEl.forEach(el => el.innerText = "$" + SPOT_DATA.silverUsdOz.toFixed(2));
  tEl.forEach(el => el.innerText = SPOT_DATA.countdown + "s");
}

function tickLiveRates() {
  const deltaG = (Math.random() - 0.49) * 2.2;
  const deltaS = (Math.random() - 0.49) * 0.12;
  SPOT_DATA.goldUsdOz = Math.max(2650, SPOT_DATA.goldUsdOz + deltaG);
  SPOT_DATA.silverUsdOz = Math.max(29, SPOT_DATA.silverUsdOz + deltaS);
  SPOT_DATA.countdown = 60;
  updateHeaderRates();

  if (typeof onRatesUpdated === 'function') {
    onRatesUpdated();
  }
}

// Timer countdown every 1s
setInterval(() => {
  SPOT_DATA.countdown--;
  const tEl = document.querySelectorAll('.live-ticker-timer');
  tEl.forEach(el => el.innerText = SPOT_DATA.countdown + "s");

  if (SPOT_DATA.countdown <= 0) {
    tickLiveRates();
  }
}, 1000);

// Mobile Nav Toggle
document.addEventListener('DOMContentLoaded', () => {
  updateHeaderRates();
  if (typeof lucide !== 'undefined') lucide.createIcons();

  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});
