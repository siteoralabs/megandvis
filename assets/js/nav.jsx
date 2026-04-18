const { useState, useEffect } = React;
const { Logo } = window;

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background:    scrolled ? 'rgba(13,13,13,0.75)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom:  scrolled ? '1px solid var(--mv-line)' : '1px solid transparent',
      transition: 'all 280ms var(--mv-ease)',
    }}>
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'16px 24px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <a href="#top" style={{ display:'flex', alignItems:'center', gap:10, textDecoration:'none', color:'var(--mv-bone)' }}>
          <Logo size={32} />
          <span style={{ fontFamily:'var(--mv-font-display)', fontWeight:700, fontSize:18, letterSpacing:'-0.02em' }}>
            MEG<span style={{ color:'var(--mv-matcha)' }}>&amp;</span>ViS
          </span>
        </a>
        <nav className="nav-links" style={{ display:'flex', gap:26 }}>
          {[['#menu','Menu'],['#how','Cara Pesan'],['#vibe','Suasana'],['#find','Lokasi']].map(([h, l]) => (
            <a key={h} href={h} className="nav-link"
              style={{ fontFamily:'var(--mv-font-body)', fontSize:14, color:'var(--mv-mute)', textDecoration:'none' }}>
              {l}
            </a>
          ))}
        </nav>
        <a href="#menu" className="btn-p" style={{ padding:'12px 22px', fontSize:14 }}>Pesan →</a>
      </div>
    </header>
  );
};

window.Nav = Nav;
