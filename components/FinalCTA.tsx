'use client'

export default function FinalCTA() {
  return (
    <section>
      <div className="container">
        <div className="final-cta">
          <h2 className="section-title" style={{ color: '#fff', marginBottom: 12 }}>Get Started with Your Next Digital Project</h2>
          <p style={{ fontSize: 15, color: '#94a3b8', maxWidth: 500, margin: '0 auto 30px' }}>
            Ready to build something great? Let us help you turn your vision into reality with cutting-edge technology.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
            <a href="#contact" className="btn-primary">Start Your Project</a>
            <a href="#contact" className="btn-white">Contact Sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}
