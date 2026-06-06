'use client'

const services = [
  'Blockchain Development', 'Software Services', 'DeFi Applications',
  'Token Development', 'NFT Marketplace', 'Metaverse',
  'Fintech Softwares', 'Exchanges',
]

export default function ServicesMarquee() {
  return (
    <section style={{ padding: '30px 0', background: '#f8fafc' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: 20 }}>
        <div className="section-label">Services</div>
        <h2 className="section-title" style={{ fontSize: 28 }}>End-to-End Technology Services</h2>
      </div>
      <div className="marquee">
        <div className="marquee-inner">
          {[...services, ...services].map((s, i) => (
            <span className="marquee-item" key={i}>{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
