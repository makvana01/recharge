import React, { useState } from 'react';
import { Sparkles, ShieldCheck, History, Menu, X, Zap, Copy, Check } from 'lucide-react';

export default function Navbar({ historyCount, onCopyPromo, onQuickRechargeClick, onExplorePlansClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedPromo, setCopiedPromo] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText("SUPER50");
    setCopiedPromo(true);
    if (onCopyPromo) onCopyPromo("Code SUPER50 copied! Apply at checkout for up to ₹50 off.");
    setTimeout(() => setCopiedPromo(false), 2000);
  };

  const closeDrawer = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Top Deal Announcement Bar */}
      <aside className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <span className="pulse-dot"></span>
            <p>
              <strong>🎉 FESTIVE DEAL:</strong> Up to <strong>₹50 Instant Cashback</strong> on prepaid recharges!
            </p>
            <button 
              className="code-pill" 
              onClick={handleCopy} 
              title="Click to copy coupon code"
            >
              {copiedPromo ? <Check size={13} /> : <Copy size={13} />}
              <span>SUPER50</span>
            </button>
          </div>
          <div className="top-bar-right">
            <span className="security-tag">
              <ShieldCheck size={14} className="icon-shield" /> 100% Safe & Zero Platform Fee
            </span>
            <a href="#history-section" className="top-history-link">
              <History size={14} /> Recent Recharges ({historyCount})
            </a>
          </div>
        </div>
      </aside>

      {/* Main Navigation Header */}
      <header className="main-header" id="header">
        <div className="container nav-container">
          <a className="brand-logo" href="#">
            <div className="logo-symbol">
              <span>₹</span>
            </div>
            <div className="logo-text">
              <span className="logo-title">RechargeWise</span>
              <span className="logo-sub">Smart Recharges · Guaranteed Savings</span>
            </div>
          </a>

          <nav className="desktop-nav">
            <a href="#recharge-hero" className="nav-item active">Recharge Now</a>
            <a href="#plans-explorer" className="nav-item">Browse Plans</a>
            <a href="#operators-section" className="nav-item">Operators</a>
            <a href="#deals-section" className="nav-item">Offers & Coupons</a>
            <a href="#guides-section" className="nav-item">Guides</a>
            <a href="#history-section" className="nav-item">History</a>
            <a href="#faq-section" className="nav-item">FAQs</a>
          </nav>

          <div className="header-actions">
            <button 
              className="btn btn-outline nav-cta-btn" 
              onClick={onExplorePlansClick}
            >
              Explore Plans
            </button>
            <button 
              className="btn btn-primary nav-recharge-btn" 
              onClick={onQuickRechargeClick}
            >
              <Zap size={16} /> Quick Recharge
            </button>
            <button 
              className="mobile-toggle" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="drawer-header">
            <span className="drawer-title">Navigation Menu</span>
            <button className="drawer-close" onClick={closeDrawer} aria-label="Close drawer">
              <X size={22} />
            </button>
          </div>
          <nav className="drawer-links">
            <a href="#recharge-hero" className="drawer-link" onClick={closeDrawer}>
              <Zap size={18} /> Quick Mobile Recharge
            </a>
            <a href="#plans-explorer" className="drawer-link" onClick={closeDrawer}>
              🔍 Browse All Plans
            </a>
            <a href="#operators-section" className="drawer-link" onClick={closeDrawer}>
              📶 Operators (Jio, Airtel, Vi, BSNL)
            </a>
            <a href="#deals-section" className="drawer-link" onClick={closeDrawer}>
              🎁 Deals & Cashback Coupons
            </a>
            <a href="#guides-section" className="drawer-link" onClick={closeDrawer}>
              📚 Recharge Guides & Comparisons
            </a>
            <a href="#history-section" className="drawer-link" onClick={closeDrawer}>
              <History size={18} /> My Recharge History ({historyCount})
            </a>
            <a href="#faq-section" className="drawer-link" onClick={closeDrawer}>
              ❓ Help & FAQs
            </a>
          </nav>
          <div className="drawer-footer">
            <p>🔒 Zero Convenience Fee · Instant Operator Push</p>
          </div>
        </div>
      </header>
    </>
  );
}
