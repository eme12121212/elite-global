export default function Platforms() {
  const items = [
    { icon: '📊', title: 'MetaTrader 5', desc: 'The next-gen multi-asset platform with advanced charting, 21 timeframes, and built-in economic calendar.' },
    { icon: '📱', title: 'MT5 Mobile', desc: 'Full trading power in your pocket. Real-time quotes, interactive charts, and one-tap trading on iOS & Android.' },
    { icon: '💻', title: 'WebTerminal', desc: 'Instant access from any browser. No download needed. Full MT5 functionality with a clean, modern interface.' },
  ];
  return (
    <section className="platforms" id="platforms" style={{ background: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <div className="section-label">Trading Platforms</div>
          <h2 className="section-title">Trade on World-Class Platforms</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>Choose from the most powerful trading platforms in the industry, all optimized for peak performance.</p>
        </div>
        <div className="platform-grid">
          {items.map((item, i) => (
            <div key={i} className="platform-card">
              <div className="platform-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
