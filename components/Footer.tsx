'use client'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-brand">
          <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--primary)', marginBottom: 12, letterSpacing: 1 }}>
            ELITE<span style={{ color: '#fff' }}>GLOBAL</span>
          </div>
          <p>Elite Global Solutions is a leading technology company delivering enterprise-grade blockchain, fintech, web & mobile, and AI solutions worldwide.</p>
          <div className="social-links">
            <a href="https://wa.me/447123456789" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <a href="https://t.me/eliteglobalsolutions" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </a>
            <a href="https://linkedin.com/company/eliteglobalsolutions" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="mailto:info@eliteglobalsolutions.com" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/></svg>
            </a>
          </div>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email" aria-label="Newsletter email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div>
          <h4>Services</h4>
          <a href="#web-mobile">Web & Mobile</a><br />
          <a href="#blockchain">Blockchain</a><br />
          <a href="#fintech">Fintech & Trading</a><br />
          <a href="#ai-automation">AI & Automation</a><br />
          <a href="#marketplace">Marketplace</a><br />
          <a href="#education">Education</a><br />
          <a href="#apis">APIs & WebSockets</a>
        </div>
        <div>
          <h4>Solutions</h4>
          <a href="#capabilities">Smart Contracts</a><br />
          <a href="#capabilities">DeFi Platforms</a><br />
          <a href="#capabilities">NFT Marketplaces</a><br />
          <a href="#web-mobile">Web & Mobile Apps</a><br />
          <a href="#web-mobile">UI/UX Design</a><br />
          <a href="#process">Custom Development</a><br />
        </div>
        <div>
          <h4>Company</h4>
          <a href="#web-mobile">About Us</a><br />
          <a href="#portfolio">Portfolio</a><br />
          <a href="#stats">Stats</a><br />
          <a href="#faq">FAQ</a><br />
          <a href="#testimonials">Testimonials</a>
        </div>
        <div>
          <h4>Resources</h4>
          <a href="#education">Learning Center</a><br />
          <a href="#apis">API Docs</a><br />
          <a href="#contact">Support</a><br />
        </div>
        <div>
          <h4>Contact</h4>
          <p>info@eliteglobalsolutions.com</p>
          <p>+44 20 7123 4567</p>
          <p>London, United Kingdom</p>
        </div>
      </div>
      <div className="footer-disclaimer">
        Risk Warning: Trading foreign exchange, cryptocurrencies, and other financial instruments carries a high level of risk and may not be suitable for all investors. The information provided on this website is for informational purposes only and does not constitute investment advice. Elite Global Solutions provides technology infrastructure only and does not offer financial services.
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Elite Global Solutions. All rights reserved.
      </div>
    </footer>
  )
}
