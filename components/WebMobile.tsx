'use client'

const items = [
  { icon: '🌐', name: 'Web Development', desc: 'React, Vue, Next.js — responsive, SEO-optimized websites and web applications built for performance.' },
  { icon: '📱', name: 'Mobile Apps', desc: 'Native Android & iOS applications with real-time data, biometric security, and seamless UX.' },
  { icon: '🎨', name: 'UI/UX Design', desc: 'Conversion-optimized interfaces with intuitive workflows, tailored for fintech and trading platforms.' },
]

export default function WebMobile() {
  return (
    <section id="web-mobile">
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="section-label">Web & Mobile</div>
        <h2 className="section-title">Web & Mobile Development</h2>
        <p className="section-sub" style={{ margin: '0 auto', marginBottom: 40 }}>
          Full-stack development across web and mobile — from responsive dashboards to native trading apps.
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
