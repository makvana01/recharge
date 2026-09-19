import React, { useState } from 'react';
import { BookOpen, ArrowRight, Clock, X, ChevronRight } from 'lucide-react';
import { GUIDE_ARTICLES } from '../data/guides';

export default function GuidesSection() {
  const [activeGuide, setActiveGuide] = useState(null);

  return (
    <section className="section" id="guides-section">
      <div className="container">
        
        <div className="section-header center">
          <div className="section-badge">
            <BookOpen size={14} /> KNOWLEDGE BASE
          </div>
          <h2 className="section-title">Telecom Guides & Money-Saving Tips</h2>
          <p className="section-subtitle">
            Unbiased research and breakdowns to help you maximize validity, 5G data, and cashback offers.
          </p>
        </div>

        <div className="guides-grid">
          {GUIDE_ARTICLES.map(guide => (
            <div key={guide.id} className="guide-card">
              <div className="guide-card-top">
                <span className="guide-cat-badge">{guide.category}</span>
                <span className="guide-time">
                  <Clock size={12} /> {guide.readTime}
                </span>
              </div>

              <h3 className="guide-card-title">{guide.title}</h3>
              <p className="guide-card-summary">{guide.summary}</p>

              <button
                type="button"
                className="guide-read-link"
                onClick={() => setActiveGuide(guide)}
              >
                <span>Read Full Guide</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Guide Reader Modal */}
        {activeGuide && (
          <div className="modal-backdrop animate-fade-in">
            <div className="modal-dialog guide-modal-dialog">
              <button 
                className="modal-close-btn" 
                onClick={() => setActiveGuide(null)} 
                aria-label="Close guide"
              >
                <X size={20} />
              </button>
              
              <div className="guide-modal-header">
                <span className="guide-modal-cat">{activeGuide.category}</span>
                <h2 className="guide-modal-heading">{activeGuide.title}</h2>
                <div className="guide-modal-meta">
                  <span>⏱️ {activeGuide.readTime}</span> · <span>Updated Recently</span> · <span>Editorial Telecom Desk</span>
                </div>
              </div>

              <div 
                className="guide-modal-body"
                dangerouslySetInnerHTML={{ __html: activeGuide.content }}
              />

              <div className="guide-modal-footer">
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={() => setActiveGuide(null)}
                >
                  Close Guide
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
