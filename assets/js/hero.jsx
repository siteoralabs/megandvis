const { Eyebrow } = window;
const I = window.I;

const CardSlot = () => (
  <div style={{ position:'relative', aspectRatio:'3/4', maxWidth:420, marginLeft:'auto' }}>
    <div style={{
      position:'absolute', inset:0,
      background:'linear-gradient(180deg,#1A1A1A 0%,#111 100%)',
      borderRadius:'var(--mv-radius-lg)', border:'1px solid var(--mv-line)',
      boxShadow:'inset 0 1px 0 rgba(255,255,255,0.04),0 40px 80px -40px rgba(0,0,0,0.8)',
    }} />

    <div style={{
      position:'absolute', left:'12%', right:'12%', top:'18%', height:70,
      background:'#050505', borderRadius:12, boxShadow:'inset 0 6px 20px rgba(0,0,0,0.8)',
      display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 16px',
    }}>
      <div style={{ fontFamily:'var(--mv-font-display)', fontWeight:700, fontSize:10, letterSpacing:'0.24em', color:'var(--mv-matcha)' }}>ORDER →</div>
      <div style={{ width:4, height:4, borderRadius:99, background:'var(--mv-matcha)', boxShadow:'0 0 8px var(--mv-matcha)', animation:'mv-blink 1.6s infinite' }} />
    </div>

    <div style={{
      position:'absolute', left:'50%', top:'18%', width:160, height:100,
      marginLeft:-80, marginTop:-60,
      background:'linear-gradient(135deg,var(--mv-matcha) 0%,var(--mv-matcha-deep) 100%)',
      borderRadius:10, padding:14,
      boxShadow:'0 20px 40px -10px rgba(106,171,94,0.3),inset 0 0 0 1px rgba(255,255,255,0.08)',
      color:'var(--mv-ink)', display:'flex', flexDirection:'column', justifyContent:'space-between',
      animation:'mv-slot 3.6s var(--mv-ease) infinite',
    }}>
      <div style={{ fontFamily:'var(--mv-font-display)', fontWeight:700, fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase' }}>Matcha</div>
      <div>
        <div style={{ fontFamily:'var(--mv-font-display)', fontWeight:700, fontSize:20, letterSpacing:'-0.02em' }}>LATTE</div>
        <div style={{ fontFamily:'var(--mv-font-body)', fontSize:11, marginTop:2, opacity:0.7 }}>No. 04 · 23K</div>
      </div>
    </div>

    <div style={{
      position:'absolute', left:'12%', right:'12%', bottom:'14%', height:110,
      background:'#050505', borderRadius:12, boxShadow:'inset 0 6px 20px rgba(0,0,0,0.8)',
      padding:14, display:'flex', alignItems:'flex-end', justifyContent:'space-between',
    }}>
      <div style={{ fontFamily:'var(--mv-font-display)', fontWeight:700, fontSize:10, letterSpacing:'0.24em', color:'var(--mv-gold)' }}>PICKUP →</div>
      <img src={I.matchaLatte} style={{ height:'90%', animation:'mv-pickup 3.6s var(--mv-ease) infinite' }} alt="Matcha Latte" />
    </div>
  </div>
);

const Hero = () => (
  <section id="top" style={{ position:'relative', overflow:'hidden', background:'var(--mv-black)', padding:'40px 24px 120px', minHeight:'calc(100dvh - 72px)' }}>
    <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', opacity:0.12, pointerEvents:'none' }} aria-hidden="true">
      <defs><pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#6AAB5E"/></pattern></defs>
      <rect width="100%" height="100%" fill="url(#dots)"/>
    </svg>
    <div className="hero-grid" style={{ maxWidth:1280, margin:'0 auto', position:'relative', display:'grid', gridTemplateColumns:'1.35fr 1fr', gap:40, alignItems:'center' }}>
      <div>
        <div className="r on" style={{ transitionDelay:'0ms' }}>
          <Eyebrow>Halo, Tetangga! Hadir di Pontianak</Eyebrow>
        </div>
        <div className="r on" style={{ transitionDelay:'80ms' }}>
          <h1 style={{ marginTop:20, fontFamily:'var(--mv-font-display)', fontWeight:700, fontSize:'clamp(52px,9vw,124px)', lineHeight:0.92, letterSpacing:'-0.035em', color:'var(--mv-bone)', margin:'20px 0 0' }}>
            Order Different.<br/><span style={{ color:'var(--mv-matcha)' }}>Taste</span> Different.
          </h1>
        </div>
        <div className="r on" style={{ transitionDelay:'180ms' }}>
          <p style={{ marginTop:24, fontFamily:'var(--mv-font-body)', fontSize:'clamp(16px,1.6vw,20px)', lineHeight:1.45, color:'var(--mv-mute)', maxWidth:520 }}>
            Pengalaman pesan pertama di Pontianak dengan sistem kartu. Pilih kartumu, masukkan ke slot, dan minumanmu siap dijemput.
          </p>
        </div>
        <div className="r on" style={{ transitionDelay:'260ms' }}>
          <div style={{ marginTop:32, display:'flex', gap:12, flexWrap:'wrap' }}>
            <a href="#menu" className="btn-p">Lihat Menu →</a>
            <a href="#how" className="btn-s">Cara Pesan</a>
          </div>
        </div>
        <div className="r on" style={{ transitionDelay:'360ms' }}>
          <div style={{ marginTop:56, display:'flex', gap:28, color:'var(--mv-faint)', fontFamily:'var(--mv-font-body)', fontSize:13 }}>
            <div><span style={{ color:'var(--mv-bone)', fontWeight:600 }}>08.00-23.00</span> · Jum-Min</div>
            <div><span style={{ color:'var(--mv-bone)', fontWeight:600 }}>Cashless</span> only</div>
            <div>Sungai Raya Dalam</div>
          </div>
        </div>
      </div>
      <div className="slot-wrap"><CardSlot /></div>
    </div>
  </section>
);

Object.assign(window, { CardSlot, Hero });
