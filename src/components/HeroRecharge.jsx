import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, ChevronRight, CheckCircle, Flame, Shield, ArrowRight } from 'lucide-react';
import { OPERATORS, CIRCLES, PLANS_DATABASE } from '../data/plans';

export default function HeroRecharge({
  mobile,
  setMobile,
  operator,
  setOperator,
  circle,
  setCircle,
  amount,
  setAmount,
  onProceedRecharge,
  onExplorePlans,
  onSelectPlanAndCheckout
}) {
  const [connType, setConnType] = useState('prepaid');
  const [matchingPlan, setMatchingPlan] = useState(null);

  // Auto-detect operator based on mobile number prefix
  const handleMobileChange = (e) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 10);
    setMobile(val);

    if (val.length >= 4) {
      const prefix = val.substring(0, 2);
      // Heuristic operator detection for standard Indian mobile series
      if (['98', '99', '96', '97', '95', '94'].includes(prefix)) {
        if (prefix === '94') setOperator('BSNL');
        else if (['98', '99'].includes(prefix)) setOperator('Airtel');
        else if (['96', '97'].includes(prefix)) setOperator('Jio');
        else if (prefix === '95') setOperator('Vi');
      } else if (['70', '79', '63', '62'].includes(prefix)) {
        setOperator('Jio');
      } else if (['80', '88', '89'].includes(prefix)) {
        setOperator('Airtel');
      } else if (['90', '91', '92'].includes(prefix)) {
        setOperator('Vi');
      }
    }
  };

  // Find matching plan when amount changes
  useEffect(() => {
    const numAmt = parseInt(amount, 10);
    if (!isNaN(numAmt) && numAmt > 0) {
      const plans = PLANS_DATABASE[operator] || [];
      const match = plans.find(p => p.price === numAmt);
      setMatchingPlan(match || null);
    } else {
      setMatchingPlan(null);
    }
  }, [amount, operator]);

  const quickAmounts = [299, 349, 719, 859, 1029, 3599];

  const handleQuickAmountClick = (amt) => {
    setAmount(amt.toString());
  };

  const currentOpInfo = OPERATORS.find(o => o.name === operator) || OPERATORS[0];

  return (
    <section className="hero" id="recharge-hero">
      <div className="wrap hero-grid">
        
        {/* Left Column: Heading, Recharge Bar, Actions & Checks */}
        <div>
          <label>SMART RECHARGE DISCOVERY</label>
          <h1>Recharge less.<br /><em>Save more.</em></h1>
          <p>
            Find better ways to recharge Airtel, Jio, Vi and BSNL. We compare plans, offers, cashback and coupons so you know where you can save.
          </p>

          {/* Integrated Quick Recharge Card */}
          <div className="hero-recharge-input-card">
            <div className="input-card-row">
              <div className="input-card-field flex-2">
                <span className="field-label">Mobile Number</span>
                <div className="field-input-wrap">
                  <span className="prefix">+91</span>
                  <input
                    type="tel"
                    id="mobileInput"
                    placeholder="Enter 10-digit number"
                    value={mobile}
                    onChange={handleMobileChange}
                    maxLength={10}
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="input-card-field flex-1">
                <span className="field-label">Operator</span>
                <select 
                  value={operator} 
                  onChange={(e) => setOperator(e.target.value)}
                  className="field-select"
                >
                  <option value="Jio">Jio</option>
                  <option value="Airtel">Airtel</option>
                  <option value="Vi">Vi</option>
                  <option value="BSNL">BSNL</option>
                </select>
              </div>

              <div className="input-card-field flex-1">
                <span className="field-label">Amount</span>
                <div className="field-input-wrap">
                  <span className="prefix">₹</span>
                  <input
                    type="number"
                    placeholder="299"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>

              <div className="input-card-btn-wrap">
                <button 
                  type="button" 
                  className="btn primary hero-recharge-cta-btn"
                  onClick={onProceedRecharge}
                >
                  Recharge Now →
                </button>
              </div>
            </div>

            {/* Quick Amount Suggestion Pills */}
            <div className="quick-amount-pills">
              <span className="pills-title">Popular:</span>
              {quickAmounts.map(amt => (
                <button
                  key={amt}
                  type="button"
                  className={`pill-btn ${amount === amt.toString() ? 'active' : ''}`}
                  onClick={() => handleQuickAmountClick(amt)}
                >
                  ₹{amt}
                </button>
              ))}
            </div>
          </div>

          <div className="actions">
            <a className="btn primary" href="#plans-explorer" onClick={onExplorePlans}>
              Explore Recharge Guides →
            </a>
            <a className="btn" href="#offers">
              Latest Offers
            </a>
          </div>

          <div className="checks">
            ✓ 100% Direct UPI &nbsp; ✓ Practical guides &nbsp; ✓ Updated deals
          </div>
        </div>

        {/* Right Column: Today's Idea Deal Card (100% match quer-gifts.com) */}
        <div className="deal">
          <div className="dealhead">
            <div>
              <small>TODAY'S IDEA</small>
              <h2>Before you recharge...</h2>
            </div>
            <i>✦</i>
          </div>

          <div className="dealinner">
            <div className="plan">
              <b className={operator.toLowerCase() === 'airtel' ? 'air' : operator.toLowerCase() === 'vi' ? 'vi' : operator.toLowerCase() === 'bsnl' ? 'bsnl' : 'jio'}>
                {operator.charAt(0)}
              </b>
              <span>
                <strong>Popular ₹{amount || '299'} plan</strong>
                <small>{operator} Prepaid · Check available offers</small>
              </span>
            </div>

            <div className="prices">
              <div>
                Plan price
                <strong>₹{amount || '299'}</strong>
              </div>
              <div>
                Possible savings
                <strong className="green">₹10+</strong>
              </div>
            </div>

            <div className="bar">
              <span></span>
            </div>

            <p>💡 A coupon or cashback offer may reduce your effective cost.</p>
            
            <button 
              type="button" 
              className="dealbtn"
              onClick={onProceedRecharge}
            >
              Recharge ₹{amount || '299'} Now →
            </button>
          </div>

          <footer>
            <span>📱 Airtel</span>
            <span>Jio</span>
            <span>Vi</span>
            <span>BSNL</span>
          </footer>
        </div>

      </div>
    </section>
  );
}
