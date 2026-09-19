import React from 'react';

export default function AboutSection({ onExploreClick }) {
  return (
    <>
      <section className="section about" id="about">
        <div className="wrap center">
          <label>WHY RECHARGEWISE?</label>
          <h2>We help you decide. You recharge wherever you prefer.</h2>
          <p>We are a content and deal-discovery website, not a recharge wallet or payment gateway.</p>

          <div className="why">
            <div>
              <b>01</b>
              <h3>Compare first</h3>
              <p>Understand plan prices and possible offers before paying.</p>
            </div>
            <div>
              <b>02</b>
              <h3>Read practical guides</h3>
              <p>Simple articles explain plans, validity, coupons and cashback.</p>
            </div>
            <div>
              <b>03</b>
              <h3>Choose for yourself</h3>
              <p>We point you toward useful options; the decision stays with you.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <div>
            <label>NEXT RECHARGE?</label>
            <h2>Check the deal before you pay.</h2>
            <p>A few seconds of comparison could help you avoid paying more than necessary.</p>
          </div>
          <a className="btn white" href="#plans-explorer" onClick={onExploreClick}>
            Explore Recharge Guides →
          </a>
        </div>
      </section>
    </>
  );
}
