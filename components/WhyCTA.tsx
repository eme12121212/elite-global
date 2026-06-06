'use client'

export default function WhyCTA() {
  return (
    <section style={{ background: '#f8fafc' }}>
      <div className="container">
        <div className="why-cta-card">
          <div className="section-label" style={{ color: 'var(--primary)' }}>Why Elite Global</div>
          <h2 className="section-title" style={{ maxWidth: 600, margin: '0 auto 16px' }}>
            Why Choose Elite Global Solutions?
          </h2>
          <p style={{ fontSize: 15, color: 'var(--muted)', maxWidth: 600, margin: '0 auto 30px', lineHeight: 1.7 }}>
            Deep expertise in blockchain, fintech, and enterprise software — we combine technical excellence 
            with transparent communication and long-term partnership to deliver solutions that drive real business impact.
          </p>
          <a href="#contact" className="btn-primary">Join the Revolution</a>
        </div>
      </div>
    </section>
  )
}
