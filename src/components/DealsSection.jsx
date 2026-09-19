import React from 'react';
import { Gift, Copy, Check, Sparkles, Tag, ArrowRight } from 'lucide-react';
import { VALID_COUPONS } from '../data/coupons';

export default function DealsSection({ onCopyCode }) {
  const couponsList = Object.values(VALID_COUPONS);

  return (
    <section className="section" id="deals-section">
      <div className="container">
        
        <div className="section-header center">
          <div className="section-badge">
            <Gift size={14} /> EXCLUSIVE SAVINGS
          </div>
          <h2 className="section-title">Verified Recharge Coupons &amp; Deals</h2>
          <p className="section-subtitle">
            Apply these guaranteed discount codes at checkout to instantly deduct your bill.
          </p>
        </div>

        <div className="coupons-cards-grid">
          {couponsList.map(c => (
            <div key={c.code} className="coupon-deal-card">
              <div className="coupon-deal-top">
                <span className="coupon-deal-type">
                  <Sparkles size={13} /> {c.discountType === 'flat' ? 'FLAT CASHBACK' : 'PERCENT OFF'}
                </span>
                <span className="min-order-tag">Min. ₹{c.minAmount}</span>
              </div>

              <div className="coupon-deal-code-row">
                <span className="coupon-code-text">{c.code}</span>
                <button
                  type="button"
                  className="coupon-copy-btn"
                  onClick={() => onCopyCode(c.code)}
                  title="Click to copy coupon code"
                >
                  <Copy size={14} />
                  <span>Copy</span>
                </button>
              </div>

              <p className="coupon-deal-desc">{c.description}</p>
              
              <div className="coupon-deal-footer">
                <span>✓ Applied instantly at checkout</span>
              </div>
            </div>
          ))}
        </div>

        {/* Big Savings Highlight Strip */}
        <div className="annual-savings-banner">
          <div className="banner-left">
            <span className="banner-badge">PRO TIP</span>
            <h3>Recharge quarterly or annually to save up to ₹850+</h3>
            <p>Monthly recharges of ₹349 cost ₹4,188/year. Single annual pack costs only ₹3,599 with equal 5G benefits.</p>
          </div>
          <a href="#plans-explorer" className="btn btn-white banner-btn">
            Explore 84d &amp; 365d Plans <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
