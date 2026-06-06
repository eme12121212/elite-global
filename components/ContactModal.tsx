'use client'
import { useState, useEffect } from 'react'

const ACCOUNT_KEY = 'elite_demo_account'

export default function ContactModal() {
  const [active, setActive] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [account, setAccount] = useState({ login: '', password: '' })

  useEffect(() => {
    const hash = () => window.location.hash === '#contact' && setActive(true)
    hash()
    window.addEventListener('hashchange', hash)
    return () => window.removeEventListener('hashchange', hash)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const last = parseInt(localStorage.getItem(ACCOUNT_KEY) || '1000', 10)
    const login = last + 1
    localStorage.setItem(ACCOUNT_KEY, login.toString())
    setAccount({ login: login.toString(), password: `Trade@${login}` })
    setSubmitted(true)
  }

  return (
    <div className={`modal-overlay${active ? ' active' : ''}`} onClick={() => { setActive(false); setSubmitted(false) }}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={() => { setActive(false); setSubmitted(false) }}>×</button>
        {!submitted ? (
          <>
            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <div className="modal-icon">📅</div>
              <h2>Request a Demo</h2>
              <p style={{ fontSize: 14, color: 'var(--muted)' }}>
                Fill in your details and our team will reach out within 2 hours.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" required placeholder="John" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" required placeholder="Doe" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" required placeholder="john@company.com" />
                </div>
                <div className="form-group">
                  <label>Company</label>
                  <input type="text" required placeholder="Your Company" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" required placeholder="+1 234 567 890" />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <select required>
                    <option value="">Select subject</option>
                    <option>Web & Mobile Development</option>
                    <option>Blockchain & DeFi</option>
                    <option>Fintech & Trading</option>
                    <option>AI & Automation</option>
                    <option>Marketplace Solutions</option>
                    <option>Education & Training</option>
                    <option>APIs & WebSockets</option>
                    <option>General Inquiry</option>
                    <option>Partnership Opportunity</option>
                  </select>
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: 14 }}>
                <label>Message</label>
                <textarea rows={4} required placeholder="Tell us about your project or requirements..."></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: 8 }}>
                Submit Request
              </button>
            </form>
          </>
        ) : (
          <div className="form-success" style={{ display: 'block', textAlign: 'center', padding: '20px 0' }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>✅</div>
            <h2 style={{ marginBottom: 8 }}>Thank You!</h2>
            <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 8 }}>
              We&apos;ll contact you shortly. In the meantime, here&apos;s your demo credentials:
            </p>
            <div style={{ background: '#f8fafc', borderRadius: 8, padding: 16, marginTop: 12 }}>
              <p style={{ fontSize: 14, color: 'var(--foreground)' }}>
                <strong>Login:</strong> {account.login}
              </p>
              <p style={{ fontSize: 14, color: 'var(--foreground)' }}>
                <strong>Password:</strong> {account.password}
              </p>
            </div>
            <button
              className="btn-secondary"
              style={{ marginTop: 20 }}
              onClick={() => { setActive(false); setSubmitted(false) }}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
