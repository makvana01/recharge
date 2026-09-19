import React from 'react';
import { ShieldCheck, Heart, Headphones } from 'lucide-react';

export default function Footer({ onOpenSupport }) {
  return (
    <footer className="site-footer">
      <div className="container">
        
        <div className="footer-top-grid">
          
          {/* Col 1: Brand Info */}
          <div className="footer-brand-col">
            <div className="brand-logo light">
              <div className="logo-symbol">
                <span>₹</span>
              </div>
              <div className="logo-text">
                <span className="logo-title text-white">RechargeWise</span>
                <span className="logo-sub">Smart Recharges · Guaranteed Savings</span>
              </div>
            </div>
            <p className="footer-about-text">
              India's premier modern telecom recharge portal. Compare verified 4G/5G plans, discover OTT bundles, and complete instantaneous zero-convenience-fee recharges via dynamic UPI QR code technology.
            </p>
            <div className="footer-badge-pill">
              <ShieldCheck size={14} className="text-emerald" />
              <span>PCI-DSS Compliant &amp; 100% Secure</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Explore Plans</h4>
            <ul className="footer-nav">
              <li><a href="#plans-explorer">Jio True 5G Plans</a></li>
              <li><a href="#plans-explorer">Airtel 5G Plus Packs</a></li>
              <li><a href="#plans-explorer">Vi Hero Unlimited</a></li>
              <li><a href="#plans-explorer">BSNL Validity Savers</a></li>
              <li><a href="#plans-explorer">Disney+ Hotstar Bundles</a></li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Guides &amp; Deals</h4>
            <ul className="footer-nav">
              <li><a href="#guides-section">Jio ₹299 vs ₹349 Guide</a></li>
              <li><a href="#guides-section">Cashback &amp; Coupons</a></li>
              <li><a href="#guides-section">Vi Night Binge Perks</a></li>
              <li><a href="#deals-section">Festive Coupon Offers</a></li>
              <li><a href="#faq-section">Recharge FAQs</a></li>
            </ul>
          </div>

          {/* Col 4: Support & Legal */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Support &amp; Trust</h4>
            <ul className="footer-nav">
              <li>
                <button 
                  type="button" 
                  className="footer-link-btn" 
                  onClick={onOpenSupport}
                >
                  <Headphones size={13} /> 24x7 Customer Help
                </button>
              </li>
              <li><a href="#history-section">Transaction History</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#disclaimer">Tariff Disclaimer</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-disclaimer-box">
          <p>
            <strong>Disclaimer:</strong> Operator plans, pricing, benefits, and OTT access are subject to change according to respective telecom service provider policies (Reliance Jio Infocomm Ltd, Bharti Airtel Ltd, Vodafone Idea Ltd, Bharat Sanchar Nigam Ltd). RechargeWise is an independent recharge engine providing automated API fulfillment and real-time coupon discounts with zero platform fees.
          </p>
        </div>

        <div className="footer-bottom-row">
          <p>© {new Date().getFullYear()} RechargeWise Portal. All rights reserved.</p>
          <div className="footer-made-with">
            <span>Made with precision for mobile users in India 🇮🇳</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
