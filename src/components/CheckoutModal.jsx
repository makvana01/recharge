import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { 
  X, ShieldCheck, QrCode, Copy, Check, Lock, Smartphone, 
  ChevronRight, CheckCircle2, Sparkles, Loader2, ArrowRight
} from 'lucide-react';
import { VALID_COUPONS } from '../data/coupons';

export default function CheckoutModal({
  isOpen,
  onClose,
  mobile,
  operator,
  circle,
  plan,
  customAmount,
  onPaymentSuccess,
  showToast
}) {
  if (!isOpen) return null;

  const originalPrice = plan ? plan.price : parseInt(customAmount, 10) || 299;
  
  // States
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('upi-qr'); // 'upi-qr', 'phonepe', 'gpay', 'paytm', 'card', 'netbanking', 'wallet'
  const [qrDataUrl, setQrDataUrl] = useState('');
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [countdown, setCountdown] = useState(299); // 4m 59s
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState(1);

  const upiId = "paytmqr6udcnp@ptys";
  const payeeName = "Recharge";

  // Calculate discount
  let discount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.discountType === 'flat') {
      discount = appliedCoupon.discountValue;
    } else if (appliedCoupon.discountType === 'percent') {
      discount = Math.min(
        Math.round((originalPrice * appliedCoupon.discountValue) / 100),
        appliedCoupon.maxDiscount || 50
      );
    }
  }
  const payableAmount = Math.max(originalPrice - discount, 1);

  // Generate dynamic UPI URI and QR Code
  const upiUri = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${payableAmount}&cu=INR&tn=${encodeURIComponent(`Recharge ${mobile || 'Mobile'}`)}`;

  useEffect(() => {
    QRCode.toDataURL(upiUri, {
      width: 230,
      margin: 2,
      color: {
        dark: '#0f172a',
        light: '#ffffff'
      }
    })
      .then(url => setQrDataUrl(url))
      .catch(err => console.error("QR Code Error:", err));
  }, [upiUri]);

  // QR Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) return 299; // auto-refresh after 5 minutes
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `0${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const getAppUri = (app) => {
    const note = `Recharge ${mobile || 'Mobile'}`;
    const params = `pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${payableAmount}&cu=INR&tn=${encodeURIComponent(note)}`;
    if (app === 'phonepe') return `phonepe://pay?${params}`;
    if (app === 'paytm') return `paytmmp://pay?${params}`;
    if (app === 'gpay') return `gpay://upi/pay?${params}`;
    return `upi://pay?${params}`; // Default for all UPI apps & QR Code
  };

  // When user selects a UPI app or Scan QR
  const handlePayment = async (app) => {
    setSelectedMethod(app);
    const upiUrl = getAppUri(app);

    // Generate Dynamic QR Code for the specific UPI URL
    try {
      const qrData = await QRCode.toDataURL(upiUrl, {
        width: 220,
        margin: 1,
        color: {
          dark: '#0f172a',
          light: '#ffffff'
        }
      });
      setQrDataUrl(qrData);
    } catch (err) {
      console.error('QR Code error:', err);
    }

    // If on mobile device, directly launch the native UPI app!
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      window.location.href = upiUrl;
    }
  };

  // Coupon handling
  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setCouponError('');
    const code = couponCode.trim().toUpperCase();
    if (!code) return;

    const coupon = VALID_COUPONS[code];
    if (!coupon) {
      setCouponError('Invalid coupon code. Try SUPER50 or SAVE25');
      return;
    }

    if (originalPrice < coupon.minAmount) {
      setCouponError(`Minimum recharge of ₹${coupon.minAmount} required for this code.`);
      return;
    }

    setAppliedCoupon(coupon);
    showToast(`Coupon ${coupon.code} applied! ${coupon.description}`, 'success');
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
    setCouponError('');
    showToast('Coupon removed', 'info');
  };

  const handleCopyUpi = () => {
    navigator.clipboard?.writeText(upiId);
    setCopiedUpi(true);
    showToast(`UPI ID ${upiId} copied to clipboard!`, 'success');
    setTimeout(() => setCopiedUpi(false), 2500);
  };

  // Process payment simulation
  const handlePayNow = () => {
    setIsProcessing(true);
    setProcessingStep(1);

    // Step 1: Connecting to operator
    setTimeout(() => {
      setProcessingStep(2); // Authorizing payment with bank
      setTimeout(() => {
        setProcessingStep(3); // Pushing pack to telecom operator
        setTimeout(() => {
          setIsProcessing(false);
          // Complete recharge record
          const rechargeItem = {
            id: `RW-${Date.now().toString().slice(-6)}`,
            mobile,
            operator,
            circle,
            planPrice: originalPrice,
            paidAmount: payableAmount,
            discount,
            couponCode: appliedCoupon ? appliedCoupon.code : null,
            validity: plan?.validity || '28 Days',
            data: plan?.data || 'Standard Data',
            date: new Date().toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            }),
            status: 'SUCCESS',
            paymentMethod: selectedMethod.toUpperCase()
          };
          onPaymentSuccess(rechargeItem);
        }, 1200);
      }, 1200);
    }, 1000);
  };

  return (
    <div className="modal-backdrop animate-fade-in" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-dialog checkout-dialog">
        <div className="mobile-sheet-handle"></div>
        
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Processing State View */}
        {isProcessing ? (
          <div className="checkout-processing-state">
            <div className="processing-loader-wrapper">
              <Loader2 size={48} className="animate-spin text-primary" />
            </div>
            <h3 className="processing-title">Processing Your Recharge</h3>
            <p className="processing-subtitle">Please do not close this window or press back</p>

            <div className="processing-steps-timeline">
              <div className={`step-item ${processingStep >= 1 ? 'active' : ''}`}>
                <div className="step-dot">{processingStep > 1 ? '✓' : '1'}</div>
                <span>Securing 256-bit gateway connection...</span>
              </div>
              <div className={`step-item ${processingStep >= 2 ? 'active' : ''}`}>
                <div className="step-dot">{processingStep > 2 ? '✓' : '2'}</div>
                <span>Authorizing payment via {selectedMethod.toUpperCase()}...</span>
              </div>
              <div className={`step-item ${processingStep >= 3 ? 'active' : ''}`}>
                <div className="step-dot">3</div>
                <span>Pushing instant recharge pack to {operator}...</span>
              </div>
            </div>
          </div>
        ) : (
          /* Normal Payment Flow */
          <>
            <div className="modal-header">
              <div className="modal-icon-badge">
                <ShieldCheck size={24} />
              </div>
              <div className="modal-header-text">
                <h3>Confirm Mobile Recharge</h3>
                <p className="modal-subtitle">Review pack details and choose your payment method</p>
              </div>
            </div>

            <div className="checkout-content-grid">
              
              {/* Left Column: Order Summary & Coupons */}
              <div className="checkout-summary-col">
                
                {/* Pack Overview Card */}
                <div className="pack-summary-card">
                  <div className="summary-target-mobile">
                    <span className="sub-number">+91 {mobile || '98765 43210'}</span>
                    <span className="sub-meta">{operator} · {circle} Prepaid</span>
                  </div>

                  <div className="summary-plan-details">
                    <div className="summary-price-row">
                      <span className="summary-label">Plan Value</span>
                      <span className="original-price">₹{originalPrice}</span>
                    </div>
                    {plan && (
                      <>
                        <div className="summary-spec-row">
                          <span>Validity:</span>
                          <strong>{plan.validity}</strong>
                        </div>
                        <div className="summary-spec-row">
                          <span>Data Allowance:</span>
                          <strong>{plan.data}</strong>
                        </div>
                        <div className="summary-spec-row">
                          <span>Voice:</span>
                          <strong>{plan.voice}</strong>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Coupon Discount Section */}
                  <div className="coupon-box-wrapper">
                    {appliedCoupon ? (
                      <div className="coupon-applied-badge">
                        <div className="coupon-applied-left">
                          <Sparkles size={16} className="text-amber" />
                          <div>
                            <strong>{appliedCoupon.code} Applied</strong>
                            <small>-₹{discount} instant savings</small>
                          </div>
                        </div>
                        <button 
                          className="remove-coupon-btn" 
                          onClick={handleRemoveCoupon}
                          aria-label="Remove coupon"
                        >
                          <X size={15} />
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleApplyCoupon} className="coupon-form">
                        <input
                          type="text"
                          placeholder="Have a coupon? e.g. SUPER50"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                          className="coupon-input"
                        />
                        <button type="submit" className="coupon-apply-btn">Apply</button>
                      </form>
                    )}

                    {couponError && <p className="coupon-error-text">{couponError}</p>}
                    
                    {!appliedCoupon && (
                      <div className="suggested-coupon-tag">
                        <span>💡 Tip: Try code <strong>SUPER50</strong> for up to ₹50 off</span>
                      </div>
                    )}
                  </div>

                  {/* Price Breakdown */}
                  <div className="price-breakdown">
                    <div className="breakdown-row">
                      <span>Base Plan Price</span>
                      <span>₹{originalPrice}</span>
                    </div>
                    {discount > 0 && (
                      <div className="breakdown-row discount">
                        <span>Coupon Savings</span>
                        <span>-₹{discount}</span>
                      </div>
                    )}
                    <div className="breakdown-row">
                      <span>Platform Fee</span>
                      <span className="free-tag">₹0 FREE</span>
                    </div>
                    <div className="breakdown-row total-payable">
                      <strong>Total Amount Payable</strong>
                      <strong className="final-price">₹{payableAmount}</strong>
                    </div>
                  </div>
                </div>

                <div className="security-guarantee-note">
                  <Lock size={14} />
                  <span>100% Secure Payment Powered by RBI Guidelines</span>
                </div>
              </div>

              {/* Right Column: Payment Methods & UPI QR Engine */}
              <div className="checkout-methods-col">
                <div className="payment-options-header">
                  <span>Select Payment Option</span>
                </div>

                <div className="payment-methods-selector">
                  
                  {/* Direct UPI App Intent Buttons */}
                  <div className="upi-app-buttons-group">
                    <button
                      type="button"
                      className={`upi-direct-btn btn-phonepe ${selectedMethod === 'phonepe' ? 'active' : ''}`}
                      onClick={() => handlePayment('phonepe')}
                    >
                      <div className="btn-app-icon phonepe">P</div>
                      <div className="btn-app-text">
                        <strong>Pay with PhonePe</strong>
                        <small>Direct Instant Launch</small>
                      </div>
                      <span className="btn-app-badge">Instant ⚡</span>
                    </button>

                    <button
                      type="button"
                      className={`upi-direct-btn btn-gpay ${selectedMethod === 'gpay' ? 'active' : ''}`}
                      onClick={() => handlePayment('gpay')}
                    >
                      <div className="btn-app-icon gpay">G</div>
                      <div className="btn-app-text">
                        <strong>Pay with Google Pay</strong>
                        <small>Direct Instant Launch</small>
                      </div>
                      <span className="btn-app-badge">Instant ⚡</span>
                    </button>

                    <button
                      type="button"
                      className={`upi-direct-btn btn-paytm ${selectedMethod === 'paytm' ? 'active' : ''}`}
                      onClick={() => handlePayment('paytm')}
                    >
                      <div className="btn-app-icon paytm">₹</div>
                      <div className="btn-app-text">
                        <strong>Pay with Paytm</strong>
                        <small>Direct Instant Launch</small>
                      </div>
                      <span className="btn-app-badge">Instant ⚡</span>
                    </button>

                    <button
                      type="button"
                      className={`upi-direct-btn btn-qr ${selectedMethod === 'all' || selectedMethod === 'upi-qr' ? 'active' : ''}`}
                      onClick={() => handlePayment('all')}
                    >
                      <div className="btn-app-icon qr"><QrCode size={18} /></div>
                      <div className="btn-app-text">
                        <strong>Scan UPI QR Code</strong>
                        <small>Any Scanner (BHIM, Cred, Bank App)</small>
                      </div>
                      <span className="btn-app-badge">Scan 📷</span>
                    </button>
                  </div>

                  {/* Dynamic QR Code & Payee Display Area */}
                  <div className="qr-container-box animate-fade-in">
                    <div className="qr-box-inner">
                      {qrDataUrl ? (
                        <img src={qrDataUrl} alt="UPI Payment QR Code" className="qr-image" />
                      ) : (
                        <div className="qr-placeholder-loading">
                          <Loader2 size={30} className="animate-spin" />
                        </div>
                      )}
                      <div className="qr-timer-badge">
                        <span>⏱️ QR expires in: <strong>{formatTime(countdown)}</strong></span>
                      </div>
                    </div>

                    {/* Payee Details Card */}
                    <div className="upi-payee-info-card">
                      <div className="payee-row">
                        <span className="payee-label">Paying To:</span>
                        <strong className="payee-name">
                          {payeeName} <span className="verified-check">✓ Verified</span>
                        </strong>
                      </div>
                      <div className="payee-row">
                        <span className="payee-label">UPI ID:</span>
                        <span className="payee-id">{upiId}</span>
                      </div>
                      <div className="payee-row">
                        <span className="payee-label">Payable Amount:</span>
                        <strong className="final-price-sm">₹{payableAmount}</strong>
                      </div>
                    </div>

                    <div className="upi-copy-row">
                      <button 
                        type="button" 
                        onClick={handleCopyUpi} 
                        className="copy-upi-btn"
                      >
                        {copiedUpi ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
                        <span>{copiedUpi ? 'Copied UPI ID' : 'Copy UPI ID'}</span>
                      </button>
                      <a 
                        href={getAppUri(selectedMethod === 'upi-qr' ? 'all' : selectedMethod)} 
                        className="open-upi-app-link"
                        title="Open payment directly in your installed UPI app"
                      >
                        <Smartphone size={14} /> Open in UPI App
                      </a>
                    </div>
                  </div>

                </div>

                {/* Final Pay Action CTA */}
                <div className="checkout-action-footer">
                  <button
                    type="button"
                    className="btn btn-confirm-paid btn-block pay-confirm-btn"
                    onClick={handlePayNow}
                  >
                    <CheckCircle2 size={18} />
                    <span>I Have Paid (ઓર્ડર કન્ફર્મ કરો) · ₹{payableAmount}</span>
                  </button>
                  <p className="instant-notice">
                    ⚡ Instant pack recharge will be activated within 5 seconds of payment confirmation.
                  </p>
                </div>

              </div>

            </div>
          </>
        )}

      </div>
    </div>
  );
}
