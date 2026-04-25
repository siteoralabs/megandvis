const { useState } = React;
const { Eyebrow, Reveal } = window;
const I = window.I;

const FEATURED = [
  {
    key: 'matcha-latte',
    name: 'Matcha Latte',
    cat: 'matcha',
    img: I.matchaLatte,
    desc: 'Signature · stone-ground ceremonial grade',
    price: '23K',
    tag: 'Signature',
    accent: 'var(--mv-matcha)',
    accentHex: '#6AAB5E',
  },
  {
    key: 'matcha-berry-cloud',
    name: 'Matcha Berry Cloud',
    cat: 'matcha',
    img: I.matchaBerryCloud,
    desc: 'Matcha berry dengan sweet-cream cloud di atasnya',
    price: '35K',
    accent: 'var(--mv-matcha)',
    accentHex: '#6AAB5E',
  },
  {
    key: 'salt-bread',
    name: 'Salt Bread',
    cat: 'food',
    img: I.saltBread,
    desc: 'Rasa asin gurih, Renyah diluar lembut didalam',
    price: '20K',
    tag: 'Fresh Daily',
    accent: 'var(--mv-gold)',
    accentHex: '#D4A847',
  },
  {
    key: 'egg-tart',
    name: 'Egg Tart',
    cat: 'food',
    img: I.eggTart,
    desc: 'Kulit renyah · custard slow-baked setiap hari',
    price: '18K',
    tag: 'Fresh Daily',
    accent: 'var(--mv-gold)',
    accentHex: '#D4A847',
  },
];

const FeaturedCard = ({ item, isActive, onEnter, onLeave }) => (
  <div
    className="feat-card"
    onMouseEnter={onEnter}
    onMouseLeave={onLeave}
    style={{
      position: 'relative',
      flex: isActive ? '3 3 0%' : '1 1 0%',
      minWidth: 0,
      overflow: 'hidden',
      borderRadius: 'var(--mv-radius-lg)',
      border: `1px solid ${isActive ? item.accentHex + '55' : 'var(--mv-line)'}`,
      background: 'var(--mv-surface)',
      cursor: 'default',
      transition: 'flex 540ms var(--mv-ease), border-color 300ms var(--mv-ease)',
    }}
  >
    {/* Accent tint overlay */}
    <div style={{
      position: 'absolute', inset: 0,
      background: `linear-gradient(140deg, ${item.accentHex}14 0%, transparent 55%)`,
      opacity: isActive ? 1 : 0,
      transition: 'opacity 360ms var(--mv-ease)',
      transitionDelay: isActive ? '180ms' : '0ms',
      pointerEvents: 'none', zIndex: 0,
    }} />

    {/* Product image */}
    <div
      className="feat-img-wrap"
      style={{
        position: 'absolute',
        top: '50%',
        left: isActive ? '64%' : '50%',
        width: isActive ? '52%' : '70%',
        transform: isActive
          ? 'translate(-50%, -52%) rotate(12deg) scale(1.1)'
          : 'translate(-50%, -50%) rotate(0deg) scale(0.9)',
        transition: 'all 540ms var(--mv-ease)',
        transitionDelay: isActive ? '80ms' : '0ms',
        zIndex: 1,
      }}
    >
      <img src={item.img} alt={item.name} style={{ width: '100%', height: 'auto', display: 'block' }} />
    </div>

    {/* Desktop: collapsed name badge — hides when active */}
    <div
      className="feat-label"
      style={{
        position: 'absolute', bottom: 18, left: 0, right: 0,
        display: 'flex', justifyContent: 'center',
        opacity: isActive ? 0 : 1,
        transition: 'opacity 180ms var(--mv-ease)',
        zIndex: 2, pointerEvents: 'none',
      }}
    >
      <span style={{
        fontFamily: 'var(--mv-font-display)', fontWeight: 700, fontSize: 10,
        letterSpacing: '0.16em', textTransform: 'uppercase', color: item.accent,
        padding: '5px 12px', background: 'rgba(0,0,0,0.55)', borderRadius: 999,
        backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)',
        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '80%',
      }}>{item.name}</span>
    </div>

    {/* Desktop: expanded content — slides in from left */}
    <div
      className="feat-content"
      style={{
        position: 'absolute',
        left: 0, top: 0, bottom: 0, width: '54%',
        padding: '28px 24px',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        opacity: isActive ? 1 : 0,
        transform: isActive ? 'translateX(0)' : 'translateX(-14px)',
        transition: 'opacity 280ms var(--mv-ease), transform 280ms var(--mv-ease)',
        transitionDelay: isActive ? '260ms' : '0ms',
        zIndex: 3, pointerEvents: isActive ? 'auto' : 'none',
      }}
    >
      {item.tag && (
        <div style={{
          marginBottom: 8,
          fontFamily: 'var(--mv-font-display)', fontWeight: 700, fontSize: 9,
          letterSpacing: '0.22em', textTransform: 'uppercase', color: item.accent,
        }}>{item.tag}</div>
      )}
      <div style={{
        fontFamily: 'var(--mv-font-display)', fontWeight: 700,
        fontSize: 'clamp(20px, 2vw, 28px)', letterSpacing: '-0.02em',
        color: 'var(--mv-bone)', lineHeight: 1.05,
      }}>{item.name}</div>
      <div style={{
        marginTop: 8,
        fontFamily: 'var(--mv-font-body)', fontSize: 13,
        color: 'var(--mv-mute)', lineHeight: 1.45,
      }}>{item.desc}</div>
      <div style={{ marginTop: 18 }}>
        <span style={{
          fontFamily: 'var(--mv-font-display)', fontWeight: 700, fontSize: 20,
          color: 'var(--mv-lime)', fontVariantNumeric: 'tabular-nums',
        }}>{item.price}</span>
      </div>
    </div>

    {/* Mobile-only: static bottom overlay — always visible, replaces interaction */}
    <div className="feat-mobile-bar" style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      padding: '40px 14px 14px',
      background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, transparent 100%)',
      borderRadius: '0 0 var(--mv-radius-lg) var(--mv-radius-lg)',
      display: 'none',
      zIndex: 4,
    }}>
      {item.tag && (
        <div style={{
          fontFamily: 'var(--mv-font-display)', fontWeight: 700, fontSize: 8,
          letterSpacing: '0.2em', textTransform: 'uppercase', color: item.accent,
          marginBottom: 4,
        }}>{item.tag}</div>
      )}
      <div style={{
        fontFamily: 'var(--mv-font-display)', fontWeight: 700, fontSize: 14,
        letterSpacing: '-0.01em', color: 'var(--mv-bone)', lineHeight: 1.15,
      }}>{item.name}</div>
      <div style={{
        fontFamily: 'var(--mv-font-display)', fontWeight: 700, fontSize: 13,
        color: 'var(--mv-lime)', marginTop: 4, fontVariantNumeric: 'tabular-nums',
      }}>{item.price}</div>
    </div>
  </div>
);

const MenuPreview = () => {
  const [active, setActive] = useState(null);
  return (
    <section id="menu" style={{ background: 'var(--mv-black)', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 40 }}>
          <div>
            <Reveal><Eyebrow>Yang Enak Hari Ini</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h2 style={{ marginTop: 16, fontFamily: 'var(--mv-font-display)', fontWeight: 700, fontSize: 'var(--mv-h2)', lineHeight: 0.95, letterSpacing: '-0.02em', color: 'var(--mv-bone)' }}>
                Menunya, <span style={{ color: 'var(--mv-matcha)', fontStyle: 'italic' }}>Tetangga.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <a href="menu.html" className="btn-s">Lihat Menu Lengkap →</a>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="featured-row" style={{ display: 'flex', gap: 12, height: 400 }}>
            {FEATURED.map(item => (
              <FeaturedCard
                key={item.key}
                item={item}
                isActive={active === item.key}
                onEnter={() => setActive(item.key)}
                onLeave={() => setActive(null)}
              />
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
};

Object.assign(window, { MenuPreview });
