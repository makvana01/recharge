import React, { useState, useMemo } from 'react';
import { Search, X, Zap, Tv, Calendar, Wifi, PhoneCall, Check, Tag } from 'lucide-react';
import { PLANS_DATABASE, OPERATORS, CATEGORIES } from '../data/plans';

export default function PlanExplorer({
  activeOperator,
  setActiveOperator,
  onSelectPlan
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const plansForCurrentOp = useMemo(() => {
    return PLANS_DATABASE[activeOperator] || [];
  }, [activeOperator]);

  // Filter plans based on category and search query
  const filteredPlans = useMemo(() => {
    return plansForCurrentOp.filter(plan => {
      // Category match
      const categoryMatch = selectedCategory === 'all' || plan.categories?.includes(selectedCategory);
      if (!categoryMatch) return false;

      // Search match
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const priceMatch = plan.price.toString().includes(q);
      const validityMatch = plan.validity.toLowerCase().includes(q);
      const dataMatch = plan.data.toLowerCase().includes(q);
      const tagMatch = plan.tag ? plan.tag.toLowerCase().includes(q) : false;
      const ottMatch = plan.ott ? plan.ott.some(item => item.toLowerCase().includes(q)) : false;
      const perksMatch = plan.perks ? plan.perks.some(perk => perk.toLowerCase().includes(q)) : false;

      return priceMatch || validityMatch || dataMatch || tagMatch || ottMatch || perksMatch;
    });
  }, [plansForCurrentOp, selectedCategory, searchQuery]);

  const currentOpInfo = OPERATORS.find(o => o.name === activeOperator) || OPERATORS[0];

  return (
    <section className="section plans-explorer-section" id="plans-explorer">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header center">
          <div className="section-badge">
            <Zap size={14} /> TARIFF DIRECTORY
          </div>
          <h2 className="section-title">Explore Verified Prepaid Plans</h2>
          <p className="section-subtitle">
            Compare plans side-by-side with genuine OTT bundles, high-speed 5G quotas, and validity perks.
          </p>
        </div>

        {/* Operator Switcher Tabs */}
        <div className="operator-tabs-wrapper">
          <div className="operator-tabs">
            {OPERATORS.map(op => {
              const count = (PLANS_DATABASE[op.name] || []).length;
              const isActive = activeOperator === op.name;
              return (
                <button
                  key={op.name}
                  onClick={() => setActiveOperator(op.name)}
                  className={`op-tab-btn ${isActive ? 'active' : ''}`}
                  style={{
                    borderColor: isActive ? op.color : '#e2e8f0',
                    boxShadow: isActive ? `0 4px 14px ${op.color}33` : 'none'
                  }}
                >
                  <span 
                    className="op-tab-initial"
                    style={{ backgroundColor: op.color }}
                  >
                    {op.initial}
                  </span>
                  <span className="op-tab-name">{op.name}</span>
                  <span className="op-count-badge" style={{ backgroundColor: isActive ? op.color : '#f1f5f9', color: isActive ? '#fff' : '#64748b' }}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="explorer-toolbar">
          
          {/* Search Bar */}
          <div className="search-bar-wrapper">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder={`Search ${activeOperator} plans by price, 5G, validity, Hotstar, Netflix...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="plan-search-input"
            />
            {searchQuery && (
              <button 
                className="clear-search-btn" 
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="category-pills-list">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`cat-pill ${selectedCategory === cat.id ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Results Counter */}
        <div className="results-info-row">
          <span className="results-count">
            Showing <strong>{filteredPlans.length}</strong> active plans for <strong>{activeOperator}</strong>
          </span>
          {searchQuery && (
            <span className="search-tag-indicator">
              Matching: "<em>{searchQuery}</em>"
            </span>
          )}
        </div>

        {/* Plans Grid */}
        {filteredPlans.length > 0 ? (
          <div className="plans-grid">
            {filteredPlans.map(plan => {
              const savings = plan.mrp ? plan.mrp - plan.price : 0;
              return (
                <div key={plan.id} className="plan-card">
                  
                  {/* Top Header */}
                  <div className="plan-card-header">
                    <div className="plan-price-group">
                      <div className="price-main">
                        <span className="currency">₹</span>
                        <span className="amount">{plan.price}</span>
                      </div>
                      {plan.mrp && (
                        <div className="price-mrp">
                          <span className="strikethrough">₹{plan.mrp}</span>
                          <span className="savings-badge">Save ₹{savings}</span>
                        </div>
                      )}
                    </div>
                    {plan.tag && (
                      <span className="plan-badge-tag">{plan.tag}</span>
                    )}
                  </div>

                  {/* Primary Metrics: Validity & Data */}
                  <div className="plan-metrics-grid">
                    <div className="metric-col">
                      <span className="metric-label">Validity</span>
                      <strong className="metric-val">{plan.validity}</strong>
                    </div>
                    <div className="metric-col">
                      <span className="metric-label">Data</span>
                      <strong className="metric-val">{plan.data}</strong>
                    </div>
                    <div className="metric-col">
                      <span className="metric-label">Voice</span>
                      <strong className="metric-val">{plan.voice}</strong>
                    </div>
                    <div className="metric-col">
                      <span className="metric-label">SMS</span>
                      <strong className="metric-val">{plan.sms}</strong>
                    </div>
                  </div>

                  {/* OTT Subscriptions if any */}
                  {plan.ott && plan.ott.length > 0 && (
                    <div className="plan-ott-row">
                      <span className="ott-label">Includes:</span>
                      <div className="ott-chips">
                        {plan.ott.map((ottItem, idx) => (
                          <span key={idx} className="ott-chip">
                            <Tv size={12} /> {ottItem}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Plan Perks Bullet points */}
                  {plan.perks && plan.perks.length > 0 && (
                    <ul className="plan-perks-list">
                      {plan.perks.map((perk, idx) => (
                        <li key={idx}>
                          <Check size={14} className="perk-check" />
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Card Bottom CTA */}
                  <div className="plan-card-footer">
                    <button
                      type="button"
                      className="btn btn-primary btn-block select-plan-btn"
                      onClick={() => onSelectPlan(plan)}
                    >
                      <span>Recharge ₹{plan.price}</span>
                      <Zap size={15} />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          <div className="empty-plans-state">
            <div className="empty-icon">🔍</div>
            <h3>No matching plans found</h3>
            <p>Try searching for different keywords or clear the category filters.</p>
            <button 
              className="btn btn-outline"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
