const { Logo, Icon } = window;

const Footer = () => (
  <footer style={{ background:'var(--mv-black)', borderTop:'1px solid var(--mv-line)', padding:'48px 24px 32px' }}>
    <div className="ft-grid" style={{ maxWidth:1280, margin:'0 auto', display:'grid', gridTemplateColumns:'1.5fr 1fr 1fr', gap:32, alignItems:'flex-start' }}>
      <div>
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <Logo size={28} />
          <span style={{ fontFamily:'var(--mv-font-display)', fontWeight:700, fontSize:18, letterSpacing:'-0.02em', color:'var(--mv-bone)' }}>
            MEG<span style={{ color:'var(--mv-matcha)' }}>&amp;</span>ViS
          </span>
        </div>
        <div style={{ marginTop:14, fontFamily:'var(--mv-font-body)', fontSize:14, color:'var(--mv-mute)', fontStyle:'italic', maxWidth:320 }}>
          Coffee &amp; Matcha Moments, Tart Happiness
        </div>
      </div>
      <div>
        <div style={{ fontSize:11, letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--mv-faint)', fontWeight:600, fontFamily:'var(--mv-font-body)' }}>Kunjungi</div>
        <div style={{ marginTop:10, fontFamily:'var(--mv-font-body)', fontSize:14, color:'var(--mv-bone)', lineHeight:1.65 }}>
          Sungai Raya Dalam<br/>Pontianak · Kalbar<br/>
          <span style={{ color:'var(--mv-mute)' }}>Setiap hari · 08.00 sampai malam</span>
        </div>
      </div>
      <div>
        <div style={{ fontSize:11, letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--mv-faint)', fontWeight:600, fontFamily:'var(--mv-font-body)' }}>Ikuti Kami</div>
        <div style={{ marginTop:10, display:'flex', flexDirection:'column', gap:6 }}>
          <a href="https://instagram.com/megandvis.idn" style={{ fontFamily:'var(--mv-font-body)', fontSize:14, color:'var(--mv-bone)', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:8 }}>
            <Icon name="instagram" size={14} /> @megandvis.idn
          </a>
          <a href="https://tiktok.com/@megandvis.idn" style={{ fontFamily:'var(--mv-font-body)', fontSize:14, color:'var(--mv-bone)', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:8 }}>
            <Icon name="music-2" size={14} /> TikTok · @megandvis.idn
          </a>
        </div>
      </div>
    </div>
    <div style={{ maxWidth:1280, margin:'40px auto 0', paddingTop:20, borderTop:'1px solid var(--mv-line)', display:'flex', justifyContent:'space-between', fontFamily:'var(--mv-font-body)', fontSize:12, color:'var(--mv-faint)' }}>
      <div>© 2025 MEG&amp;ViS. All rights reserved.</div>
      <div>Dibuat di Pontianak · Untuk para Tetangga</div>
    </div>
  </footer>
);

window.Footer = Footer;
