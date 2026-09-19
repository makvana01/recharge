import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FAQS = [
  {
    q: "How fast is my mobile recharge activated after payment?",
    a: "RechargeWise connects directly via automated telecom operator APIs (Jio, Airtel, Vi, and BSNL). Your recharge is pushed instantly and is typically activated on your mobile SIM within 2 to 5 seconds. You will receive an immediate SMS confirmation from your operator."
  },
  {
    q: "Does RechargeWise charge any platform fee or convenience fee?",
    a: "No, absolutely zero! Unlike other payment apps that charge ₹2 to ₹3 convenience fees on every recharge, RechargeWise has 100% zero platform fees. You pay only the exact price of the plan, minus any active coupon discounts."
  },
  {
    q: "How does the UPI QR Code scan & pay work?",
    a: "When you select the QR Code option at checkout, our system generates a unique dynamic UPI QR code with your payable amount embedded. Simply open any UPI app on your phone (Google Pay, PhonePe, Paytm, BHIM, Cred) and scan the QR code to complete the payment seamlessly."
  },
  {
    q: "How do I claim promo codes and cashback coupons?",
    a: "At checkout, enter valid codes such as SUPER50, SAVE25, or YEAR100 in the coupon input field and click Apply. The discount will be immediately subtracted from the total payable amount before payment."
  },
  {
    q: "What happens if money is deducted from my bank but the pack is not credited?",
    a: "All transactions are protected by automated banking reconciliation. If an operator API fails to confirm the pack within 15 minutes, our automated refund system instantly initiates a full reversal to your source bank account or UPI handle."
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="section" id="faq-section">
      <div className="wrap" style={{ maxWidth: '800px' }}>
        
        <div className="center">
          <label>FREQUENTLY ASKED</label>
          <h2>Frequently Asked Questions</h2>
          <p>
            Everything you need to know about instant mobile recharge, operator activation, and zero platform fees.
          </p>
        </div>

        <div className="faq-accordion-list">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFaq(idx)}
                >
                  <span className="faq-q-text">{faq.q}</span>
                  <span className="faq-icon">
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-answer-body animate-fade-in">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
