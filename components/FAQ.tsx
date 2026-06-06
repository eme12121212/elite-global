'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'What services does Elite Global Solutions provide?',
    a: 'We offer end-to-end technology services including blockchain development, fintech & trading platforms, web & mobile development, AI & automation, NFT marketplace development, API integration, and education & training.',
  },
  {
    q: 'How can I get started with a new project?',
    a: 'Simply click "Get Started" or "Contact Experts" to reach out. We will schedule a free consultation to understand your requirements, provide a proposal, and kick off the project within days.',
  },
  {
    q: 'Do you offer custom software development?',
    a: 'Yes. We specialize in custom software development tailored to your specific business needs — from trading platforms and CRM systems to blockchain dApps and mobile applications.',
  },
  {
    q: 'What blockchain networks do you support?',
    a: 'We support Ethereum, Solana, Polygon, Binance Smart Chain, Cardano, Avalanche, Polkadot, Tezos, Ripple, Cosmos, and Tron. We can also work with custom or private blockchain networks.',
  },
  {
    q: 'Do you offer post-launch support and maintenance?',
    a: 'Absolutely. We provide 24/7 support and maintenance services to ensure your systems run smoothly, securely, and stay up to date with the latest technologies and security patches.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" style={{ background: '#f8fafc' }}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <div className="section-label">FAQ</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div className={`faq-item${open === i ? ' open' : ''}`} key={i}>
              <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
                {f.q}
                <span className="faq-arrow">▼</span>
              </button>
              <div className="faq-answer">
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
