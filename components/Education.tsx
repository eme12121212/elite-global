'use client'

const items = [
  { icon: '🎓', name: 'Training Programs', desc: 'Comprehensive training for sales, support, and operations teams with certification.' },
  { icon: '📚', name: 'Educational Content', desc: 'Webinars, documentation, and video courses covering trading platforms and fintech systems.' },
  { icon: '🛠️', name: 'Onboarding', desc: 'Structured onboarding programs to ensure smooth adoption of all platform features.' },
]

export default function Education() {
  return (
    <section id="education" style={{ background: '#f8fafc' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="section-label">Education</div>
        <h2 className="section-title">Education & Training</h2>
        <p className="section-sub" style={{ margin: '0 auto', marginBottom: 40 }}>
          Empower your team with expert-led training, certifications, and ongoing educational resources.
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
