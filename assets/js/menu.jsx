const { useState } = React;
const { Eyebrow, Reveal } = window;
const I = window.I;

const ITEMS = [
  { key:'matcha-latte',       name:'Matcha Latte',        cat:'matcha', img:I.matchaLatte,      desc:'Signature · stone-ground ceremonial grade',  price:'23K', tag:'Signature'  },
  { key:'dirty-matcha',       name:'Dirty Matcha',         cat:'matcha', img:I.dirtyMatcha,      desc:'Matcha base, single espresso shot on top',   price:'28K'                  },
  { key:'oat-matcha',         name:'Oat Matcha Latte',     cat:'matcha', img:I.oatMatcha,        desc:'Matcha + oat milk, naturally sweet',          price:'28K'                  },
  { key:'matcha-berry',       name:'Matcha Berry',         cat:'matcha', img:I.matchaBerry,      desc:'Mixed-berry jam through bright matcha',       price:'32K'                  },
  { key:'matcha-berry-cloud', name:'Matcha Berry Cloud',   cat:'matcha', img:I.matchaBerryCloud, desc:'Matcha berry with a sweet-cream cloud top',   price:'35K'                  },
  { key:'coconut-matcha',     name:'Coconut Matcha Cloud', cat:'matcha', img:I.coconutMatcha,    desc:'Coconut cream, matcha, sea salt finish',      price:'35K'                  },
  { key:'americano',          name:'Americano',            cat:'coffee', img:I.americano,        desc:'Clean double shot, slow-dripped water',       price:'18K'                  },
  { key:'kopi-susu',          name:'Kopi Susu',            cat:'coffee', img:I.kopiSusu,         desc:'Kopi susu klasik ala MEG&ViS',                price:'20K'                  },
  { key:'kopi-susu-ss',       name:'Kopi Susu Sea Salt',   cat:'coffee', img:I.kopiSusuSS,       desc:'Sea salt rounds out the sweetness',           price:'22K'                  },
  { key:'kopi-aren',          name:'Kopi Aren',            cat:'coffee', img:I.kopiAren,         desc:'Gula aren, dark and warm',                    price:'22K'                  },
  { key:'kopi-melon',         name:'Kopi Melon',           cat:'coffee', img:I.kopiMelon,        desc:'Perpaduan kopi dan melon khas Pontianak',     price:'25K'                  },
  { key:'chocolate',          name:'Chocolate',            cat:'coffee', img:I.chocolate,        desc:'Single-origin cacao, slow-melted',            price:'25K'                  },
  { key:'egg-tart',           name:'Egg Tart',             cat:'food',   img:I.eggTart,          desc:'Kulit renyah, custard slow-baked',            price:'18K', tag:'Fresh Daily'},
  { key:'salt-bread',         name:'Salt Bread',           cat:'food',   img:I.saltBread,        desc:'Rasa asin gurih, Renyah diluar lembut didalam', price:'20K'                  },
];

const FILTERS = [
  { key:'all',    label:'Semua',   color:'var(--mv-bone)'   },
  { key:'matcha', label:'Matcha',  color:'var(--mv-matcha)' },
  { key:'coffee', label:'Coffee',  color:'var(--mv-matcha)' },
  { key:'food',   label:'Makanan', color:'var(--mv-gold)'   },
];

const MenuCard = ({ item }) => {
  const accent = item.cat === 'food' ? 'var(--mv-gold)' : 'var(--mv-matcha)';
  return (
    <div className="menu-card" style={{
      background:'var(--mv-surface)', borderRadius:'var(--mv-radius)',
      border:'1px solid var(--mv-line)', padding:18,
      position:'relative', overflow:'hidden',
      borderTop:`3px solid ${accent}`,
      boxShadow:'var(--mv-shadow-card)',
    }}>
      <div style={{ position:'absolute', top:14, right:14, background:'var(--mv-lime)', color:'var(--mv-ink)', fontFamily:'var(--mv-font-display)', fontWeight:700, fontSize:13, padding:'6px 12px', borderRadius:999, zIndex:2 }}>{item.price}</div>
      {item.tag && (
        <div style={{ position:'absolute', top:14, left:14, background:accent, color:'var(--mv-ink)', fontFamily:'var(--mv-font-display)', fontWeight:700, fontSize:10, letterSpacing:'0.14em', textTransform:'uppercase', padding:'5px 10px', borderRadius:999, zIndex:2 }}>{item.tag}</div>
      )}
      <div style={{ height:180, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:14 }}>
        <img src={item.img} className="card-img" style={{ maxHeight:'100%', maxWidth:'100%' }} alt={item.name} />
      </div>
      <div style={{ fontFamily:'var(--mv-font-display)', fontWeight:700, fontSize:20, letterSpacing:'-0.02em', color:'var(--mv-bone)' }}>{item.name}</div>
      <div style={{ marginTop:6, fontFamily:'var(--mv-font-body)', fontSize:13, color:'var(--mv-mute)', lineHeight:1.45 }}>{item.desc}</div>
    </div>
  );
};

const Menu = () => {
  const [f, setF] = useState('all');
  const items = f === 'all' ? ITEMS : ITEMS.filter(i => i.cat === f);
  return (
    <section id="menu" style={{ background:'var(--mv-black)', padding:'96px 24px' }}>
      <div style={{ maxWidth:1280, margin:'0 auto' }}>
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:24, marginBottom:40 }}>
          <div>
            <Reveal><Eyebrow>Yang Enak Hari Ini</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h2 style={{ marginTop:16, fontFamily:'var(--mv-font-display)', fontWeight:700, fontSize:'var(--mv-h2)', lineHeight:0.95, letterSpacing:'-0.02em', color:'var(--mv-bone)' }}>
                Menunya, <span style={{ color:'var(--mv-matcha)', fontStyle:'italic' }}>Tetangga.</span>
              </h2>
            </Reveal>
          </div>
          <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
            {FILTERS.map(fi => (
              <button key={fi.key} onClick={() => setF(fi.key)} style={{
                fontFamily:'var(--mv-font-body)', fontWeight:600, fontSize:13,
                padding:'10px 18px', borderRadius:999, cursor:'pointer',
                background: f === fi.key ? fi.color : 'transparent',
                color:      f === fi.key ? 'var(--mv-ink)' : 'var(--mv-mute)',
                border:     f === fi.key ? `1px solid ${fi.color}` : '1px solid var(--mv-line)',
                transition: 'all 160ms var(--mv-ease)',
                minHeight: 44,
              }}>{fi.label}</button>
            ))}
          </div>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:18 }}>
          {items.map((item, i) => (
            <Reveal key={item.key} delay={(i % 4) * 60}>
              <MenuCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { ITEMS, MenuCard, Menu });
