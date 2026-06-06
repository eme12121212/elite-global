'use client'
import { useState, useEffect, useCallback } from 'react'

const slides = [
  {
    badge: 'Leading Blockchain & Web3',
    title: 'Leading Blockchain, Web3 & Custom Software Development Company',
    desc: 'Elite Global Solutions is a leading blockchain and Web3 development company delivering enterprise-grade custom software, fintech platforms, and decentralized applications.',
  },
  {
    badge: 'Next-Gen Web3 Infrastructure',
    title: 'Next-Gen Web3 Infrastructure Solutions',
    desc: 'Building the future of decentralized internet with scalable blockchain infrastructure, smart contract development, and enterprise DeFi solutions.',
  },
  {
    badge: 'Enterprise Software Solutions',
    title: 'Enterprise Software & Web & Mobile Solutions',
    desc: 'Custom software development for fintech, trading, and enterprise — from trading platforms to mobile apps and cloud infrastructure.',
  },
]

export default function Hero() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="container">
        <div>
          <div className="hero-badge">
            <span className="pulse-dot" />{slides[idx].badge}
          </div>
          <div className="hero-slide active">
            <h1 dangerouslySetInnerHTML={{ __html: slides[idx].title.replace(/Web3|Blockchain|Software/g, m => `<span class="highlight">${m}</span>`) }} />
            <p>{slides[idx].desc}</p>
          </div>
          <div className="hero-btns">
            <a href="#web-mobile" className="btn-primary">Explore Services</a>
            <a href="#contact" className="btn-white">Contact Experts</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><h3>120+</h3><p>Projects Delivered</p></div>
            <div className="hero-stat"><h3>15+</h3><p>Years Experience</p></div>
            <div className="hero-stat"><h3>99.9%</h3><p>Client Satisfaction</p></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-mockup-laptop">
            <div className="screen">
              <div style={{ fontSize:14, fontWeight:700, color:'var(--primary)', marginBottom:8 }}>ELITE GLOBAL</div>
              <div style={{ height:6, background:'var(--border)', borderRadius:3, marginBottom:6 }} />
              <div style={{ height:6, background:'var(--border)', borderRadius:3, width:'70%', marginBottom:6 }} />
              <div style={{ height:6, background:'var(--border)', borderRadius:3, width:'50%', marginBottom:6 }} />
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:6, marginTop:10 }}>
                <div style={{ height:40, background:'rgba(16,185,129,0.08)', borderRadius:6 }} />
                <div style={{ height:40, background:'rgba(16,185,129,0.08)', borderRadius:6 }} />
              </div>
            </div>
          </div>
          <div className="hero-mockup-phone">
            <div style={{ padding:12, textAlign:'center' }}>
              <div style={{ fontSize:10, fontWeight:700, color:'var(--primary)' }}>EG</div>
              <div style={{ height:4, background:'var(--border)', borderRadius:2, marginTop:6 }} />
              <div style={{ height:20, background:'rgba(16,185,129,0.08)', borderRadius:4, marginTop:6 }} />
            </div>
          </div>
          <div className="hero-floating-badge badge-1 glass">
            <span style={{ color:'var(--primary)', fontWeight:700 }}>99.9%</span> Uptime
          </div>
          <div className="hero-floating-badge badge-2 glass">
            AI Intelligence <span style={{ color:'var(--primary)', fontWeight:700 }}>V2</span>
          </div>
        </div>
      </div>
    </section>
  )
}
