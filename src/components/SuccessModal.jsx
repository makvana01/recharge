import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, Printer, RotateCcw, Share2, Download, ShieldCheck } from 'lucide-react';

export default function SuccessModal({
  isOpen,
  onClose,
  record,
  onRechargeAnother
}) {
  if (!isOpen || !record) return null;

  // Fire celebratory confetti on success mount
  useEffect(() => {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti not available:', err);
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop animate-fade-in">
      <div className="modal-dialog success-dialog">
        
        {/* Success Header */}
        <div className="success-header">
          <div className="success-icon-badge">
            <CheckCircle2 size={44} className="text-emerald" />
          </div>
          <h2 className="success-title">Recharge Successful!</h2>
          <p className="success-subtitle">
            Your plan has been credited to <strong>+91 {record.mobile}</strong> and is active immediately.
          </p>
        </div>

        {/* Receipt Details Card */}
        <div className="receipt-card" id="printable-receipt">
          <div className="receipt-brand-row">
            <div className="receipt-logo">
              <span className="logo-symbol-sm">₹</span>
              <strong>RechargeWise Tax Invoice</strong>
            </div>
            <span className="receipt-status-badge">PAID</span>
          </div>

          <div className="receipt-grid">
            <div className="receipt-item">
              <span className="receipt-label">Transaction ID</span>
              <strong className="receipt-val">{record.id}</strong>
            </div>
            <div className="receipt-item">
              <span className="receipt-label">Date &amp; Time</span>
              <strong className="receipt-val">{record.date}</strong>
            </div>
            <div className="receipt-item">
              <span className="receipt-label">Mobile Number</span>
              <strong className="receipt-val">+91 {record.mobile}</strong>
            </div>
            <div className="receipt-item">
              <span className="receipt-label">Operator &amp; Circle</span>
              <strong className="receipt-val">{record.operator} · {record.circle}</strong>
            </div>
            <div className="receipt-item">
              <span className="receipt-label">Plan Validity</span>
              <strong className="receipt-val">{record.validity}</strong>
            </div>
            <div className="receipt-item">
              <span className="receipt-label">Data Allowance</span>
              <strong className="receipt-val">{record.data}</strong>
            </div>
          </div>

          <div className="receipt-divider"></div>

          <div className="receipt-total-row">
            <div>
              <span className="receipt-label">Payment Method: {record.paymentMethod}</span>
              {record.discount > 0 && (
                <div className="savings-highlight-text">
                  🎉 Total Saved with coupon: ₹{record.discount}
                </div>
              )}
            </div>
            <div className="receipt-amount-box">
              <span className="receipt-label">Total Amount Paid</span>
              <strong className="receipt-total-price">₹{record.paidAmount}</strong>
            </div>
          </div>
        </div>

        {/* Simulated SMS Alert Notification */}
        <div className="sms-alert-box">
          <span className="sms-icon">📩</span>
          <p>
            <strong>Operator SMS Sent:</strong> "Dear Customer, recharge of ₹{record.paidAmount} on {record.operator} {record.mobile} is successful. Ref: {record.id}. Benefits: {record.data}, {record.validity}."
          </p>
        </div>

        {/* Action Buttons */}
        <div className="success-actions-row">
          <button 
            type="button" 
            className="btn btn-outline print-receipt-btn" 
            onClick={handlePrint}
          >
            <Printer size={16} /> Print Receipt
          </button>
          <button 
            type="button" 
            className="btn btn-primary recharge-another-btn" 
            onClick={onRechargeAnother}
          >
            <RotateCcw size={16} /> Recharge Another Number
          </button>
        </div>

      </div>
    </div>
  );
}
