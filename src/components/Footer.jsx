import React from 'react';

export default function Footer({ onOpenSupport }) {
  return (
    <footer>
      <div className="wrap foot">
        <div>
          <a className="logo light" href="#">
            <b>₹</b>
            <span>
              <strong>RechargeWise</strong>
              <small>Recharge smarter</small>
            </span>
          </a>
          <p>Recharge guides, comparisons and money-saving ideas for Indian mobile users.</p>
        </div>

        <div>
          <h4>Explore</h4>
          <a href="#plans-explorer">Recharge Guides</a>
          <a href="#offers">Latest Offers</a>
          <a href="#operators">Operators</a>
        </div>

        <div>
          <h4>Company</h4>
          <a href="#about">About Us</a>
          <a 
            href="#support" 
            onClick={(e) => { 
              e.preventDefault(); 
              if (onOpenSupport) onOpenSupport(); 
            }}
          >
            Contact &amp; Support
          </a>
          <a href="#">Write for Us</a>
        </div>

        <div>
          <h4>Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Disclaimer</a>
        </div>
      </div>

      <div className="wrap bottom">
        © 2026 RechargeWise. All rights reserved. <span>Offers can change without notice.</span>
      </div>
    </footer>
  );
}
