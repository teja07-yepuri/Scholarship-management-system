import React, { useState } from 'react';
import { Send, CheckCircle, Phone, Mail, HelpCircle } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="section">
      <PageContainer style={{ maxWidth: '960px' }}>
        <SectionHeader
          eyebrow="Citizen Assistance"
          title="Contact & National Helplines"
          subtitle="Report broken government links, suggest newly notified schemes, or access verified official departmental helplines."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-6)', marginBottom: 'var(--space-10)' }}>
          {/* Feedback Form */}
          <div className="glass-panel" style={{ borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)' }}>
            <h3 style={{ fontSize: '1.15rem', marginBottom: 'var(--space-2)' }}>Editorial Feedback & Corrections</h3>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)' }}>
              Help us keep the local database current by notifying our editorial team of updated guidelines.
            </p>

            {submitted ? (
              <div style={{ backgroundColor: 'var(--color-success-bg)', border: '1px solid var(--color-success-border)', padding: '1.25rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                <CheckCircle size={28} color="var(--color-success)" style={{ margin: '0 auto 0.5rem' }} />
                <h4 style={{ color: 'var(--color-success)', marginBottom: '4px' }}>Feedback Received</h4>
                <p style={{ color: '#166534', fontSize: '0.8125rem' }}>
                  Thank you for helping verify scheme records. Our team will review the submitted details.
                </p>
                <Button variant="secondary" size="sm" onClick={() => setSubmitted(false)} style={{ marginTop: '0.75rem' }}>
                  Send Another Note
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="ct-name">Your Name *</label>
                  <input
                    id="ct-name"
                    type="text"
                    required
                    className="form-input"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="ct-email">Email Address *</label>
                  <input
                    id="ct-email"
                    type="email"
                    required
                    className="form-input"
                    placeholder="name@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="ct-topic">Scheme Name / Subject *</label>
                  <input
                    id="ct-topic"
                    type="text"
                    required
                    className="form-input"
                    placeholder="e.g. Post-Matric SC Scholarship deadline update"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="ct-msg">Details *</label>
                  <textarea
                    id="ct-msg"
                    rows="3"
                    required
                    className="form-textarea"
                    placeholder="Describe any corrections or official gazette references..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <Button type="submit" variant="primary" isBlock icon={Send}>
                  Submit Note
                </Button>
              </form>
            )}
          </div>

          {/* Official Helplines */}
          <div>
            <h3 style={{ fontSize: '1.15rem', marginBottom: 'var(--space-3)' }}>Verified National Helplines</h3>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)' }}>
              For official application status or portal technical support, contact the respective government authority directly:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <div className="glass-card" style={{ borderRadius: 'var(--radius-md)', padding: '1rem' }}>
                <strong style={{ fontSize: '0.9375rem', color: 'var(--color-primary-navy)' }}>
                  National Scholarship Portal (NSP) Helpdesk
                </strong>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', margin: '4px 0 8px' }}>
                  Student registration, institute verification, and Aadhaar seeding queries:
                </p>
                <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-main)' }}>
                  📞 0120 - 6619540 | ✉️ helpdesk@nsp.gov.in
                </div>
              </div>

              <div className="glass-card" style={{ borderRadius: 'var(--radius-md)', padding: '1rem' }}>
                <strong style={{ fontSize: '0.9375rem', color: 'var(--color-primary-navy)' }}>
                  PM-KISAN Samman Nidhi Helpline
                </strong>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', margin: '4px 0 8px' }}>
                  Farmer installment status, e-KYC validation, and land record linking:
                </p>
                <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-main)' }}>
                  📞 Toll Free: 155261 / 1800 115 526
                </div>
              </div>

              <div className="glass-card" style={{ borderRadius: 'var(--radius-md)', padding: '1rem' }}>
                <strong style={{ fontSize: '0.9375rem', color: 'var(--color-primary-navy)' }}>
                  e-Shram Social Security Helpline
                </strong>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', margin: '4px 0 8px' }}>
                  Universal Account Number (UAN) generation and unorganized worker records:
                </p>
                <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-main)' }}>
                  📞 National Toll Free: 14434
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="glass-panel" style={{ borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-4)' }}>Frequently Asked Questions</h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <div>
              <h4 style={{ fontSize: '0.9375rem', marginBottom: '4px' }}>Are there any fees to search or apply on this platform?</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                No. SchemesFinder is completely free for all citizens. Furthermore, authentic government welfare portals do not charge application processing fees.
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '0.9375rem', marginBottom: '4px' }}>How can I verify that a portal link is legitimate?</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                All official application links provided on SchemesFinder connect exclusively to verified government domains ending in <code>.gov.in</code> or <code>.nic.in</code>.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default Contact;
