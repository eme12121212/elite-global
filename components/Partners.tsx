'use client'

const projects = [
  { name: 'Vertex Markets', tag: 'Social Trading Platform', desc: 'End-to-end social trading infrastructure with copy trading for 50K+ users.' },
  { name: 'Horizon Brokers', tag: 'PAMM & CRM Suite', desc: 'Full PAMM/MAM system with integrated CRM, IB management, and compliance reporting.' },
  { name: 'PrimeEdge FX', tag: 'Prop Trading Firm', desc: 'Complete prop firm suite — challenges, funded accounts, dashboards, and payouts.' },
  { name: 'CapitalGate', tag: 'Liquidity Integration', desc: 'Ultra-low latency liquidity bridge connecting 12+ Tier-1 providers.' },
  { name: 'Apex Trading', tag: 'WebTerminal', desc: 'White-label browser-based trading platform with 50+ indicators.' },
  { name: 'Zenith Global', tag: 'Mobile Trading App', desc: 'Native iOS/Android trading app with real-time quotes and biometric security.' },
]

export default function Partners() {
  return (
    <section id="portfolio" style={{ background: '#f8fafc' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="section-label">Portfolio</div>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-sub" style={{ margin: '0 auto', marginBottom: 40 }}>
          From startups to established institutions — our technology powers brokers across 6 continents.
        </p>
        <div className="product-grid">
          {projects.map((p, i) => (
            <div className="product-card" key={i}>
              <div className="product-tag">{p.tag}</div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
