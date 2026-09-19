import React from 'react';
import { Wifi, Zap, Award, ArrowRight } from 'lucide-react';
import { OPERATORS } from '../data/plans';

export default function OperatorsSection({ onSelectOperator }) {
  const operatorDetails = [
    {
      name: "Jio",
      tagline: "India's True 5G Network",
      sub: "Standalone 5G coverage across all 22 circles with unlimited data packs.",
      highlight: "Truly Unlimited 5G on ₹349+ packs",
      color: "#0066FF",
      lightBg: "#EFF6FF",
      border: "#BFDBFE"
    },
    {
      name: "Airtel",
      tagline: "Airtel 5G Plus & Wynk",
      sub: "Fastest mobile speeds with premium Wynk music and Apollo 24|7 healthcare circle.",
      highlight: "Unlimited 5G Plus & OTT bundles",
      color: "#E50914",
      lightBg: "#FEF2F2",
      border: "#FECACA"
    },
    {
      name: "Vi",
      tagline: "Hero Unlimited Night Binge",
      sub: "12am - 6am truly unlimited data plus weekend rollover of unused daily data.",
      highlight: "Free 12am-6am Binge All Night",
      color: "#E63946",
      lightBg: "#FFF1F2",
      border: "#FFE4E6"
    },
    {
      name: "BSNL",
      tagline: "National 4G & Unbeatable Validity",
      sub: "Cheapest secondary SIM plans and massive 150-day and 365-day validity packs.",
      highlight: "35-Day packs starting at ₹107",
      color: "#16A34A",
      lightBg: "#F0FDF4",
      border: "#BBF7D0"
    }
  ];

  return (
    <section className="section soft-bg" id="operators-section">
      <div className="container">
        
        <div className="section-header center">
          <div className="section-badge">
            <Wifi size={14} /> SUPPORTED OPERATORS
          </div>
          <h2 className="section-title">Select Your Telecom Operator</h2>
          <p className="section-subtitle">
            Direct automated gateway push for all top telecom providers across India.
          </p>
        </div>

        <div className="operators-cards-grid">
          {operatorDetails.map(op => (
            <div 
              key={op.name} 
              className="operator-showcase-card"
              style={{ borderTop: `4px solid ${op.color}` }}
            >
              <div className="op-card-header">
                <div 
                  className="op-logo-avatar"
                  style={{ backgroundColor: op.color }}
                >
                  {op.name[0]}
                </div>
                <div>
                  <h3 className="op-card-title">{op.name}</h3>
                  <span className="op-tagline">{op.tagline}</span>
                </div>
              </div>

              <p className="op-card-desc">{op.sub}</p>

              <div 
                className="op-highlight-badge"
                style={{ backgroundColor: op.lightBg, color: op.color }}
              >
                <Zap size={14} /> {op.highlight}
              </div>

              <button
                type="button"
                className="btn btn-outline btn-block op-explore-btn"
                onClick={() => onSelectOperator(op.name)}
              >
                <span>View {op.name} Plans</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
