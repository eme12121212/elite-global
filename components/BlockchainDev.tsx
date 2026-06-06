'use client'

const items = [
  { icon: '🔗', name: 'Blockchain Development', desc: 'Smart contracts, DApps, and custom blockchain infrastructure for financial and enterprise applications.' },
  { icon: '💰', name: 'DeFi Protocols', desc: 'Decentralized finance platforms — lending, staking, yield farming, and automated market makers.' },
  { icon: '🖼️', name: 'NFT Marketplace', desc: 'End-to-end NFT platforms with minting, trading, auctions, royalties, and multi-chain support.' },
]

export default function Blockchain() {
  return (
    <section id="blockchain" style={{ background: '#f8fafc' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="section-label">Blockchain</div>
        <h2 className="section-title">Blockchain & Web3 Solutions</h2>
        <p className="section-sub" style={{ margin: '0 auto', marginBottom: 40 }}>
          Enterprise blockchain development — from smart contracts to full DeFi ecosystems and NFT marketplaces.
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
