'use client'

const steps = [
  { num: 1, title: 'Evaluation Framework', desc: 'Assess feasibility, identify suitable platforms, and define technical requirements for your project.' },
  { num: 2, title: 'Pilot Testing', desc: 'Collaborative testing in real-world scenarios with iterative feedback and rapid adjustments.' },
  { num: 3, title: 'Security & Scale', desc: 'Cutting-edge security protocols paired with scalable architecture for enterprise-grade performance.' },
  { num: 4, title: 'Network Integration', desc: 'Seamless integration with blockchain networks, APIs, and third-party services.' },
]

export default function Process() {
  return (
    <section id="process">
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="section-label">Process</div>
        <h2 className="section-title">Our Development Process</h2>
        <p className="section-sub" style={{ margin: '0 auto', marginBottom: 40 }}>
          A proven methodology that ensures quality, transparency, and timely delivery.
        </p>
        <div className="steps-grid">
          {steps.map((s, i) => (
            <div className="step-card" key={i}>
              <div className="step-number">{s.num}</div>
              <h4>{s.title}</h4>
              <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 8 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
