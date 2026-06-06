'use client'

const items = [
  { icon: '🔌', name: 'REST APIs', desc: 'Secure, well-documented RESTful APIs for seamless integration with trading platforms, CRM, and back-office systems.' },
  { icon: '🔗', name: 'WebSocket Services', desc: 'Real-time data streaming for live quotes, trade execution, and market data via persistent WebSocket connections.' },
  { icon: '⚡', name: 'Integration Layer', desc: 'Pre-built connectors for MT4/MT5, cTrader, liquidity providers, payment gateways, and third-party CRMs.' },
]

export default function APIsWebSockets() {
  return (
    <section id="apis">
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="section-label">APIs & WebSockets</div>
        <h2 className="section-title">APIs & Real-Time Connectivity</h2>
        <p className="section-sub" style={{ margin: '0 auto', marginBottom: 40 }}>
          Robust APIs and WebSocket infrastructure for real-time data, trading, and system integration.
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
