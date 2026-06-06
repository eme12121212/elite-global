'use client'
import { useState } from 'react'

const tabs = [
  { label: 'Web & Mobile Development', href: '#web-mobile' },
  { label: 'Blockchain', href: '#blockchain' },
  { label: 'Fintech & Trading', href: '#fintech' },
  { label: 'AI & Automation', href: '#ai-automation' },
  { label: 'Marketplace', href: '#marketplace' },
  { label: 'Education', href: '#education' },
  { label: 'APIs & WebSockets', href: '#apis' },
  { label: 'Portfolio', href: '#portfolio' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#hero" className="logo">ELITE<span>GLOBAL</span></a>
        <div className="nav-links" style={{ display: open ? 'flex' : undefined }} onClick={() => setOpen(false)}>
          {tabs.map((t, i) => (
            <a key={i} href={t.href}>{t.label}</a>
          ))}
          <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>Get Started</a>
        </div>
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  )
}
