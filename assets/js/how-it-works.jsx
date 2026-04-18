const { Eyebrow, Reveal, Icon } = window;

const STEPS = [
  { n:'01', title:'Pilih Kartumu',      desc:'Lihat kartu menu di pintu masuk dan ambil yang kamu mau. Satu kartu, satu minuman.',                    icon:'credit-card',         accent:'var(--mv-matcha)' },
  { n:'02', title:'Masukkan Kartunya',  desc:'Masukkan kartu ke slot ORDER di tembok. Barista kami yang urus sisanya.',                                icon:'arrow-right-to-line', accent:'var(--mv-matcha)' },
  { n:'03', title:'Ambil dan Nikmati',  desc:'Beberapa menit kemudian, minumanmu muncul di slot pickup. Tanpa antre. Tanpa canggung.',                 icon:'hand-coins',          accent:'var(--mv-gold)'   },
];

const HowItWorks = () => (
  <section id="how" style={{ background:'var(--mv-raised)', padding:'96px 24px' }}>
    <div style={{ maxWidth:1280, margin:'0 auto' }}>
      <div style={{ maxWidth:820, marginBottom:64 }}>
        <Reveal><Eyebrow>Cara Pesan di MEG&amp;ViS</Eyebrow></Reveal>
        <Reveal delay={80}>
          <h2 style={{ marginTop:16, fontFamily:'var(--mv-font-display)', fontWeight:700, fontSize:'var(--mv-h2)', lineHeight:0.95, letterSpacing:'-0.02em', color:'var(--mv-bone)' }}>
            Tiga langkah menuju <br/><span style={{ color:'var(--mv-matcha)' }}>minuman sempurnamu.</span>
          </h2>
        </Reveal>
      </div>
      <div className="steps-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20 }}>
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 100}>
            <div style={{ background:'var(--mv-surface)', border:'1px solid var(--mv-line)', borderRadius:'var(--mv-radius-lg)', padding:28, display:'flex', flexDirection:'column' }}>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                <div style={{ fontFamily:'var(--mv-font-display)', fontWeight:700, fontSize:56, lineHeight:0.9, color:s.accent, letterSpacing:'-0.04em' }}>{s.n}</div>
                <div style={{ width:48, height:48, borderRadius:'var(--mv-radius)', background:'var(--mv-black)', border:'1px solid var(--mv-line)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <Icon name={s.icon} size={22} color={s.accent} />
                </div>
              </div>
              <h3 style={{ marginTop:32, fontFamily:'var(--mv-font-display)', fontWeight:700, fontSize:24, letterSpacing:'-0.02em', color:'var(--mv-bone)' }}>{s.title}</h3>
              <p style={{ marginTop:10, fontFamily:'var(--mv-font-body)', fontSize:15, lineHeight:1.55, color:'var(--mv-mute)' }}>{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

window.HowItWorks = HowItWorks;
