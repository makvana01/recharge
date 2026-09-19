import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroRecharge from './components/HeroRecharge';
import PlanExplorer from './components/PlanExplorer';
import OperatorsSection from './components/OperatorsSection';
import DealsSection from './components/DealsSection';
import HistorySection from './components/HistorySection';
import GuidesSection from './components/GuidesSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import CheckoutModal from './components/CheckoutModal';
import SuccessModal from './components/SuccessModal';
import SupportModal from './components/SupportModal';
import Toast from './components/Toast';
import { PLANS_DATABASE } from './data/plans';

export default function App() {
  // Application State
  const [mobile, setMobile] = useState('');
  const [operator, setOperator] = useState('Jio');
  const [circle, setCircle] = useState('Gujarat');
  const [amount, setAmount] = useState('299');
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Modals & UI State
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [latestRecord, setLatestRecord] = useState(null);
  const [toast, setToast] = useState(null);

  // History State with localStorage persistence
  const [history, setHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('rechargewise_history');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Failed to load history', e);
      return [];
    }
  });

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(prev => (prev?.message === message ? null : prev));
    }, 3500);
  };

  // Scroll to explorer
  const handleScrollToExplorer = () => {
    const el = document.getElementById('plans-explorer');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to recharge hero
  const handleScrollToHero = () => {
    const el = document.getElementById('recharge-hero');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    const input = document.getElementById('mobileInput');
    if (input) input.focus();
  };

  // Proceed to recharge from Hero card
  const handleProceedRecharge = () => {
    if (!mobile || mobile.length !== 10) {
      showToast('Please enter a valid 10-digit mobile number', 'error');
      const input = document.getElementById('mobileInput');
      if (input) input.focus();
      return;
    }

    const numAmt = parseInt(amount, 10);
    if (isNaN(numAmt) || numAmt <= 0) {
      showToast('Please enter a valid recharge amount', 'error');
      return;
    }

    // Match plan from database if available
    const plans = PLANS_DATABASE[operator] || [];
    const match = plans.find(p => p.price === numAmt);
    setSelectedPlan(match || null);

    setIsCheckoutOpen(true);
  };

  // Directly select plan from Explorer
  const handleSelectPlan = (plan) => {
    setOperator(plan.operator);
    setAmount(plan.price.toString());
    setSelectedPlan(plan);

    if (!mobile || mobile.length !== 10) {
      showToast('Please enter mobile number to proceed with recharge', 'info');
      handleScrollToHero();
      return;
    }

    setIsCheckoutOpen(true);
  };

  // Handle successful payment
  const handlePaymentSuccess = (record) => {
    setLatestRecord(record);
    const updated = [record, ...history];
    setHistory(updated);
    try {
      localStorage.setItem('rechargewise_history', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save history', e);
    }
    setIsCheckoutOpen(false);
    setIsSuccessOpen(true);
    showToast(`Recharge of ₹${record.paidAmount} for ${record.mobile} successful!`, 'success');
  };

  // Repeat previous recharge
  const handleRepeatRecharge = (item) => {
    setMobile(item.mobile);
    setOperator(item.operator);
    setCircle(item.circle);
    setAmount(item.planPrice.toString());

    const plans = PLANS_DATABASE[item.operator] || [];
    const match = plans.find(p => p.price === item.planPrice);
    setSelectedPlan(match || null);

    showToast(`Loaded details for +91 ${item.mobile}. Review and confirm checkout!`, 'info');
    setIsCheckoutOpen(true);
  };

  // Clear history
  const handleClearHistory = () => {
    if (window.confirm('Are you sure you want to clear your local recharge history?')) {
      setHistory([]);
      try {
        localStorage.removeItem('rechargewise_history');
      } catch (e) {}
      showToast('Recharge history cleared', 'info');
    }
  };

  // Recharge another number
  const handleRechargeAnother = () => {
    setIsSuccessOpen(false);
    setMobile('');
    setAmount('299');
    setSelectedPlan(null);
    handleScrollToHero();
  };

  // Operator card click
  const handleOperatorSelect = (opName) => {
    setOperator(opName);
    handleScrollToExplorer();
  };

  // Copy promo code
  const handleCopyCode = (code) => {
    navigator.clipboard?.writeText(code);
    showToast(`Coupon code ${code} copied! Apply at checkout for discount.`, 'success');
  };

  return (
    <div className="app-container">
      {/* Toast Notification Container */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* Main Navbar & Top Announcement Bar */}
      <Navbar
        historyCount={history.length}
        onCopyPromo={(msg) => showToast(msg, 'success')}
        onQuickRechargeClick={handleScrollToHero}
        onExplorePlansClick={handleScrollToExplorer}
      />

      {/* Main Application Content */}
      <main>
        {/* Hero Section with Interactive Recharge Engine */}
        <HeroRecharge
          mobile={mobile}
          setMobile={setMobile}
          operator={operator}
          setOperator={setOperator}
          circle={circle}
          setCircle={setCircle}
          amount={amount}
          setAmount={setAmount}
          onProceedRecharge={handleProceedRecharge}
          onExplorePlans={handleScrollToExplorer}
        />

        {/* Plan Explorer with Category & Keyword Search */}
        <PlanExplorer
          activeOperator={operator}
          setActiveOperator={setOperator}
          onSelectPlan={handleSelectPlan}
        />

        {/* Supported Operators Showcase */}
        <OperatorsSection onSelectOperator={handleOperatorSelect} />

        {/* Deals & Coupons Showcase */}
        <DealsSection onCopyCode={handleCopyCode} />

        {/* Recharge History & Repeat Recharge */}
        <HistorySection
          history={history}
          onRepeatRecharge={handleRepeatRecharge}
          onClearHistory={handleClearHistory}
        />

        {/* Educational Telecom Guides */}
        <GuidesSection />

        {/* FAQs Accordion */}
        <FAQSection />
      </main>

      {/* Site Footer */}
      <Footer onOpenSupport={() => setIsSupportOpen(true)} />

      {/* Interactive Checkout Modal (UPI QR, Apps, Cards, Coupons) */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        mobile={mobile}
        operator={operator}
        circle={circle}
        plan={selectedPlan}
        customAmount={amount}
        onPaymentSuccess={handlePaymentSuccess}
        showToast={showToast}
      />

      {/* Success Modal (Receipt, Confetti, Print) */}
      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        record={latestRecord}
        onRechargeAnother={handleRechargeAnother}
      />

      {/* Customer Support Modal */}
      <SupportModal
        isOpen={isSupportOpen}
        onClose={() => setIsSupportOpen(false)}
        showToast={showToast}
      />
    </div>
  );
}
