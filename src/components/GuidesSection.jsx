import React, { useState } from 'react';

export default function GuidesSection() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSub = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="section" id="guides">
      <div className="wrap">
        <div className="sectiontop">
          <div>
            <label>RECHARGE KNOWLEDGE HUB</label>
            <h2>Latest guides &amp; articles</h2>
          </div>
          <a href="#guides">Browse all →</a>
        </div>

        <div className="guidegrid">
          <div className="guides">
            <article>
              <b>01</b>
              <div>
                <label>RECHARGE GUIDE</label>
                <h3>Jio ₹299 vs ₹349: which plan gives better value?</h3>
                <p>Compare validity, daily data and effective cost before choosing.</p>
                <small>5 min read · Updated today</small>
              </div>
              <span>→</span>
            </article>

            <article>
              <b>02</b>
              <div>
                <label>OFFERS</label>
                <h3>Where to look for recharge cashback and coupon offers</h3>
                <p>A practical checklist for checking offers before every recharge.</p>
                <small>4 min read · Updated recently</small>
              </div>
              <span>→</span>
            </article>

            <article>
              <b>03</b>
              <div>
                <label>AIRTEL</label>
                <h3>Best Airtel prepaid plans for different budgets</h3>
                <p>Shortlist plans by validity, data needs and monthly spend.</p>
                <small>6 min read · Updated recently</small>
              </div>
              <span>→</span>
            </article>

            <article>
              <b>04</b>
              <div>
                <label>VI</label>
                <h3>Vi recharge tips: what to check before selecting a plan</h3>
                <p>Understand validity, benefits and promotional pricing.</p>
                <small>5 min read · Updated recently</small>
              </div>
              <span>→</span>
            </article>
          </div>

          <aside>
            <span className="mail">✉</span>
            <label>DEAL UPDATES</label>
            <h3>Don't miss a better recharge deal.</h3>
            <p>Get occasional updates about useful offers, plan changes and saving tips.</p>
            <form onSubmit={handleSub}>
              <input
                type="email"
                placeholder="Your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn primary">Subscribe</button>
            </form>
            <small id="msg">
              {subscribed ? "You're on the list — watch your inbox for useful deal updates." : "No spam. Unsubscribe anytime."}
            </small>
          </aside>
        </div>
      </div>
    </section>
  );
}
