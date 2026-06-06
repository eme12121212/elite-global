'use client'

const stats = [
  { number: '120+', desc: 'Broker Clients Worldwide' },
  { number: '15+', desc: 'Years in Business' },
  { number: '50+', desc: 'Third-Party Integrations' },
  { number: '99.99%', desc: 'Historical Uptime' },
]

export default function Stats() {
  return (
    <section id="stats" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="section-label" style={{ color: 'var(--primary-light)' }}>By the Numbers</div>
        <h2 className="section-title" style={{ color: '#fff' }}>Trusted Infrastructure at Scale</h2>
        <p className="section-sub" style={{ margin: '0 auto', color: '#94a3b8' }}>
          Our track record speaks for itself. We power some of the largest brokerages globally.
        </p>
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className="stat-item" key={i}>
              <div className="stat-number">{s.number}</div>
              <div className="stat-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
