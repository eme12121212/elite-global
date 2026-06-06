'use client'

const items = [
  { icon: '🛒', name: 'NFT Marketplace', desc: 'Full marketplace platform with minting, bidding, auctions, royalties, and wallet integration.' },
  { icon: '🏪', name: 'Prop Firm Store', desc: 'Challenge purchase, addon sales, and subscription management for proprietary trading firms.' },
  { icon: '🔌', name: 'Plugin Marketplace', desc: 'Custom indicator and EA marketplace for MT4/MT5 with secure checkout and licensing.' },
]

export default function Marketplace() {
  return (
    <section id="marketplace">
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="section-label">Marketplace</div>
        <h2 className="section-title">Marketplace Platforms</h2>
        <p className="section-sub" style={{ margin: '0 auto', marginBottom: 40 }}>
          Launch your own marketplace — for NFTs, trading products, or digital assets.
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
