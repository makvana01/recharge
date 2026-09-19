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
    <section className="hero-section" id="recharge-hero">
      <div className="container hero-layout">
        
        {/* Left Column: Heading & Value Proposition */}
        <div className="hero-text-content">
          <div className="badge-pill">
            <Sparkles size={15} className="text-amber" />
            <span>INDIA'S SMARTEST RECHARGE ENGINE</span>
          </div>

          <h1 className="hero-headline">
            Recharge less.<br />
            <span className="highlight-gradient">Save on every pack.</span>
          </h1>

          <p className="hero-description">
            Find and recharge top mobile plans for <strong>Jio, Airtel, Vi & BSNL</strong> at guaranteed lowest net prices. Compare daily data, unlimited 5G packs, OTT bundles, and claim instant cashback without platform fees.
          </p>

          <div className="hero-highlights">
            <div className="highlight-item">
              <CheckCircle size={18} className="highlight-icon" />
              <span>Zero Convenience / Platform Fees</span>
            </div>
            <div className="highlight-item">
              <CheckCircle size={18} className="highlight-icon" />
              <span>Instant Operator API Push (&lt; 2 seconds)</span>
            </div>
            <div className="highlight-item">
              <CheckCircle size={18} className="highlight-icon" />
              <span>Up to ₹50 Coupon Discount Applied Live</span>
            </div>
          </div>

          {/* Quick Operator Status Bar */}
          <div className="supported-networks-bar">
            <span className="network-label">Live Operator Gateways:</span>
            <div className="network-pills">
              {OPERATORS.map((op) => (
                <button
                  key={op.name}
                  onClick={() => setOperator(op.name)}
                  className={`network-chip ${operator === op.name ? 'active' : ''}`}
                  style={{
                    borderColor: operator === op.name ? op.color : 'transparent',
                    backgroundColor: operator === op.name ? op.lightBg : 'rgba(255,255,255,0.8)',
                    color: operator === op.name ? op.color : '#374151'
                  }}
                >
                  <span className="net-initial" style={{ backgroundColor: op.color }}>{op.initial}</span>
                  <strong>{op.name}</strong>
                  {operator === op.name && <span className="active-dot" style={{ backgroundColor: op.color }}></span>}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Mobile Recharge Card */}
        <div className="hero-card-wrapper">
          <div className="recharge-card">
            
            {/* Connection Type Tabs */}
            <div className="card-tab-header">
              <button 
                type="button" 
                className={`type-tab ${connType === 'prepaid' ? 'active' : ''}`}
                onClick={() => setConnType('prepaid')}
              >
                Prepaid Mobile
              </button>
              <button 
                type="button" 
                className={`type-tab ${connType === 'postpaid' ? 'active' : ''}`}
                onClick={() => setConnType('postpaid')}
              >
                Postpaid Bill
              </button>
            </div>

            <div className="card-form-body">
              
              {/* Mobile Number Input */}
              <div className="form-group">
                <label className="input-label" htmlFor="mobileInput">
                  Mobile Number
                  {mobile.length === 10 && (
                    <span className="valid-tag">
                      <CheckCircle size={12} /> Valid 10-digit
                    </span>
                  )}
                </label>
                <div className="input-wrapper mobile-wrapper">
                  <div className="country-code">
                    <span className="flag">🇮🇳</span>
                    <span>+91</span>
                  </div>
                  <input
                    type="tel"
                    id="mobileInput"
                    placeholder="Enter 10-digit mobile number"
                    value={mobile}
                    onChange={handleMobileChange}
                    maxLength={10}
                    className="form-input mobile-input"
                  />
                  {operator && (
                    <div className="auto-detected-badge" style={{ backgroundColor: currentOpInfo.lightBg, color: currentOpInfo.color }}>
                      <span className="badge-dot" style={{ backgroundColor: currentOpInfo.color }}></span>
                      {operator}
                    </div>
                  )}
                </div>
              </div>

              {/* Operator & Circle Dual Select */}
              <div className="form-row-2">
                <div className="form-group">
                  <label className="input-label" htmlFor="operatorSelect">Operator</label>
                  <select
                    id="operatorSelect"
                    value={operator}
                    onChange={(e) => setOperator(e.target.value)}
                    className="form-select"
                  >
                    {OPERATORS.map(op => (
                      <option key={op.name} value={op.name}>{op.name}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="input-label" htmlFor="circleSelect">Telecom Circle</label>
                  <select
                    id="circleSelect"
                    value={circle}
                    onChange={(e) => setCircle(e.target.value)}
                    className="form-select"
                  >
                    {CIRCLES.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Recharge Amount Input with Plan Browser Button */}
              <div className="form-group">
                <div className="amount-label-row">
                  <label className="input-label" htmlFor="amountInput">Recharge Amount (₹)</label>
                  <button 
                    type="button" 
                    className="browse-plans-link" 
                    onClick={onExplorePlans}
                  >
                    Browse All Plans <ChevronRight size={14} />
                  </button>
                </div>
                <div className="input-wrapper">
                  <span className="currency-prefix">₹</span>
                  <input
                    type="number"
                    id="amountInput"
                    placeholder="e.g. 299, 349, 719"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="form-input amount-input"
                  />
                </div>
              </div>

              {/* Quick Amount Suggestion Chips */}
              <div className="quick-amount-chips">
                {quickAmounts.map(amt => (
                  <button
                    key={amt}
                    type="button"
                    className={`amt-chip ${amount === amt.toString() ? 'selected' : ''}`}
                    onClick={() => handleQuickAmountClick(amt)}
                  >
                    ₹{amt}
                  </button>
                ))}
              </div>

              {/* Matching Plan Details Preview (if amount matches a plan) */}
              {matchingPlan && (
                <div className="plan-preview-box animate-fade-in">
                  <div className="preview-top">
                    <span className="preview-tag">{matchingPlan.tag || 'Popular'}</span>
                    <span className="preview-val">⏳ {matchingPlan.validity}</span>
                  </div>
                  <div className="preview-desc">
                    <strong>{matchingPlan.data}</strong> · {matchingPlan.voice} · {matchingPlan.sms}
                  </div>
                  {matchingPlan.ott && matchingPlan.ott.length > 0 && (
                    <div className="preview-ott">
                      🎬 {matchingPlan.ott.join(', ')}
                    </div>
                  )}
                </div>
              )}

              {/* Proceed to Recharge CTA */}
              <button
                type="button"
                className="btn btn-primary btn-block proceed-btn"
                onClick={onProceedRecharge}
              >
                <span>⚡ Proceed to Recharge</span>
                {amount ? <span className="btn-amount-badge">₹{amount}</span> : null}
              </button>

              <div className="card-trust-footer">
                <span>🔒 Powered by 256-bit Encrypted Telecom Gateway</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
