import type { Metadata, Viewport } from "next";
import { Cinzel, Jost, Playfair_Display } from "next/font/google";

/* ------------------------------------------------------------------ */
/*  Fonts                                                              */
/* ------------------------------------------------------------------ */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-playfair",
});
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-cinzel",
});
const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
});

/* ------------------------------------------------------------------ */
/*  Card data – edit here only                                         */
/* ------------------------------------------------------------------ */
const CARD = {
  name: "Ram Kumar K",
  title: "General Manager - Sales & Operations",
  phoneDisplay: "63606 59595",
  phoneIntl: "+916360659595", // assumes India (+91)
  email: "clubdestinim5mall@gmail.com",
  tagline: ["Great Food", "Fine Drink", "Memorable Moment"],
  brands: {
    primary: { name: "Destini", sub: "Bar & Kitchen" },
    secondary: {
      name: "Cave-N-Dine",
      by: "by Destini",
      sub: "Family Dining & Pub",
    },
  },
  services: [
    "Corporate Booking",
    "Out Door Catering",
    "Lunch Box",
    "Kitty Party",
    "Birthday Party",
    "Farewell Party",
  ],
  // Fill these after you have the real URLs (menu, Google Maps, Instagram...).
  // Empty strings are hidden automatically.
  links: {
    destini: "",
    caveNDine: "",
  },
  thanks: "Thank You For Choosing Us!",
};

const vcard = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  `N:K;Ram Kumar;;;`,
  `FN:${CARD.name}`,
  `ORG:Destini Bar & Kitchen / Cave-N-Dine`,
  `TITLE:${CARD.title}`,
  `TEL;TYPE=CELL:${CARD.phoneIntl}`,
  `EMAIL;TYPE=WORK:${CARD.email}`,
  "END:VCARD",
].join("\r\n");

const vcardHref = `data:text/vcard;charset=utf-8,${encodeURIComponent(vcard)}`;

/* ------------------------------------------------------------------ */
/*  SEO / viewport                                                     */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: `${CARD.name} | Destini Bar & Kitchen`,
  description: `${CARD.name}, ${CARD.title} at Destini Bar & Kitchen and Cave-N-Dine by Destini.`,
};

export const viewport: Viewport = {
  themeColor: "#06170f",
  width: "device-width",
  initialScale: 1,
};

/* ------------------------------------------------------------------ */
/*  Logo – sunburst medallion with D and cocktail glass                */
/* ------------------------------------------------------------------ */
function Medallion() {
  const rays = Array.from({ length: 56 }, (_, i) => (i * 360) / 56);
  return (
    <svg
      viewBox="0 0 120 120"
      className="dc-medallion"
      role="img"
      aria-label="Destini logo"
    >
      <defs>
        <linearGradient id="dc-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f3dc86" />
          <stop offset="0.55" stopColor="#d4ab3f" />
          <stop offset="1" stopColor="#9a7424" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="57" fill="#0b1f16" stroke="url(#dc-gold)" strokeWidth="2.5" />
      <circle cx="60" cy="60" r="52" fill="none" stroke="url(#dc-gold)" strokeWidth="0.8" />
      <g stroke="url(#dc-gold)" strokeWidth="1.1" strokeLinecap="round">
        {rays.map((deg) => (
          <line key={deg} x1="60" y1="11" x2="60" y2="26" transform={`rotate(${deg} 60 60)`} />
        ))}
      </g>
      <circle cx="60" cy="60" r="31" fill="#0b1f16" stroke="url(#dc-gold)" strokeWidth="1.2" />
      {/* D */}
      <path
        d="M43 42 H58 C72 42 79 50 79 60 C79 70 72 78 58 78 H43 Z"
        fill="url(#dc-gold)"
      />
      {/* cocktail glass cut-out */}
      <g fill="#0b1f16">
        <path d="M54 50 H72 L64.5 59 V68 H61.5 V59 Z" />
        <rect x="57" y="68" width="12" height="2" rx="1" />
      </g>
    </svg>
  );
}

function Icon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}

const ICONS = {
  phone:
    "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z",
  mail: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm18 2-10 7L2 6",
  chat: "M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.3A8.4 8.4 0 1 1 21 11.5z",
  user: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM19 8v6M22 11h-6",
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function DigitalCardPage() {
  const whatsapp = `https://wa.me/${CARD.phoneIntl.replace("+", "")}`;

  return (
    <main className={`dc-root ${playfair.variable} ${cinzel.variable} ${jost.variable}`}>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <article className="dc-card">
        {/* Brand block */}
        <header className="dc-brands">
          <section className="dc-brand dc-brand-main">
            <Medallion />
            <h1 className="dc-destini">{CARD.brands.primary.name}</h1>
            <p className="dc-sub dc-sub-ruled">{CARD.brands.primary.sub}</p>
          </section>

          <div className="dc-vrule" aria-hidden="true" />

          <section className="dc-brand dc-brand-alt">
            <h2 className="dc-cave">{CARD.brands.secondary.name}</h2>
            <p className="dc-by dc-sub-ruled">{CARD.brands.secondary.by}</p>
            <p className="dc-pub">{CARD.brands.secondary.sub}</p>
          </section>
        </header>

        {/* Gold ribbon */}
        <div className="dc-ribbon">
          {CARD.tagline.map((t, i) => (
            <span key={t}>
              {t}
              {i < CARD.tagline.length - 1 && <i aria-hidden="true">|</i>}
            </span>
          ))}
        </div>

        {/* Person */}
        <section className="dc-person">
          <h3 className="dc-name">{CARD.name}</h3>
          <p className="dc-role">{CARD.title}</p>

          <ul className="dc-contacts">
            <li>
              <a href={`tel:${CARD.phoneIntl}`}>
                <span className="dc-chip"><Icon d={ICONS.phone} /></span>
                {CARD.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${CARD.email}`}>
                <span className="dc-chip"><Icon d={ICONS.mail} /></span>
                <span className="dc-email">{CARD.email}</span>
              </a>
            </li>
          </ul>

          <div className="dc-actions">
            <a className="dc-btn dc-btn-solid" href={`tel:${CARD.phoneIntl}`}>
              <Icon d={ICONS.phone} /> Call
            </a>
            <a className="dc-btn" href={whatsapp} target="_blank" rel="noopener noreferrer">
              <Icon d={ICONS.chat} /> WhatsApp
            </a>
            <a className="dc-btn" href={`mailto:${CARD.email}`}>
              <Icon d={ICONS.mail} /> Email
            </a>
            <a className="dc-btn" href={vcardHref} download="ram-kumar-k.vcf">
              <Icon d={ICONS.user} /> Save contact
            </a>
          </div>
        </section>

        {/* Services (back of the physical card) */}
        <section className="dc-services" aria-labelledby="dc-services-title">
          <h3 id="dc-services-title" className="dc-services-title">We host</h3>
          <ul>
            {CARD.services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        {/* Optional venue links */}
        {(CARD.links.destini || CARD.links.caveNDine) && (
          <nav className="dc-venues" aria-label="Venue pages">
            {CARD.links.destini && (
              <a href={CARD.links.destini} target="_blank" rel="noopener noreferrer">
                Destini
              </a>
            )}
            {CARD.links.caveNDine && (
              <a href={CARD.links.caveNDine} target="_blank" rel="noopener noreferrer">
                Cave-N-Dine
              </a>
            )}
          </nav>
        )}

        <footer className="dc-thanks">{CARD.thanks}</footer>
      </article>
    </main>
  );
}

/* ------------------------------------------------------------------ */
/*  Styles (scoped by the dc- prefix, no Tailwind needed)              */
/* ------------------------------------------------------------------ */
const css = `
.dc-root{
  --gold-hi:#f3dc86; --gold:#e3c25b; --gold-lo:#a97f27;
  --green-deep:#04120c; --green:#0b2a1d; --green-mid:#123a28;
  --violet:rgba(128,92,214,.38); --ink:#e9efe9; --mute:#b9c7bd;
  min-height:100svh; display:flex; justify-content:center; align-items:flex-start;
  padding:20px 14px 36px;
  font-family:var(--font-jost),system-ui,sans-serif; color:var(--ink);
  background:
    radial-gradient(900px 500px at 105% -10%, var(--violet), transparent 60%),
    radial-gradient(700px 600px at -10% 40%, rgba(24,92,58,.55), transparent 65%),
    linear-gradient(180deg,#071d13 0%, var(--green-deep) 100%);
}
.dc-card{
  position:relative; width:100%; max-width:460px;
  border:1.5px solid var(--gold); border-radius:26px;
  padding:26px 20px 22px;
  background:
    radial-gradient(420px 260px at 100% 0%, var(--violet), transparent 70%),
    radial-gradient(500px 400px at 0% 100%, rgba(30,110,70,.35), transparent 70%),
    linear-gradient(160deg, var(--green) 0%, var(--green-deep) 100%);
  box-shadow:0 0 0 5px rgba(227,194,91,.08), 0 24px 60px rgba(0,0,0,.55);
}
.dc-card::before{
  content:""; position:absolute; inset:7px; border-radius:20px;
  border:1px solid rgba(227,194,91,.28); pointer-events:none;
}

/* brands */
.dc-brands{display:grid; grid-template-columns:1fr; gap:18px; justify-items:center; text-align:center}
.dc-brand{display:flex; flex-direction:column; align-items:center}
.dc-medallion{width:92px; height:92px; filter:drop-shadow(0 4px 10px rgba(0,0,0,.5))}
.gold-text, .dc-destini, .dc-cave{
  background:linear-gradient(180deg,var(--gold-hi) 0%, var(--gold) 45%, var(--gold-lo) 100%);
  -webkit-background-clip:text; background-clip:text; color:transparent;
}
.dc-destini{
  margin:8px 0 2px; font-family:var(--font-playfair),serif; font-weight:800;
  font-size:clamp(2.6rem,13vw,3.4rem); letter-spacing:.03em; line-height:1;
  text-shadow:0 3px 8px rgba(0,0,0,.35);
}
.dc-sub{margin:0; font-weight:500; letter-spacing:.22em; text-transform:uppercase; font-size:.8rem; color:var(--ink)}
.dc-sub-ruled{display:flex; align-items:center; gap:10px}
.dc-sub-ruled::before,.dc-sub-ruled::after{content:""; width:26px; height:1.5px; background:var(--gold)}
.dc-vrule{display:none}
.dc-cave{
  margin:4px 0 6px; font-family:var(--font-cinzel),serif; font-weight:700;
  font-size:clamp(1.9rem,9vw,2.4rem); letter-spacing:.1em; line-height:1.05;
}
.dc-by{margin:0 0 8px; font-family:var(--font-cinzel),serif; font-weight:700; letter-spacing:.14em; text-transform:uppercase; color:var(--gold); font-size:.95rem}
.dc-pub{margin:0; font-family:var(--font-cinzel),serif; font-weight:500; font-size:1rem; color:#e6e9f3; letter-spacing:.04em}

/* ribbon */
.dc-ribbon{
  margin:22px -20px 0; padding:10px 8px; text-align:center;
  background:linear-gradient(90deg,#8a6420 0%, #e8c867 18%, #f6dd8e 50%, #e8c867 82%, #8a6420 100%);
  color:#1a1a0f; font-weight:700; font-size:.64rem; letter-spacing:.2em; text-transform:uppercase;
  display:flex; flex-wrap:wrap; justify-content:center; gap:4px 8px;
  box-shadow:0 2px 10px rgba(0,0,0,.4);
}
.dc-ribbon i{font-style:normal; margin-left:8px; opacity:.75}

/* person */
.dc-person{padding-top:26px}
.dc-name{margin:0; font-weight:700; font-size:1.9rem; letter-spacing:.04em; text-transform:uppercase; color:var(--gold)}
.dc-role{margin:4px 0 0; font-weight:600; font-size:1.02rem; color:var(--ink)}
.dc-contacts{list-style:none; margin:20px 0 0; padding:0; display:grid; gap:12px}
.dc-contacts a{display:flex; align-items:center; gap:14px; color:var(--ink); text-decoration:none; font-size:1.15rem; letter-spacing:.03em}
.dc-email{font-size:.98rem; letter-spacing:.01em; overflow-wrap:anywhere}
.dc-chip{
  flex:none; width:40px; height:40px; border-radius:10px; display:grid; place-items:center;
  color:#2a1d05; background:linear-gradient(145deg,var(--gold-hi),var(--gold-lo));
  box-shadow:0 2px 6px rgba(0,0,0,.45);
}

/* actions */
.dc-actions{display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:22px}
.dc-btn{
  display:flex; align-items:center; justify-content:center; gap:8px;
  min-height:46px; padding:0 12px; border-radius:12px; text-decoration:none;
  font-weight:600; font-size:.95rem; color:var(--gold);
  border:1.25px solid rgba(227,194,91,.7); background:rgba(227,194,91,.05);
  transition:background .2s, transform .15s;
}
.dc-btn:hover{background:rgba(227,194,91,.16)}
.dc-btn:active{transform:scale(.98)}
.dc-btn-solid{color:#241903; border-color:transparent; background:linear-gradient(145deg,var(--gold-hi),var(--gold) 55%,var(--gold-lo))}
.dc-btn-solid:hover{background:linear-gradient(145deg,#fff0a8,var(--gold-hi) 55%,var(--gold))}
.dc-btn:focus-visible,.dc-contacts a:focus-visible,.dc-venues a:focus-visible{outline:2px solid var(--gold-hi); outline-offset:3px}

/* services */
.dc-services{
  margin-top:28px; padding:20px 16px 18px; border-radius:18px; text-align:center;
  border:1px solid rgba(227,194,91,.35);
  background:linear-gradient(180deg,rgba(255,255,255,.035),rgba(255,255,255,.01));
}
.dc-services-title{
  margin:0 0 14px; font-family:var(--font-playfair),serif; font-weight:700; font-size:1.35rem;
  color:var(--gold); letter-spacing:.04em;
}
.dc-services ul{list-style:none; margin:0; padding:0; display:flex; flex-wrap:wrap; justify-content:center; gap:10px}
.dc-services li{
  padding:8px 14px; border-radius:999px; font-weight:700; font-size:.8rem; letter-spacing:.07em; text-transform:uppercase;
  color:var(--gold); border:1px solid rgba(227,194,91,.55); background:rgba(0,0,0,.25);
}

/* venue links */
.dc-venues{display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:20px}
.dc-venues a{
  text-align:center; padding:12px; border-radius:12px; text-decoration:none; font-weight:600;
  color:var(--ink); border:1px solid rgba(227,194,91,.4); background:rgba(0,0,0,.25);
}
.dc-venues a:only-child{grid-column:1 / -1}

/* thanks */
.dc-thanks{
  margin-top:22px; padding:10px 14px; text-align:center; border-radius:12px;
  font-family:var(--font-cinzel),serif; font-style:italic; color:var(--gold); font-size:.95rem; letter-spacing:.04em;
  border:1px solid rgba(227,194,91,.45);
}

/* wider screens: mirror the physical card's two-column header */
@media (min-width:480px){
  .dc-card{padding:30px 26px 24px}
  .dc-ribbon{margin-left:-26px; margin-right:-26px; font-size:.7rem}
  .dc-brands{grid-template-columns:1fr auto 1fr; align-items:center; gap:14px}
  .dc-vrule{display:block; width:1px; align-self:stretch; background:linear-gradient(180deg,transparent,rgba(227,194,91,.6),transparent)}
  .dc-sub-ruled::before,.dc-sub-ruled::after{width:12px}
  .dc-destini{font-size:2.2rem}
  .dc-cave{font-size:1.45rem; letter-spacing:.06em}
  .dc-sub{font-size:.62rem; letter-spacing:.16em}
  .dc-by{font-size:.78rem}
  .dc-pub{font-size:.82rem}
  .dc-medallion{width:78px; height:78px}
}
@media (prefers-reduced-motion:reduce){ .dc-btn{transition:none} }
`;