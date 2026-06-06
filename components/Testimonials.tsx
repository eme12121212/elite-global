'use client'

const testimonials = [
  {
    quote: 'Elite Global delivered a robust social trading platform that exceeded our expectations. Their blockchain expertise and project management were world-class.',
    author: 'Alex Rivera, CTO — NexaChain',
    stars: 5,
  },
  {
    quote: 'The team at Elite Global understood our vision from day one. They built a complete PAMM system that transformed how we manage investor funds.',
    author: 'Sarah Chen, Founder — BlockVentures',
    stars: 5,
  },
  {
    quote: 'Outstanding technical depth and professional execution. Our white-label trading platform went live in record time with zero issues.',
    author: 'Michael Ross, CEO — TradeFlow',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="section-label">Testimonials</div>
        <h2 className="section-title">Trusted by Innovators</h2>
        <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 24 }}>
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="stars">{'★'.repeat(t.stars)}</div>
              <p>"{t.quote}"</p>
              <div className="author">— {t.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
