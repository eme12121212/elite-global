'use client'

const items = [
  { icon: '🤖', name: 'Intelligent Automation', desc: 'Process automation, chatbots, and AI-driven trading tools that reduce manual overhead.' },
  { icon: '🧠', name: 'Machine Learning', desc: 'Predictive analytics, anomaly detection, and ML models for risk assessment and trading signals.' },
  { icon: '📊', name: 'Smart Analytics', desc: 'AI-powered dashboards with natural language queries and automated insight generation.' },
]

export default function AIAutomation() {
  return (
    <section id="ai-automation" style={{ background: '#f8fafc' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="section-label">AI & Automation</div>
        <h2 className="section-title">AI & Automation Solutions</h2>
        <p className="section-sub" style={{ margin: '0 auto', marginBottom: 40 }}>
          Leverage artificial intelligence and automation to optimize trading operations and business processes.
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
