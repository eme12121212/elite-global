'use client'

const items = [
  { icon: '📊', name: 'Forex CRM', desc: 'Comprehensive CRM with KYC, onboarding, IB management, commission tracking, and back-office integration.' },
  { icon: '🔄', name: 'Social Trading', desc: 'Multi-provider copy trading with profit allocation, risk limits, and full transparency.' },
  { icon: '🌉', name: 'Liquidity Bridge', desc: 'Ultra-low latency connectivity to Tier-1 and prime liquidity providers.' },
  { icon: '📋', name: 'Forex Copier', desc: 'Instantly copy trades across multiple accounts with real-time synchronization.' },
  { icon: '🏆', name: 'Prop Trading Suite', desc: 'Challenge management, dashboard, funded account provisioning, and payout systems.' },
  { icon: '📈', name: 'Reporting Tools', desc: 'Advanced analytics, trade reports, and real-time data visualization for brokers.' },
]

export default function FintechTrading() {
  return (
    <section id="fintech">
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="section-label">Fintech & Trading</div>
        <h2 className="section-title">Fintech & Trading Infrastructure</h2>
        <p className="section-sub" style={{ margin: '0 auto', marginBottom: 40 }}>
          Complete technology stack for forex brokers, prop firms, and financial platforms.
        </p>
        <div className="product-grid">
          {items.map((s, i) => (
            <div className="product-card" key={i}>
              <div className="product-icon">{s.icon}</div>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
