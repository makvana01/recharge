import React from 'react';
import { History, Trash2, ArrowRight, Zap, CheckCircle, ShieldCheck } from 'lucide-react';
import { OPERATORS } from '../data/plans';

export default function HistorySection({
  history,
  onRepeatRecharge,
  onClearHistory
}) {
  const getOpColor = (opName) => {
    const found = OPERATORS.find(o => o.name === opName);
    return found ? found.color : '#0066FF';
  };

  const getOpInitial = (opName) => {
    return (opName && opName[0]) || 'R';
  };

  return (
    <section className="section soft" id="history-section">
      <div className="wrap">
        
        <div className="sectiontop">
          <div>
            <label>TRANSACTION PASSBOOK</label>
            <h2>My Recent Recharges</h2>
            <p style={{ margin: 0, fontSize: '12px', color: '#747d91' }}>
              Locally saved transaction logs. Easily repeat previous packs with one click.
            </p>
          </div>
          {history.length > 0 && (
            <button 
              type="button" 
              className="btn" 
              onClick={onClearHistory}
              style={{ padding: '8px 14px', fontSize: '11px' }}
            >
              <Trash2 size={13} style={{ marginRight: 5 }} /> Clear History
            </button>
          )}
        </div>

        {history.length > 0 ? (
          <div className="history-cards-list">
            {history.map((item, idx) => (
              <div key={item.id || idx} className="history-card-item animate-fade-in">
                
                {/* Operator Avatar */}
                <div 
                  className="hist-avatar"
                  style={{ backgroundColor: getOpColor(item.operator) }}
                >
                  {getOpInitial(item.operator)}
                </div>

                {/* Mobile & Circle Details */}
                <div className="hist-main-info">
                  <strong className="hist-mobile">+91 {item.mobile}</strong>
                  <span className="hist-meta">
                    {item.operator} · {item.circle} · {item.validity}
                  </span>
                  <small className="hist-trans-id">Txn ID: {item.id}</small>
                </div>

                {/* Amount Paid */}
                <div className="hist-price-info">
                  <strong className="hist-amount">₹{item.paidAmount}</strong>
                  <span className="hist-paid-tag">Paid</span>
                </div>

                {/* Date */}
                <div className="hist-date-col">
                  <span>{item.date}</span>
                </div>

                {/* Status Badge */}
                <div className="hist-status-col">
                  <span className="hist-status-chip">
                    <CheckCircle size={13} /> SUCCESS
                  </span>
                </div>

                {/* Repeat Recharge Action */}
                <div className="hist-action-col">
                  <button
                    type="button"
                    className="btn btn-outline btn-sm repeat-btn"
                    onClick={() => onRepeatRecharge(item)}
                    title="Repeat this recharge"
                  >
                    <Zap size={14} /> Repeat
                  </button>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="history-empty-card">
            <div className="empty-icon">📜</div>
            <h4>No past recharges found</h4>
            <p>Complete your first mobile recharge above to track status, repeat orders, and download invoices.</p>
            <a href="#recharge-hero" className="btn btn-primary btn-sm">
              ⚡ Make a Recharge Now
            </a>
          </div>
        )}

      </div>
    </section>
  );
}
