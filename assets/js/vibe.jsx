const { Eyebrow, Reveal } = window;

const TileFrame = ({ label, children, bg = 'var(--mv-surface)' }) => (
  <div style={{ width:'100%', height:'100%', background:bg, borderRadius:'var(--mv-radius)', border:'1px solid var(--mv-line)', position:'relative', overflow:'hidden' }}>
    {children}
    <div style={{ position:'absolute', bottom:12, left:12, fontFamily:'var(--mv-font-display)', fontWeight:600, fontSize:10, letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--mv-bone)', opacity:0.9, background:'rgba(0,0,0,0.4)', padding:'4px 8px', borderRadius:4, backdropFilter:'blur(4px)' }}>{label}</div>
  </div>
);

const WallTile = () => (
  <TileFrame label="Temboknya" bg="#141413">
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <defs>
        <pattern id="concrete" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <rect width="8" height="8" fill="#1a1a18"/>
          <circle cx="2" cy="3" r="0.4" fill="#222"/>
          <circle cx="6" cy="6" r="0.3" fill="#2a2a28"/>
        </pattern>
        <radialGradient id="sg1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#b8d670" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#b8d670" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill="url(#concrete)"/>
      {[60,130,200,270].map(y => <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#0a0a09" strokeWidth="1.5"/>)}
      <line x1="80"  y1="0"   x2="80"  y2="60"  stroke="#0a0a09" strokeWidth="1.5"/>
      <line x1="220" y1="0"   x2="220" y2="60"  stroke="#0a0a09" strokeWidth="1.5"/>
      <line x1="40"  y1="60"  x2="40"  y2="130" stroke="#0a0a09" strokeWidth="1.5"/>
      <line x1="160" y1="60"  x2="160" y2="130" stroke="#0a0a09" strokeWidth="1.5"/>
      <ellipse cx="200" cy="155" rx="90" ry="40" fill="url(#sg1)"/>
      <rect x="160" y="148" width="80" height="14" rx="2" fill="#000"/>
      <text x="200" y="138" textAnchor="middle" fill="#b8d670" fontFamily="monospace" fontSize="9" letterSpacing="2" opacity="0.8">ORDER</text>
      <g transform="translate(205,148) rotate(-3)">
        <rect x="-4" y="-18" width="42" height="22" rx="2" fill="#f4ede0" stroke="#2a2a28" strokeWidth="0.5"/>
        <rect x="-1" y="-15" width="10" height="2" fill="#8ab545"/>
        <rect x="-1" y="-10" width="28" height="1.2" fill="#2a2a28"/>
      </g>
    </svg>
  </TileFrame>
);

const SlotTile = () => (
  <TileFrame label="Slot" bg="#0e0e0d">
    <svg viewBox="0 0 300 300" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <defs>
        <radialGradient id="sg2" cx="50%" cy="60%" r="60%">
          <stop offset="0%" stopColor="#d4a847" stopOpacity="0.35"/>
          <stop offset="100%" stopColor="#d4a847" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="300" height="300" fill="#0e0e0d"/>
      <ellipse cx="150" cy="180" rx="120" ry="70" fill="url(#sg2)"/>
      <g transform="translate(150,170)">
        <rect x="-80" y="-6" width="160" height="12" rx="2" fill="#000"/>
        <rect x="-80" y="-6" width="160" height="1" fill="#1a1a18"/>
        <g transform="translate(0,-40)">
          <line x1="0" y1="-10" x2="0" y2="18" stroke="#d4a847" strokeWidth="2" strokeLinecap="round"/>
          <path d="M-6 12 L0 20 L6 12" stroke="#d4a847" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <text x="0" y="-60" textAnchor="middle" fill="#d4a847" fontFamily="monospace" fontSize="11" letterSpacing="3">ORDER</text>
      </g>
      <circle cx="50"  cy="170" r="2.5" fill="#1a1a18" stroke="#333" strokeWidth="0.5"/>
      <circle cx="250" cy="170" r="2.5" fill="#1a1a18" stroke="#333" strokeWidth="0.5"/>
    </svg>
  </TileFrame>
);

const CardTile = () => (
  <TileFrame label="Kartunya" bg="linear-gradient(135deg,#1a1a18,#0f0f0e)">
    <svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <defs>
        <linearGradient id="cp" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f4ede0"/>
          <stop offset="100%" stopColor="#e8dfce"/>
        </linearGradient>
      </defs>
      <ellipse cx="150" cy="175" rx="100" ry="8" fill="#000" opacity="0.5"/>
      <g transform="translate(150,100) rotate(-8) translate(-90,-55)">
        <rect x="0" y="0" width="180" height="110" rx="8" fill="url(#cp)"/>
        <rect x="12" y="12" width="8" height="86" fill="#8ab545"/>
        <circle cx="36" cy="22" r="6" fill="#1a1a18"/>
        <circle cx="33" cy="20" r="1.6" fill="#f4ede0"/>
        <circle cx="39" cy="20" r="1.6" fill="#f4ede0"/>
        <text x="36" y="54" fill="#1a1a18" fontFamily="sans-serif" fontWeight="700" fontSize="14" letterSpacing="-0.3">Matcha Latte</text>
        <text x="36" y="68" fill="#555" fontFamily="sans-serif" fontSize="9" letterSpacing="1">SIGNATURE · 23K</text>
        <g transform="translate(148,82)">
          <circle r="14" fill="#b8d670"/>
          <text y="3" textAnchor="middle" fill="#1a1a18" fontFamily="sans-serif" fontWeight="700" fontSize="9">23K</text>
        </g>
      </g>
    </svg>
  </TileFrame>
);

const InteriorTile = () => (
  <TileFrame label="Interior" bg="linear-gradient(180deg,#1d1c1a 0%,#0f0f0e 100%)">
    <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <defs>
        <radialGradient id="pend" cx="50%" cy="0%" r="60%">
          <stop offset="0%" stopColor="#f3d27a" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#f3d27a" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="400" height="130" fill="#1a1a18"/>
      <line x1="40" y1="50" x2="360" y2="50" stroke="#2a2a28" strokeWidth="1.5"/>
      <line x1="40" y1="85" x2="360" y2="85" stroke="#2a2a28" strokeWidth="1.5"/>
      {[70,105,140,175,210,245,280,315].map((x, i) => (
        <g key={i}>
          <rect x={x} y={32} width="18" height="18" fill={i%3===0?"#8ab545":i%3===1?"#d4a847":"#e8dfce"} opacity="0.5"/>
          <rect x={x} y={30} width="18" height="3" fill="#333"/>
        </g>
      ))}
      {[110,200,290].map(x => (
        <g key={x}>
          <ellipse cx={x} cy="0" rx="60" ry="30" fill="url(#pend)"/>
          <line x1={x} y1="0" x2={x} y2="22" stroke="#2a2a28" strokeWidth="1"/>
          <ellipse cx={x} cy="26" rx="9" ry="4" fill="#f3d27a"/>
        </g>
      ))}
      <rect x="0" y="130" width="400" height="70" fill="#2a1f14"/>
      <rect x="0" y="130" width="400" height="4" fill="#3a2d1d"/>
    </svg>
  </TileFrame>
);

const CounterTile = () => (
  <TileFrame label="Counter" bg="linear-gradient(180deg,#1a1a18 0%,#0a0a09 100%)">
    <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <rect x="0" y="0" width="400" height="110" fill="#141413"/>
      <rect x="140" y="25" width="120" height="30" rx="2" fill="#8ab545" opacity="0.15"/>
      <circle cx="165" cy="40" r="6" fill="#f4ede0"/>
      <text x="180" y="44" fill="#f4ede0" fontFamily="sans-serif" fontWeight="700" fontSize="11" letterSpacing="1">MEG&amp;ViS</text>
      <rect x="0" y="110" width="400" height="12" fill="#3a2d1d"/>
      <rect x="0" y="122" width="400" height="78" fill="#1f1710"/>
      {[80,160,240,320].map(x => <line key={x} x1={x} y1="122" x2={x} y2="200" stroke="#120d08" strokeWidth="1"/>)}
      {[80,200,320].map(x => (
        <g key={x}>
          <rect x={x-18} y="100" width="36" height="6" rx="3" fill="#2a1f14"/>
          <rect x={x-1.5} y="106" width="3" height="60" fill="#555"/>
          <rect x={x-14} y="164" width="28" height="2" fill="#555"/>
          <line x1={x-10} y1="166" x2={x-10} y2="196" stroke="#555" strokeWidth="1.5"/>
          <line x1={x+10} y1="166" x2={x+10} y2="196" stroke="#555" strokeWidth="1.5"/>
        </g>
      ))}
    </svg>
  </TileFrame>
);

const Vibe = () => (
  <section id="vibe" style={{ background:'var(--mv-raised)', padding:'96px 24px' }}>
    <div style={{ maxWidth:1280, margin:'0 auto' }}>
      <div className="vibe-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1.3fr', gap:48, alignItems:'center' }}>
        <div>
          <Reveal><Eyebrow>Lebih dari Sekadar Kopi</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h2 style={{ marginTop:16, fontFamily:'var(--mv-font-display)', fontWeight:700, fontSize:'var(--mv-h2)', lineHeight:0.95, letterSpacing:'-0.02em', color:'var(--mv-bone)' }}>
              Kami membangun tembok antara kamu dan minumanmu<span style={{ color:'var(--mv-matcha)' }}>.</span>
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p style={{ marginTop:24, fontFamily:'var(--mv-font-body)', fontSize:18, lineHeight:1.5, color:'var(--mv-mute)', maxWidth:460 }}>
              Sengaja. Karena momen terbaik seringkali datang dari hal yang tak terduga. Ketenangan memilih kartu, memasukkannya ke slot, lalu menunggu sesuatu yang menyenangkan datang untukmu.
            </p>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(6,1fr)', gridAutoRows:'80px', gap:12 }}>
            <div style={{ gridColumn:'span 4', gridRow:'span 3' }}><WallTile /></div>
            <div style={{ gridColumn:'span 2', gridRow:'span 2' }}><SlotTile /></div>
            <div style={{ gridColumn:'span 2', gridRow:'span 1' }}><CardTile /></div>
            <div style={{ gridColumn:'span 3', gridRow:'span 2' }}><InteriorTile /></div>
            <div style={{ gridColumn:'span 3', gridRow:'span 2' }}><CounterTile /></div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

window.Vibe = Vibe;
