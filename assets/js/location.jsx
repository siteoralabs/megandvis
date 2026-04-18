const { Eyebrow, Reveal, Icon } = window;

const Location = () => (
  <section id="find" style={{ background:'var(--mv-black)', padding:'96px 24px' }}>
    <div style={{ maxWidth:1280, margin:'0 auto' }}>
      <div className="loc-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1.2fr', gap:40, alignItems:'stretch' }}>
        <div>
          <Reveal><Eyebrow color="var(--mv-gold)">Lokasi Kami</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h2 style={{ marginTop:16, fontFamily:'var(--mv-font-display)', fontWeight:700, fontSize:'var(--mv-h2)', lineHeight:0.95, letterSpacing:'-0.02em', color:'var(--mv-bone)', display:'flex', alignItems:'center', gap:12 }}>
              Temukan Kami, Tetangga <Icon name="map-pin" size={28} color="var(--mv-gold)" />
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <div style={{ marginTop:28, display:'flex', flexDirection:'column', gap:18 }}>
              <div>
                <div style={{ fontFamily:'var(--mv-font-body)', fontSize:11, letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--mv-faint)', fontWeight:600 }}>Alamat</div>
                <div style={{ marginTop:6, fontFamily:'var(--mv-font-display)', fontSize:20, color:'var(--mv-bone)', letterSpacing:'-0.01em' }}>
                  Sungai Raya Dalam,<br/>Pontianak · Kalimantan Barat
                </div>
              </div>
              <div style={{ background:'var(--mv-surface)', border:'1px solid var(--mv-line)', borderRadius:'var(--mv-radius)', padding:20 }}>
                <div style={{ fontFamily:'var(--mv-font-body)', fontSize:11, letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--mv-gold)', fontWeight:600 }}>Jam Buka</div>
                <div style={{ marginTop:14, display:'flex', flexDirection:'column', gap:10 }}>
                  {[['Senin - Kamis','08.00-22.00'],['Jumat - Minggu','08.00-23.00']].map(([d, t]) => (
                    <div key={d} style={{ display:'flex', justifyContent:'space-between', gap:16, fontFamily:'var(--mv-font-body)', fontSize:15 }}>
                      <span style={{ color:'var(--mv-mute)' }}>{d}</span>
                      <span style={{ color:'var(--mv-bone)', fontWeight:600, fontVariantNumeric:'tabular-nums' }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
                <div style={{ padding:'8px 14px', borderRadius:999, background:'rgba(212,168,71,0.12)', color:'var(--mv-gold)', border:'1px solid rgba(212,168,71,0.24)', fontSize:13, fontFamily:'var(--mv-font-body)', fontWeight:600 }}>Cashless only</div>
                <a href="https://instagram.com/megandvis.idn" style={{ padding:'8px 14px', borderRadius:999, background:'transparent', color:'var(--mv-bone)', border:'1px solid var(--mv-line)', fontSize:13, fontFamily:'var(--mv-font-body)', fontWeight:600, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:6, minHeight:44 }}>
                  <Icon name="instagram" size={14} /> @megandvis.idn
                </a>
                <a href="https://tiktok.com/@megandvis.idn" style={{ padding:'8px 14px', borderRadius:999, background:'transparent', color:'var(--mv-bone)', border:'1px solid var(--mv-line)', fontSize:13, fontFamily:'var(--mv-font-body)', fontWeight:600, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:6, minHeight:44 }}>
                  <Icon name="music-2" size={14} /> TikTok
                </a>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <div style={{ height:'100%', minHeight:440, background:'var(--mv-raised)', border:'1px solid var(--mv-line)', borderRadius:'var(--mv-radius-lg)', position:'relative', overflow:'hidden' }}>
            <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%' }} viewBox="0 0 600 500" preserveAspectRatio="xMidYMid slice">
              <rect width="600" height="500" fill="#111"/>
              <g stroke="#262626" strokeWidth="12" fill="none">
                <path d="M-20 120 L650 200"/><path d="M200 -20 L280 520"/>
                <path d="M-20 380 L650 340"/><path d="M430 -20 L470 520"/>
              </g>
              <g stroke="#1A1A1A" strokeWidth="4" fill="none">
                <path d="M-20 60 L650 80"/><path d="M-20 260 L650 270"/>
                <path d="M100 -20 L120 520"/><path d="M340 -20 L360 520"/>
              </g>
              <g fill="#181818">
                <rect x="30" y="220" width="70" height="50" rx="4"/>
                <rect x="380" y="220" width="80" height="60" rx="4"/>
                <rect x="130" y="280" width="100" height="70" rx="4"/>
                <rect x="310" y="390" width="90" height="60" rx="4"/>
              </g>
              <g transform="translate(300 260)">
                <circle r="48" fill="rgba(212,168,71,0.15)"/>
                <circle r="28" fill="rgba(212,168,71,0.3)"/>
                <circle r="10" fill="#D4A847"/>
                <circle r="4" fill="#0D0D0D"/>
              </g>
            </svg>
            <div style={{ position:'absolute', left:20, bottom:20, background:'rgba(13,13,13,0.82)', backdropFilter:'blur(12px)', border:'1px solid var(--mv-line)', borderRadius:'var(--mv-radius)', padding:'12px 16px', display:'flex', alignItems:'center', gap:10 }}>
              <Icon name="map-pin" size={18} color="var(--mv-gold)" />
              <div style={{ fontFamily:'var(--mv-font-body)', fontSize:13, color:'var(--mv-bone)' }}>
                <div style={{ fontWeight:600 }}>MEG&amp;ViS</div>
                <div style={{ color:'var(--mv-mute)', fontSize:12 }}>Sungai Raya Dalam</div>
              </div>
              <span style={{ marginLeft:8, color:'var(--mv-matcha)', fontSize:12, fontFamily:'var(--mv-font-body)', fontWeight:600 }}>Buka di Maps →</span>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

window.Location = Location;
