const { useRef, useEffect } = React;

const Logo = ({ size = 32 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={size} height={size}
    style={{ display:'block', flexShrink:0, color:'var(--mv-bone)' }}>
    <circle cx="50" cy="50" r="48" fill="currentColor"/>
    <circle cx="22" cy="24" r="10" fill="#fff"/>
    <circle cx="78" cy="24" r="10" fill="#fff"/>
    <ellipse cx="50" cy="54" rx="30" ry="26" fill="#fff"/>
    <ellipse cx="37" cy="48" rx="7" ry="9" fill="currentColor" transform="rotate(-15 37 48)"/>
    <ellipse cx="63" cy="48" rx="7" ry="9" fill="currentColor" transform="rotate(15 63 48)"/>
    <circle cx="38" cy="47" r="2.2" fill="#fff"/>
    <circle cx="62" cy="47" r="2.2" fill="#fff"/>
    <ellipse cx="50" cy="58" rx="3" ry="2.2" fill="currentColor"/>
    <rect x="41" y="63" width="18" height="14" rx="1.5" fill="currentColor"/>
    <rect x="43" y="65" width="14" height="2" fill="#fff" opacity="0.25"/>
  </svg>
);

const Eyebrow = ({ children, color = 'var(--mv-matcha)' }) => (
  <div style={{
    fontFamily: 'var(--mv-font-body)', fontSize: 12, fontWeight: 600,
    letterSpacing: '0.18em', textTransform: 'uppercase', color,
  }}>{children}</div>
);

const ICONS = {
  'credit-card':         <><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></>,
  'arrow-right-to-line': <><path d="M17 12H3"/><path d="m11 18 6-6-6-6"/><path d="M21 5v14"/></>,
  'hand-coins':          <><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 16 6 6"/><circle cx="16" cy="9" r="2.9"/><circle cx="6" cy="5" r="3"/></>,
  'map-pin':             <><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></>,
  'instagram':           <><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></>,
  'music-2':             <><circle cx="8" cy="18" r="4"/><path d="M12 18V2l7 4"/></>,
};

const Icon = ({ name, size = 20, color = 'currentColor' }) => {
  const d = ICONS[name];
  if (!d) return null;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
      style={{ display:'inline-block', verticalAlign:'middle', flexShrink:0 }}>
      {d}
    </svg>
  );
};

const Reveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('r');
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('on'); obs.disconnect(); }
    }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
};

Object.assign(window, { Logo, Eyebrow, ICONS, Icon, Reveal });
