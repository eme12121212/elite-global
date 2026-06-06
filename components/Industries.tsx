'use client'

const industries = [
  { icon: '💰', name: 'Fintech' },
  { icon: '📈', name: 'Trading' },
  { icon: '🏥', name: 'Healthcare' },
  { icon: '🛒', name: 'E-commerce' },
  { icon: '🏠', name: 'Real Estate' },
  { icon: '📱', name: 'Mobile Apps' },
  { icon: '🔌', name: 'APIs & WebSockets' },
  { icon: '🔗', name: 'Web3 & Blockchain' },
]

export default function Industries() {
  return (
    <section style={{ background: '#f8fafc' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="section-label">Industries</div>
        <h2 className="section-title">Industries We Serve</h2>
        <p className="section-sub" style={{ margin: '0 auto', marginBottom: 40 }}>
          Cross-industry expertise delivering technology solutions that scale.
        </p>
        <div className="industries-grid">
          {industries.map((ind, i) => (
            <div className="industry-item" key={i}>
              <div className="industry-icon">{ind.icon}</div>
              <div className="industry-name">{ind.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
