'use client'

const techs = ['Ethereum', 'Solana', 'Polygon', 'Binance', 'Cardano', 'Avalanche', 'Polkadot', 'Tezos', 'Ripple', 'Cosmos', 'Tron']

export default function TechStack() {
  return (
    <section style={{ padding: '40px 0' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: 20 }}>
        <div className="section-label">Tech Stack</div>
        <h2 className="section-title" style={{ fontSize: 28 }}>Tech Expertise In Blockchain</h2>
      </div>
      <div className="marquee">
        <div className="marquee-inner" style={{ animationDuration: '25s' }}>
          {[...techs, ...techs].map((t, i) => (
            <span className="marquee-item" key={i} style={{ fontSize: 14, fontWeight: 700, background: 'rgba(16,185,129,0.04)', border: '1px solid rgba(16,185,129,0.08)' }}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
