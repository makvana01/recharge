import React from 'react';

export default function DealsSection() {
  return (
    <section className="section soft" id="offers">
      <div className="wrap">
        <div className="sectiontop">
          <div>
            <label>LATEST DEAL IDEAS</label>
            <h2>What should you check before paying?</h2>
          </div>
          <a href="#guides">View all articles →</a>
        </div>

        <div className="cards">
          <article>
            <div className="pic p1">₹</div>
            <div>
              <label>JIO</label>
              <h3>How to find the best price for a Jio recharge plan</h3>
              <p>Compare plan price with current coupons, cashback and payment offers.</p>
              <a href="#plans-explorer">Read article →</a>
            </div>
          </article>

          <article>
            <div className="pic p2">%</div>
            <div>
              <label>AIRTEL</label>
              <h3>Airtel recharge offers worth checking before you pay</h3>
              <p>A quick guide to spotting useful discounts and avoiding misleading deals.</p>
              <a href="#plans-explorer">Read article →</a>
            </div>
          </article>

          <article>
            <div className="pic p3">⚡</div>
            <div>
              <label>ALL OPERATORS</label>
              <h3>5 simple ways to reduce your mobile recharge cost</h3>
              <p>Learn where discounts usually appear and what to compare.</p>
              <a href="#plans-explorer">Read article →</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
