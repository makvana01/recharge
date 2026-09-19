import React, { useState } from 'react';
import { X, Headphones, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react';

export default function SupportModal({ isOpen, onClose, showToast }) {
  if (!isOpen) return null;

  const [ticketMobile, setTicketMobile] = useState('');
  const [ticketIssue, setTicketIssue] = useState('recharge_pending');
  const [ticketMessage, setTicketMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ticketMobile) {
      showToast('Please enter your mobile number', 'error');
      return;
    }
    setSubmitted(true);
    showToast('Support ticket #RW-' + Math.floor(100000 + Math.random() * 900000) + ' created!', 'success');
  };

  return (
    <div className="modal-backdrop animate-fade-in">
      <div className="modal-dialog support-dialog">
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-header">
          <div className="modal-icon-badge">
            <Headphones size={24} />
          </div>
          <div className="modal-header-text">
            <h3>24x7 Customer Help &amp; Support</h3>
            <p className="modal-subtitle">Have an issue with your recharge or payment? We are here to help.</p>
          </div>
        </div>

        {submitted ? (
          <div className="support-submitted-state">
            <CheckCircle size={48} className="text-emerald" />
            <h4>Ticket Logged Successfully</h4>
            <p>Our telecom priority support desk will verify your operator ref and contact you on +91 {ticketMobile} within 15 minutes.</p>
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={onClose}
            >
              Back to Home
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="support-form-body">
            
            <div className="form-group">
              <label className="input-label">Mobile Number Involved</label>
              <input 
                type="tel" 
                placeholder="10-digit mobile number" 
                value={ticketMobile}
                onChange={(e) => setTicketMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="input-label">Issue Category</label>
              <select 
                value={ticketIssue} 
                onChange={(e) => setTicketIssue(e.target.value)}
                className="form-select"
              >
                <option value="recharge_pending">Recharge Pending / Delayed</option>
                <option value="payment_deducted">Amount Deducted, Pack Not Active</option>
                <option value="wrong_pack">Wrong Pack Selected</option>
                <option value="coupon_issue">Coupon Discount Query</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>

            <div className="form-group">
              <label className="input-label">Brief Description</label>
              <textarea 
                rows={3} 
                placeholder="Provide transaction ID or details..."
                value={ticketMessage}
                onChange={(e) => setTicketMessage(e.target.value)}
                className="form-input"
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Submit Help Request
            </button>

            <div className="support-direct-channels">
              <div className="direct-channel-item">
                <Mail size={16} /> support@rechargewise.in
              </div>
              <div className="direct-channel-item">
                <Phone size={16} /> 1800-2026-WISE (Toll Free)
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
