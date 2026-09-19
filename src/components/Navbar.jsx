import React, { useState } from 'react';
import { Zap, X } from 'lucide-react';

export default function Navbar({ onQuickRechargeClick, onExplorePlansClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header>
        <div className="wrap nav">
          <a className="logo" href="#">
            <b>₹</b>
            <span>
              <strong>RechargeWise</strong>
              <small>Recharge smarter</small>
            </span>
          </a>

          <nav>
            <a className="active" href="#">Home</a>
            <a href="#plans-explorer">Plans</a>
            <a href="#guides">Guides</a>
            <a href="#offers">Offers</a>
            <a href="#operators">Operators</a>
            <a href="#about">About</a>
          </nav>

          <a className="topbtn" href="#plans-explorer" onClick={onExplorePlansClick}>
            Explore Deals
          </a>

          <button 
            className="menu" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-nav-panel animate-fade-in">
          <div className="mobile-nav-links">
            <a href="#" onClick={closeMenu}>Home</a>
            <a href="#plans-explorer" onClick={closeMenu}>Plans &amp; Recharge</a>
            <a href="#guides" onClick={closeMenu}>Guides</a>
            <a href="#offers" onClick={closeMenu}>Offers</a>
            <a href="#operators" onClick={closeMenu}>Operators</a>
            <a href="#about" onClick={closeMenu}>About RechargeWise</a>
            <a href="#history-section" onClick={closeMenu}>Recent Recharges</a>
          </div>
          <div className="mobile-nav-cta">
            <button 
              className="btn primary" 
              style={{ width: '100%' }}
              onClick={() => { closeMenu(); if (onQuickRechargeClick) onQuickRechargeClick(); }}
            >
              <Zap size={14} style={{ marginRight: 6 }} /> Quick Recharge Now
            </button>
          </div>
        </div>
      )}
    </>
  );
}

