import React from 'react';

export default function OperatorsSection({ onSelectOperator }) {
  const operators = [
    { name: 'Airtel', cls: 'air', letter: 'A' },
    { name: 'Jio', cls: 'jio', letter: 'J' },
    { name: 'Vi', cls: 'vi', letter: 'Vi' },
    { name: 'BSNL', cls: 'bsnl', letter: 'B' }
  ];

  return (
    <section className="section" id="operators">
      <div className="wrap">
        <div className="center">
          <label>CHOOSE YOUR NETWORK</label>
          <h2>Recharge guides for every major operator</h2>
          <p>Plans, comparisons, offers and practical saving tips in one place.</p>
        </div>

        <div className="ops">
          {operators.map(op => (
            <a 
              key={op.name}
              href="#plans-explorer"
              onClick={(e) => {
                if (onSelectOperator) {
                  onSelectOperator(op.name);
                }
              }}
            >
              <b className={op.cls}>{op.letter}</b>
              <span>
                <strong>{op.name}</strong>
                <small>Plans &amp; offers</small>
              </span>
              →
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
