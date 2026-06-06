'use client'

const capabilities = [
  {
    icon: '📄', name: 'Smart Contract Development',
    bullets: ['EVM & Solana compatible', 'Security-first audits', 'Gas-optimized code'],
  },
  {
    icon: '🏦', name: 'DeFi Platform Development',
    bullets: ['Staking & lending protocols', 'DEX & swap platforms', 'Yield vaults & farming'],
  },
  {
    icon: '🖼️', name: 'NFT Marketplace Development',
    bullets: ['Minting & auction systems', 'Royalty & fee structures', 'Multi-chain wallet support'],
  },
  {
    icon: '📱', name: 'Web & Mobile App Development',
    bullets: ['React Native & Flutter', 'Responsive web dashboards', 'Real-time data sync'],
  },
  {
    icon: '🎨', name: 'UI/UX Design',
    bullets: ['Figma prototypes', 'Design systems', 'User research & testing'],
  },
]

export default function Capabilities() {
  return (
    <section id="capabilities">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <div className="section-label">Expertise</div>
          <h2 className="section-title">Our Expertise in DeFi, NFT & Crypto Solutions</h2>
          <p className="section-sub" style={{ margin: '0 auto', marginBottom: 40 }}>
            Deep technical expertise across blockchain, fintech, and full-stack development.
          </p>
        </div>
        <div className="capability-grid">
          {capabilities.map((c, i) => (
            <div className="capability-card" key={i}>
              <div className="capability-image">{c.icon}</div>
              <div>
                <h4>{c.name}</h4>
                <ul>
                  {c.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
